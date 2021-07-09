import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "./index.module.css";

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.count}>Fount {countries.length} countries</div>
      <SearchInput placeholder="Name or Region or Subregion" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
