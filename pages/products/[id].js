// import Layout from "../../components/layout";

import Image from "next/image";
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
  return (
    <>
      <article>
        <h1>{cupcakeData.name}</h1>
        <Image
          src={`/images/${cupcakeData.id}.png`}
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
