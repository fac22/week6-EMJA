import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { getAllProducts } from "../database/model";

export async function getStaticProps() {
  const cupcakeData = await getAllProducts();

  return {
    props: {
      cupcakeData,
    },
  };
}

export default function Products({ cupcakeData }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>EMJA Bakery 🧁</h1>
        <small>World&rsquo;s best cupcakes</small>

        <h2>All products</h2>
        <ul className={styles.grid}>
          {cupcakeData.map((cupcake) => (
            <li className={styles.card} key={cupcake.id}>
              <p>
                {cupcake.name.length > 24
                  ? cupcake.name.slice(0, 24) + " ..."
                  : cupcake.name}
              </p>

              <Image
                src={`/images/${cupcake.id}.png`}
                alt={cupcake.name}
                width="50"
                height="50"
              />
              <p>{cupcake.description}</p>
              <Link href={`/products/${cupcake.id}`}>
                <a>Read more</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
