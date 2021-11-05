import React, { useState } from 'react';

export default function QuantityPicker({ quantity, setQuantity }) {
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleIncrement();
          }}
        >
          Add
        </button>
      </div>
      {quantity}
      <button
        onClick={(e) => {
          e.preventDefault();
          handleDecrement();
        }}
      >
        Remove
      </button>
    </div>
  );
}
