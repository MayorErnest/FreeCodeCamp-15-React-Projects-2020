import React, { useState } from "react";
import data from "./data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number < 0) {
      return 0;
    } else if (number > data.length - 1) {
      return data.length - 1;
    } else return number;
  };

  const handleLeft = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const handleRight = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    setIndex((index) => {
      if (randomNumber == index) {
        return checkNumber(randomNumber + 1);
      }
      return randomNumber;
    });
  };

  return (
    <article>
      <div className="img-container">
        <img src={image} alt="profile_image" />
      </div>
      <div className="text-container">
        <h3>{name}</h3>
        <h3>{job}</h3>
        <p>{text}</p>
        <div className="nav-buttons">
          <button className="nav-button" onClick={handleLeft}>
            <FaAngleLeft />
          </button>
          <button className="nav-button" onClick={handleRight}>
            <FaAngleRight />
          </button>
        </div>
        <button className="normal-button" onClick={handleRandom}>
          Suprise Me
        </button>
      </div>
    </article>
  );
}

export default Review;
