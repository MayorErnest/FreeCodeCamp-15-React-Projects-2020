import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

function Alternative({ value, people }) {
  const { id, image, name, title, quote } = people[value];
  return (
    <article>
      <div className="img-container">
        <img src={image} alt="article-image" />
      </div>
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{quote}</p>
      <p id="quote">
        <FaQuoteRight />
      </p>
    </article>
  );
}

export default Alternative;
