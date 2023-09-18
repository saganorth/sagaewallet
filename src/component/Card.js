
import React from "react";

const Card = ({ card }) => {
  return (
    <div className={card.active ? "active-card" : "inactive-card"}>
      {card.name}
    </div>
  );
};

export default Card;
