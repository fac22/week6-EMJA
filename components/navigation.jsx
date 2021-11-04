import Link from "next/link";

import stylesNavigation from "./navigation.module.css";

export default function Navigation({ url, text }) {
  return (
    <Link href={url}>
      <a className={`${stylesNavigation.a}, ${stylesNavigation.navigation}`}>
        {text}
      </a>
    </Link>
  );
}
