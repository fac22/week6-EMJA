import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";

import { getProduct } from "../../database/model.js";

export default function Cupcake({ productData }) {
  return (
    <Layout>
      <article>
        <h1>{productData.name}</h1>
        <Image
            src={`/${productData.image}.jpeg`}
        //   src={`/public/images/id_1.jpeg`}
          alt={productData.name}
          width="300"
          height="300"
        />
        <p>{productData.description}</p>
        {/* <p >Price  </p> */}
      </article>
    </Layout>
  );
}
