import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeItem }) {
  const [readMore, setReadMore] = useState(true);
  return (
    <article className="card">
      <div className="img-container">
        <img src={image} alt="tour_image" />
      </div>
      <div className="img-text">
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>
          {readMore ? `${info.substring(0, 200)}... ` : info + " "}
          <button
            onClick={() => setReadMore(!readMore)}
            className="readmoreBttn"
          >
            {readMore ? "Read More" : "Show Less"}
          </button>
        </p>
      </div>
      <button onClick={() => removeItem(id)} className="normalBttn">
        Not Interested
      </button>
    </article>
  );
}

export default Tour;
