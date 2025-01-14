// ensure all pages have Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// import type { NextPage } from "next";
import Head from "next/head";
// import Footer from "../components/Footer";
import BannerRotate from "../../components/BannerRotate";
import styles from "../../styles/Privacypolicy.module.scss";
import List from "../../components/privacy_policy/List";
import { productData } from "../../data";
import Layout from "components/layout";

const PrivacyPolicy = ({ products }) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Privacy Policy | Alluvium</title>

          <meta
            name="description"
            content="Alluvium University privacy policy"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section>
            <BannerRotate
              bg="url(assets/privacy-policy/banner.png)"
              title="Privacy Policy"
              text=""
            />
            <List />
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

export const getStaticProps = async () => {
  return {
    props: {
      products: productData,
    },
  };
};
