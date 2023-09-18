// CardsList.js
import React from "react";

const CardsList = ({ cards, setActiveCard }) => {
  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => setActiveCard(card)}
          className={card.active ? "active-card" : "inactive-card"}
        >
          {card.name}
        </div>
      ))}
    </div>
  );
};

export default CardsList;
