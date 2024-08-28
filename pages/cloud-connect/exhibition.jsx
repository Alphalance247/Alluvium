import Layout from "components/cloud-connect-2/Layout";
import SectionHeader from "components/cloud-connect-2/SectionHeader";
import Head from "next/head";

export default function Exhibition() {
  return (
    <Layout>
      <Head>
        <title>Exhibition | Cloud Connect 2024</title>
      </Head>
      <section>
        <SectionHeader heading="Exhibition" />
      </section>
    </Layout>
  );
}
