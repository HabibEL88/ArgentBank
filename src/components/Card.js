import React from "react";
import "../style/Card.css";

const Card = ({ icon, title, text }) => {
  return (
    <div className="feature-item">
      <img src={icon} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
