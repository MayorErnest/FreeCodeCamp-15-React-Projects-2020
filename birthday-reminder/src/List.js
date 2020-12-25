import React from "react";

function List(props) {
  return (
    <div className="list-item">
      <div>
        <img src={props.image_url} className="list-image" alt="contact_img" />
      </div>
      <div>
        <h4>{props.name}</h4>
        <h6>{props.age} years</h6>
      </div>
    </div>
  );
}

export default List;
