import Layout from "../../components/layout";
import { db } from "../../database/connection";
import Link from "next/link";
import Image from "next/image";

export default function Cupcake({ cupcakeData }) {
  return (
    <Layout>
      <article>
        <h1></h1>
        <Image
        //   src={`/${cupcakeData.image}.jpeg`}
        src={`/public/.jpeg`}
          alt={cupcakeData.name}
          width="300"
          height="300"
        />
        <p>{cupcakeData.description}</p>
        {/* <p >Price  </p> */}
      </article>
    </Layout>
  );
}
