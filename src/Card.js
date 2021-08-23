import React from "react";
import "./Card.css";

function Card({ img }) {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
