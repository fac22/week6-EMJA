import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/navigation.jsx";
import stylesProduct from "../styles/Product.module.css";

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
      <Head>
        <title>All Cupcakes 🧁</title>
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
        <div className={stylesProduct.navigation}>
          <Nav url={"/products"} text={"All Cupcakes 🧁 "} />

          <div className={styles.centre}>
            <h1 className={styles.title}>EMJA Bakery 🧁</h1>
            <small>World&rsquo;s best cupcakes</small>
          </div>
          <Nav url={"/basket"} text={"Basket 🧺 "} />
        </div>

        <h2>All products</h2>
        <ul className={styles.grid}>
          {cupcakeData.map((cupcake) => (
            <li className={styles.card} key={cupcake.id}>
              <div className={styles.flexRow}>
                <p className={styles.bold}>
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
              </div>
              <p>{cupcake.description}</p>
              <Link href={`/products/${cupcake.id}`}>
                <a className={styles.readMore}>Read more</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
