import Head from "next/head";
import Layout from "../../../components/cloud-connect-2/Layout";
import { useRouter } from "next/router";

export default function NewsItem() {
  const router = useRouter();
  const { newsId } = router.query;

  return (
    <Layout>
      <Head>
        <title>News Item | Cloud Connect 2024</title>
      </Head>
      <h1>News Item {newsId}</h1>
    </Layout>
  );
}
