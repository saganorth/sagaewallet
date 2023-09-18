// Cards.js
import React, { useState } from "react";
import CardsList from "../component/CardList";
import  Card  from "../component/Card";
import UserData  from "../component/UserData";
import CreditCards from "../data/CreditCards";

const Cards = () => {
    const [cards, setCards] = useState(CreditCards);

    const setActiveCard = (selectedCard) => {
        const updatedCards = cards.map((card) =>
          card.id === selectedCard.id
            ? { ...card, active: true }
            : { ...card, active: false }
        );
        setCards(updatedCards);
      };
      return (
        <div>
          <h1>My Cards</h1>
          <UserData />
          <CardsList cards={cards} setActiveCard={setActiveCard} />
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      );
    };
    
    export default Cards;

