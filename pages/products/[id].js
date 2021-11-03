import { useState, useEffect } from "react";

// import Layout from "../../components/layout";
import stylesProduct from "../../styles/Product.module.css";
import Image from "next/image";
import Button from "../../components/button.jsx";
import Nav from "../../components/navigation.jsx";
import SizePicker from "../../components/size-picker.jsx";

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
  // console.log(params);
  const cupcakeData = await getProduct(params.id);
  return {
    props: {
      cupcakeData,
    },
  };
}

export default function Cupcake({ cupcakeData }) {
  const [size, setSize] = useState("large");

  function chooseClass(sizeV) {
    if (sizeV === "small") {
      return stylesProduct.small;
    } else if (sizeV === "medium") {
      return stylesProduct.medium;
    } else {
      return stylesProduct.large;
    }
  }

  return (
    <>
      <article className={stylesProduct.main}>
        <div className={stylesProduct.navigation}>
          <Nav url={"/"} text={"↩ Back to Homepage"} />
          <Nav url={"/basket"} text={"Basket 🧺 "} />
        </div>

        <h1 className={stylesProduct.h1}>{cupcakeData.name}</h1>

        <div className={`${stylesProduct.image} ${stylesProduct.flex}`}>
          <div className={`${chooseClass(size)} ${stylesProduct.image}`}>

            <Image
              src={`/images/${cupcakeData.id}.png`}
              // src={`/../public/images/id_1.jpeg`}
              alt={cupcakeData.name}
              width="300"
              height="300"
            />
          </div>
        </div>


          <div className={stylesProduct.description}>
            <p>{cupcakeData.description}</p>
          </div>
        </div>
        {/* <p >Price  </p> */}
        <div>
          <SizePicker size={size} setSize={setSize} />
        </div>
        <div>
          <Button text={"Buy"} />
          <Button text={"Add to basket"} />
        </div>
      </article>
    </>
  );
}
