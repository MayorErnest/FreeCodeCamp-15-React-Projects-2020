import React, { useState } from "react";

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
    </article>
  );
}

export default Alternative;
