import { CaseStudyDataRedesign2025 } from "data";
import Content from "./content";

const findCaseStudy = (caseStudyPageName) =>
  CaseStudyDataRedesign2025.find(
    (caseStudy) => caseStudy.caseStudyPageName.toString() === caseStudyPageName,
  );

// Mirrors the old getStaticPaths with fallback: false
export const dynamicParams = false;

export function generateStaticParams() {
  return CaseStudyDataRedesign2025.map((caseStudy) => ({
    caseStudyPageName: caseStudy.caseStudyPageName.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const caseStudyPageName = decodeURIComponent((await params).caseStudyPageName);
  const caseStudy = findCaseStudy(caseStudyPageName);
  return {
    title: `${caseStudy?.title} | Alluvium`,
    description:
      "Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost.",
  };
}

export default async function Page({ params }) {
  const caseStudyPageName = decodeURIComponent((await params).caseStudyPageName);
  return <Content caseStudy={findCaseStudy(caseStudyPageName)} />;
}
