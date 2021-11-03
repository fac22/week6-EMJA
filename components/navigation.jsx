import Link from "next/link";

import stylesNavigation from "./navigation.module.css";

export default function Navigation({ url, text }) {
  return (
    <div className={stylesNavigation.navigation}>
      <Link href={url}>
        <a className={stylesNavigation.a}>{text}</a>
      </Link>
    </div>
  );
}
