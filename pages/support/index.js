import Head from "next/head";
// ensure all pages have Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/supportpage.module.scss";
import Layout from "components/layout";
import FaqPage from "../../components/faqPage";
// import SupportSubmenu from '../../components/supportSubmenu'
import BannerRotate from "../../components/BannerRotate";
// import { baseURL } from '../../config'
import { faqData, productData } from "../../data";

export default function Support({ faqs, products }) {
  return (
    <Layout>
      <div className={styles.supportPage}>
        <Head>
          <title>Support | Alluvium</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BannerRotate
          bg="url(assets/support/banner.png)"
          title="Frequently Asked Questions"
          text=""
        />
        <main>
          {/* <SupportSubmenu/> */}
          <div className={styles.supportDisplay} id="faq">
            <FaqPage faqs={faqs} />
          </div>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      faqs: faqData,
      products: productData,
    },
  };
};
