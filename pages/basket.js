import { getBasket } from "../database/model";
import Image from "next/dist/client/image";
import stylesBasket from "../styles/Basket.module.css";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Nav from "../components/navigation.jsx";
import Button from "../components/button.jsx";

export async function getServerSideProps() {
  const basketItems = await getBasket();
  return {
    props: { basketItems },
  };
}

export default function Basket({ basketItems }) {
  console.log(basketItems);
  // const items = JSON.parse(basketItems);
  return (
    <div className={styles.container}>
      <Head>
        <title>EMJA bakery ๐ง</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={stylesBasket.main}>
        <div className={stylesBasket.navigation}>
          <Nav url={"/"} text={"Home ๐  "} />

          <div className={styles.centre}>
            <h1 className={styles.title}>EMJA Bakery ๐ง</h1>
            <small>World&rsquo;s best cupcakes</small>
          </div>
          <Nav url={"/basket"} text={"Basket ๐งบ "} />
        </div>
        <h2 className={stylesBasket.h2}>Your Basket</h2>
        <ul>
          {basketItems.map((item) => (
            <li key={item.products.id}>
              <div className={stylesBasket.item}>
                <p> ๐ง {item.products.id}</p>
                <Image
                  className={stylesBasket.thumb}
                  src={`/images/${item.products.id}.png`}
                  alt={item.products.name}
                  width="90%"
                  height="90%"
                />
                <p>{item.products.name}</p>
                <p>{item.products.price}</p>
                <p>{item.products.quantity}</p>
                <p>{item.products.size}</p>
              </div>
            </li>
          ))}
        </ul>
        <Nav url={"/buy"} text={"Buy Now"} />
        {/* <Button url={"/buy"} text={"Buy Now"} /> */}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
