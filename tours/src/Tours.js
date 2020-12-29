import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeItem }) {
  return (
    <section className="tours-container">
      <h1 className="tours-header">Our Tours</h1>
      <div className="tour-items">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeItem={removeItem} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
