import Layout from "components/layout";
import HeroCloud from "components/cloud-migration-case-study/hero";
import ContentSection from "components/cloud-migration-case-study/contentSection";
import CaseStudyData from "components/cloud-migration-case-study/caseStudyData";
import { useRouter } from "next/router";

export default function CaseStudyId({ caseStudy }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!caseStudy) {
    return <div>Case Study not found</div>;
  }

  return (
    <Layout>
      <HeroCloud item={caseStudy} />
      <ContentSection item={caseStudy} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = CaseStudyData.map((caseStudy) => ({
    params: { caseStudyId: caseStudy.title },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const caseStudy = CaseStudyData.find((a) => a.title === params.caseStudyId);

  if (!caseStudy) {
    return { notFound: true };
  }

  return { props: { caseStudy } };
}
