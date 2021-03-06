import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/navigation.jsx";
import Pricefilter from "../components/pricefilter.jsx";
import CategoryFilter from "../components/CategoryFilter";
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
        <title>All Cupcakes ๐ง</title>
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
          <Nav url={"/"} text={"Home ๐  "} />

          <div className={styles.centre}>
            <h1 className={styles.title}>EMJA Bakery ๐ง</h1>
            <small>The world&rsquo;s best cupcakes</small>
          </div>
          <Nav url={"/basket"} text={"Basket ๐งบ "} />
        </div>
        <h2>All Cupcakes</h2>
        <Pricefilter cupcakeData={cupcakeData} />
        <CategoryFilter cupcakeData={cupcakeData} />
      </main>
    </div>
  );
}
