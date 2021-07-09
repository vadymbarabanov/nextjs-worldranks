import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "World Ranks" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Vadym Barabanov" />
        <meta name="description" content="Created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <h1 className={styles.header_label}>World Ranks</h1>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a href="https://github.com/vadymbarabanov">Vadym Barabanov</a>
      </footer>
    </div>
  );
};
export default Layout;
