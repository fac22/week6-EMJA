// import Layout from "../../components/layout";
import Link from "next/link";
import fs from "fs";

import Image from "next/image";
import { getAllProductIds, getProduct } from "../../database/model";

export async function getStaticPaths() {
  const allProductIds = await getAllProductIds();
  console.log({ allProductIds });
  const productIdArray = allProductIds.map((item) => {
    return { params: { id: item.id.toString() } };
  });

  return {
    paths: productIdArray,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the cheese page using params.id
  const cupcakeData = await getProduct(params.id);
  return {
    props: {
      cupcakeData,
    },
  };
}

export default function Cupcake({ cupcakeData }) {
  return (
    <>
      <article>
        <h1>{cupcakeData.name}</h1>
        <Image
          src={`/../public/images/${cupcakeData.id}.png`}
          // src={`/../public/images/id_1.jpeg`}
          alt={cupcakeData.name}
          width="300"
          height="300"
        />
        <p>{cupcakeData.description}</p>
        {/* <p >Price  </p> */}
      </article>
    </>
  );
}
