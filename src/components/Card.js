import React from "react";
import laptop from "../images/laptop.jpeg";
import "./card.css";

const Card = () => {
  return (
    <div className="card_container">
      <div className="card">
        <div className="image">
          <img src={laptop} />
        </div>
        <div className="title">
          <p>This is the image</p>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={laptop} />
        </div>
        <div className="title">
          <p>This is the image</p>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={laptop} />
        </div>
        <div className="title">
          <p>This is the image</p>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={laptop} />
        </div>
        <div className="title">
          <p>This is the image</p>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={laptop} />
        </div>
        <div className="title">
          <p>This is the image</p>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={laptop} />
        </div>
        <div className="title">
          <p>This is the image</p>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={laptop} />
        </div>
        <div className="title">
          <p>This is the image</p>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={laptop} />
        </div>
        <div className="title">
          <p>This is the image</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
