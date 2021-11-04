import React from "react";

export default function Pricefilter({ cupcakeData }) {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(0);
  return (
    <div>
      <fieldset>
        <legend>Price Filter</legend>
        <label htmlFor="min-price">
          Min price
          <input
            type="range"
            id="min-price"
            min="0.5"
            max="9"
            step="0.25"
            value={min}
            onChange={(event) => setMin(event.target.value)}
          />
        </label>
        <label htmlFor="Max-price">
          Max price
          <input
            type="range"
            id="max-price"
            min="0.5"
            max="9"
            step="0.25"
            value={max}
            onChange={(event) => setMax(event.target.value)}
          />
        </label>
      </fieldset>
    </div>
  );
}
