import React, { useState, useEffect } from "react";
import Alternative from "./Alternative";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import data from "./data";

function App() {
  const [value, setValue] = useState(0);
  const [people, setPeople] = useState(data);

  useEffect(() => {
    let slider = setInterval(goFront, 3000);
    return () => clearInterval(slider);
  }, [value]);

  const numberChecker = (value) => {
    if (value < 0) {
      return 3;
    } else if (value > 3) {
      return 0;
    }

    return value;
  };

  const goFront = () => {
    setValue((value) => numberChecker(value + 1));
  };

  const goBack = () => {
    setValue((value) => numberChecker(value - 1));
  };
  return (
    <main className="App">
      <header>
        <h1>
          <span>/</span> Reviews
        </h1>
      </header>
      <section>
        <button onClick={goBack}>
          <AiOutlineArrowLeft />
        </button>
        <Alternative value={value} people={people} />
        <button onClick={goFront}>
          <AiOutlineArrowRight />
        </button>
      </section>
    </main>
  );
}

export default App;
