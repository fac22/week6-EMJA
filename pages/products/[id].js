// import Layout from "../../components/layout";
import stylesProduct from "../../styles/Product.module.css";
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
      <article className={stylesProduct.main}>
        <h1 className={stylesProduct.h1}>{cupcakeData.name}</h1>
        <div className={stylesProduct.image}>
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
        </div>
        {/* <p >Price  </p> */}
      </article>
    </>
  );
}
