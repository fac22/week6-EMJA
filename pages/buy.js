import Head from "next/head";
import Nav from "../components/navigation.jsx";
import styles from "../styles/Home.module.css";
import stylesProduct from "../styles/Product.module.css";


export default function ThankYou() {
  return (
<div className={styles.container}>
      <Head>
        <title>Thank You 💕</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.buyMain}>
      <div className={stylesProduct.navigation}>
          <Nav url={"/products"} text={"Home 🏠 "} />

          <div className={styles.centre}>
            <h1 className={styles.title}>EMJA Bakery 🧁</h1>
            <small>World&rsquo;s best cupcakes</small>
          </div>
          <Nav url={"/basket"} text={"Basket 🧺 "} />
        </div>

  <div className={stylesProduct.pink}>
        <h1>Thank you</h1>
        <h2>We've received your order</h2>
        <p>You're cupcakes are on its way 🚀</p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
