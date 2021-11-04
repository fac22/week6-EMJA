import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function CategoryFilter({ cupcakeData }) {
  const [category, setCategory] = React.useState("All");
  console.log(category);
  return (
    <div>
      <fieldset>
        <legend>Categories</legend>
        <label htmlFor="all">
          All
          <input
            type="radio"
            name="categories"
            id="all"
            value="all"
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
        <label htmlFor="deluxe">
          Deluxe
          <input
            type="radio"
            name="categories"
            id="deluxe"
            value="Deluxe"
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
        <label htmlFor="chocolate">
          Chocolate
          <input
            type="radio"
            name="categories"
            id="chocolate"
            value="Chocolate"
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
        <label htmlFor="vegan">
          Vegan
          <input
            type="radio"
            name="categories"
            id="vegan"
            value="Vegan"
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
      </fieldset>
      <ul className={styles.grid}>
        {cupcakeData
          .filter((cupcake) => cupcake.category == category)
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
