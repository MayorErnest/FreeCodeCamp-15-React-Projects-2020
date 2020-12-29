import React from "react";

function Tour({ name, info, image, price }) {
  return (
    <article>
      <div className="img-container">
        <img src={image} alt="tour_image" />
      </div>
      <div className="img-text">
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <p>{info}</p>
      </div>
      <button>Not Interested</button>
    </article>
  );
}

export default Tour;
