import { useState, useEffect } from "react";

// import Layout from "../../components/layout";
import stylesProduct from "../../styles/Product.module.css";
import Image from "next/image";
import Button from "../../components/button.jsx";
import Nav from "../../components/navigation.jsx";
import SizePicker from "../../components/size-picker.jsx";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import QuantityPicker from "../../components/quantity-picker.js";

import { getAllProductIds, getProduct } from "../../database/model";

export async function getStaticPaths() {
  const allProductIds = await getAllProductIds();
  const productIdArray = allProductIds.map((item) => {
    return { params: { id: item.id.toString() } };
  });

  return {
    paths: productIdArray,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const cupcakeData = await getProduct(params.id);
  return {
    props: {
      cupcakeData,
    },
  };
}

async function addToBasket(data) {
  await fetch("/api/basket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export default function Cupcake({ cupcakeData }) {
  const [size, setSize] = useState(" ");
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <Head>
        <title>Delicious Cupcake 🧁</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
          rel="stylesheet"
        />
      </Head>

      <article className={stylesProduct.main}>
        <div className={stylesProduct.navigation}>
          <Nav url={"/"} text={"Home 🏠 "} />
          <div className={styles.centre}>
            <h1 className={styles.title}>EMJA Bakery 🧁</h1>
            <small>World&rsquo;s best cupcakes</small>
          </div>
          <Nav url={"/basket"} text={"Basket 🧺 "} />
        </div>

        <form onSubmit={() => addToBasket(cupcakeData)}>
          <h1 className={stylesProduct.h1}>{cupcakeData.name}</h1>

          <div className={`${stylesProduct.image}, ${stylesProduct.flex}`}>
            <div className={`${stylesProduct.image}`}>
              <Image
                src={`/images/${cupcakeData.id}.png`}
                // src={`/../public/images/id_1.jpeg`}
                alt={cupcakeData.name}
                width="300"
                height="300"
              />
            </div>
            <div className={stylesProduct.description}>
              <p>{cupcakeData.description}</p>
              <p>£{cupcakeData.price}</p>
            </div>
          </div>
          <div className={stylesProduct.flex}>
            <QuantityPicker quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className={stylesProduct.flex}>
            <SizePicker size={size} setSize={setSize} />
          </div>
          <div className={stylesProduct.buyButton}>
            <Button text={"Add to basket"} />
          </div>
        </form>
      </article>
    </>
  );
}
