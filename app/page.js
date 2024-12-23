import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.page}>
      next-template-js

      <Link href="/learn/dashboard">dashboard</Link>
    </div>
  );
}
