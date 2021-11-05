import React, { useState } from "react";
import styles from "./quantity-picker.module.css";

export default function QuantityPicker({ quantity, setQuantity }) {
  // const handleIncrement = () => {
  //   setQuantity((quantity += 1));
  // };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <button className={styles.buttons}
          onClick={(e) => {
            e.preventDefault();
            handleIncrement();
          }}
        >
          Add ⬆️
        </button>
      </div>
      {quantity}
      <button className={styles.buttons}
        onClick={(e) => {
          e.preventDefault();
          handleDecrement();
        }}
      >
        Remove ⬇️
      </button>
    </div>
  );
}
