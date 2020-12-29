import React, { useState, useEffect } from "react";
import "./App.css";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeItem = (id) => {
    const newTour = tours.filter((tour) => tour.id != id);
    setTours(newTour);
  };

  useEffect(fetchTours, []);

  if (tours.length == 0) {
    return (
      <main className="tour-refresh">
        <h1 className="tours-header">No Tours Left</h1>
        <button onClick={() => fetchTours()} className="normalBttn">
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeItem={removeItem} />
      {/* <Loading /> */}
    </main>
  );
}

export default App;
