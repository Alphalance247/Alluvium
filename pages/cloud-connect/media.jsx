import Head from "next/head";
import Layout from "../../components/cloud-connect-2/Layout";
import SectionHeader from "../../components/cloud-connect-2/SectionHeader";

export default function Media() {
  return (
    <Layout>
      <Head>
        <title>Media | Cloud Connect 2024</title>
      </Head>
      <section className={styles.agendaSection}>
        <SectionHeader heading="Media" />
      </section>
    </Layout>
  );
}
