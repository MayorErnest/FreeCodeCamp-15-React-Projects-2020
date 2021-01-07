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

  const { title, dates, duties, company } = data[index];
  return (
    <main className="App">
      <header>
        <h1>Experience</h1>
      </header>
      <aside>
        {data.map((item, index) => (
          <button key={item.id} onClick={() => setIndex(index)}>
            {item.company}
          </button>
        ))}
      </aside>
      <section>
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
