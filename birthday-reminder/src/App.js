import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [myData, setMyData] = useState(data);
  return (
    <main>
      <section className="container">
        <h1>{myData.length} birthdays today</h1>
        {myData.map((dataItem) => (
          <List
            key={dataItem.id}
            image_url={dataItem.image}
            name={dataItem.name}
            age={dataItem.age}
          />
        ))}
        <button onClick={() => setMyData([])}>Clear All</button>
        {myData.length <= 0 && (
          <button onClick={() => setMyData(data)}>Refill Data</button>
        )}
      </section>
    </main>
  );
}

export default App;
