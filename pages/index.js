import Head from "next/head";
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

export default function Home({ cupcakeData }) {
  console.log(cupcakeData);
  return (
    <div className={styles.container}>
      <Head>
        <title>EMJA bakery 🧁</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to EMJA bakery 🧁</h1>
        <ul className={styles.grid}>
          {cupcakeData.map((cupcake) => (
            <li className={styles.card} key={cupcake.id}>
              <p>{cupcake.name}</p>

              <Image
                src={`/images/${cupcake.id}.png`}
                alt={cupcake.name}
                width="50"
                height="50"
              />
              <p>{cupcake.description}</p>
              <Link href={`/products/${cupcake.id}`}>
                <a>Click</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
