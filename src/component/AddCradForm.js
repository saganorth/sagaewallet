import React, { useState } from "react";
import {CreditCrads}
const AddCardForm = () => {
  const [cardInfo, setCardInfo] = useState({
    vendor: "",
    cardNumber: "",
    cardholder: "",
    expireMonth: "",
    expireYear: "",
    ccv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  return (
    <div>
      <h1>Add New Card</h1>
      {/* Preview of the credit card */}
      <div className="credit-card-preview">
        <div className="credit-card">
          <div className="card-header">
            <div className="vendor">{cardInfo.vendor || "Vendor"}</div>
          </div>
          <div className="card-number">
            {cardInfo.cardNumber || "**** **** **** ****"}
          </div>
          <div className="card-footer">
            <div className="cardholder">
              {cardInfo.cardholder || "Cardholder"}
            </div>
            <div className="expire">
              {cardInfo.expireMonth || "MM"}/{cardInfo.expireYear || "YY"}
            </div>
          </div>
        </div>
      </div>
      {/* Card input form */}
      <form>
        <label>
          Vendor:
          <input
            type="text"
            name="vendor"
            value={cardInfo.vendor}
            onChange={handleChange}
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={cardInfo.cardNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Cardholder:
          <input
            type="text"
            name="cardholder"
            value={cardInfo.cardholder}
            onChange={handleChange}
          />
        </label>
        <label>
          Expire Month:
          <input
            type="text"
            name="expireMonth"
            value={cardInfo.expireMonth}
            onChange={handleChange}
          />
        </label>
        <label>
          Expire Year:
          <input
            type="text"
            name="expireYear"
            value={cardInfo.expireYear}
            onChange={handleChange}
          />
        </label>
        <label>
          CCV:
          <input
            type="text"
            name="ccv"
            value={cardInfo.ccv}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default AddCardForm;

