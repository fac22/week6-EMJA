import { useState, useEffect } from "react";

// import Layout from "../../components/layout";
import stylesProduct from "../../styles/Product.module.css";
import Image from "next/image";
import Button from "../../components/button.jsx";
import Nav from "../../components/navigation.jsx";
import SizePicker from "../../components/size-picker.jsx";
import Head from "next/head";

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

export default function Cupcake({ cupcakeData }) {
  const [size, setSize] = useState(" ");

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
          <Nav url={"/basket"} text={"Basket 🧺 "} />
        </div>

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
            <p>{cupcakeData.price}</p>
          </div>
        </div>

        {/* <p >Price  </p> */}
        <div>
          <SizePicker size={size} setSize={setSize} />
        </div>
        <div>
          <Button text={"Add to basket"} />
        </div>
      </article>
    </>
  );
}
