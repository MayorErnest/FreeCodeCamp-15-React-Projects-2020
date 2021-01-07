import React, { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    let response = await fetch(url);
    let responseJson = await response.json();
    setData(responseJson);
    setLoading(false);
  };

  useEffect(() => fetchData(), []);
  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  const { title, dates, duties, company } = data[index];
  return (
    <main className="App">
      <header>
        <h1>Experience</h1>
        <hr />
      </header>
      <section>
        <aside>
          {data.map((item, itemIndex) => (
            <button
              key={item.id}
              className={index == itemIndex && "active"}
              onClick={() => setIndex(itemIndex)}
            >
              {item.company}
            </button>
          ))}
        </aside>
        <article>
          <h2>{title}</h2>
          <h4>{company}</h4>
          <h5>{dates}</h5>
          {duties.map((duty, index) => (
            <p key={index}>{duty}</p>
          ))}
        </article>
      </section>
    </main>
  );
}

export default App;
