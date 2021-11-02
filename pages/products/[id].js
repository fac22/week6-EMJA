// import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";

import { getProduct, getAllProductsIds } from "../../database/model.js";

export async function getStaticPaths() {
  const paths = getAllProductsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {}

export default function Cupcake({ productData }) {
  return (
    <>
      <article>
        <h1>{productData.name}</h1>
        <Image
          src={`/${productData.image}.png`}
          //   src={`/public/images/id_1.jpeg`}
          alt={productData.name}
          width="300"
          height="300"
        />
        <p>{productData.description}</p>
        {/* <p >Price  </p> */}
      </article>
    </>
  );
}
