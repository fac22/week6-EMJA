import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Pricefilter({ cupcakeData }) {
  const [min, setMin] = React.useState(0);

  return (
    <div>
      <fieldset>
        <legend>Filter by price</legend>
        <label htmlFor="min-price">
          Price £1.00 to £4.00
          <input
            type="range"
            id="min-price"
            min="1"
            max="4"
            step="0.25"
            value={min}
            onChange={(event) => setMin(event.target.value)}
          />
        </label>
      </fieldset>
      <ul className={styles.grid}>
        {cupcakeData
          .filter((cupcake) => cupcake.price >= min)
          .map((cupcake) => (
            <li className={styles.card} key={cupcake.id}>
              <div className={styles.flexRow}>
                <p className={styles.bold}>
                  {cupcake.name.length > 18
                    ? cupcake.name.slice(0, 18) + " ..."
                    : cupcake.name}
                </p>

                <Image
                  src={`/images/${cupcake.id}.png`}
                  alt={cupcake.name}
                  width="50"
                  height="50"
                />
              </div>
              <p>{cupcake.description}</p>
              <p>£{cupcake.price.toFixed(2)}</p>
              <Link href={`/products/${cupcake.id}`}>
                <a className={styles.readMore}>Read more</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

// .filter(
//   (cupcake) =>
//
// )
