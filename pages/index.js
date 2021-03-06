import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/navigation.jsx";
import stylesProduct from "../styles/Product.module.css";

import { getAllProducts } from "../database/model";

export async function getServerSideProps() {
  const cupcakeData = await getAllProducts();

  const shuffledCupcakes = cupcakeData.sort(() => 0.5 - Math.random());
  let selectedCupcakes = shuffledCupcakes.slice(0, 6);
  return {
    props: {
      selectedCupcakes,
    },
  };
}

export default function Home({ selectedCupcakes }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>EMJA bakery ๐ง</title>
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
          <Nav url={"/products"} text={"All Cupcakes ๐ง "} />

          <div className={styles.centre}>
            <h1 className={styles.title}>EMJA Bakery ๐ง</h1>
            <small>World&rsquo;s best cupcakes</small>
          </div>
          <Nav url={"/basket"} text={"Basket ๐งบ "} />
        </div>
        <Image
          className={styles.header}
          src={`/images/header.jpeg`}
          width="650"
          height="390"
          alt="a row of cupcakes with blue icing and sprinkles"
        />
        <h2>Featured products</h2>
        <ul className={styles.grid}>
          {selectedCupcakes.map((cupcake) => (
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
                  width="70"
                  height="70"
                />
              </div>
              <p>{cupcake.description}</p>
              <p>ยฃ{cupcake.price}</p>
              <Link href={`/products/${cupcake.id}`}>
                <a className={styles.readMore}>Read more</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
