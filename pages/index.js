import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { getAllProducts } from "../database/model";

export async function getStaticProps() {
  const cupcakeData = await getAllProducts();
  return {
    props: {
      cupcakeData,
    },
  };
}

export default function Home({ cupcakeData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>EMJA bakery 🧁</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to EMJA bakery 🧁</h1>
      </main>
      <ul>
        {cupcakeData.map((cupcake) => (
          <li key={cupcake.id}>
            <Link href={`/products/${cupcake.id}`}>
              <a>{cupcake.name}</a>
            </Link>
            <br />
          </li>
        ))}
      </ul>
      <footer className={styles.footer}></footer>
    </div>
  );
}
