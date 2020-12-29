import React from "react";
import Tour from "./Tour";

function Tours({ tours }) {
  return (
    <section className="tours-container">
      <h1>Our Tours</h1>
      <div className="tour-items">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
