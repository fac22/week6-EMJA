import Head from "next/head";
import Nav from "../components/navigation.jsx";
import styles from "../styles/Home.module.css";
import stylesProduct from "../styles/Product.module.css";


export default function ThankYou() {
  return (
<div className={styles.container}>
      <Head>
        <title>Thank You ๐</title>
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
          <Nav url={"/products"} text={"Home ๐  "} />

          <div className={styles.centre}>
            <h1 className={styles.title}>EMJA Bakery ๐ง</h1>
            <small>World&rsquo;s best cupcakes</small>
          </div>
          <Nav url={"/basket"} text={"Basket ๐งบ "} />
        </div>

  <div className={stylesProduct.pink}>
        <h1>Thank you</h1>
        <h2>We&rsquo;ve received your order</h2>
        <p>Your cupcakes are on its way ๐</p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
