import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Pricefilter({ cupcakeData }) {
  const [min, setMin] = React.useState(1.75);
  const [category, setCategory] = React.useState("all");
  console.log(category);
  return (
    <div>
      <fieldset>
        <legend>Filter by price</legend>
        <label htmlFor="min-price">
          Price £{min} to £3.50
          <input
            type="range"
            id="min-price"
            min="1.75"
            max="3.50"
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
              <p>£{cupcake.price}</p>
              <Link href={`/products/${cupcake.id}`}>
                <a className={styles.readMore}>Read more</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
