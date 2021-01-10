import React, { useState } from "react";
import data from "./data";

console.log(data.length);
function App() {
  const [numbers, setNumbers] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleNumber = (num) => (num <= 0 ? 1 : num);

  const handleChange = (event) => {
    setNumbers(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setParagraphs(data.slice(0, handleNumber(numbers)));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="paragraph">Paragraph</label>
        <input
          type="number"
          id="paragraph"
          value={numbers}
          onChange={handleChange}
        />
        <button type="submit">Generate</button>
      </form>
      <section>
        {paragraphs.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
    </div>
  );
}

export default App;
