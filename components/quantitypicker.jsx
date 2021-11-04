import React, { useState } from "react";

export default function QuantityPicker() {
  const [quantity, setQuantity] = useState(0);
  console.log(quantity);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div>
      <div>
        <button onClick={handleIncrement}>Add</button>
      </div>
      {quantity}
      <button onClick={handleDecrement}>Remove</button>
    </div>
  );
}
