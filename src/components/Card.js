import React from "react";
import "./card.css";

const Card = ({ imageURL, cardTitle }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={imageURL} alt={cardTitle} />
      </div>
      <div className="title">
        <p>{cardTitle}</p>
      </div>
    </div>
  );
};

export default Card;
