import { teamData } from "data";
import Content from "./content";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const findTeamMate = (alluvianTag) =>
  teamData.find((alluvian) => alluvian.alluvianTag.toString() === alluvianTag);

// Mirrors the old getStaticPaths with fallback: false
export const dynamicParams = false;

export function generateStaticParams() {
  return teamData.map((alluvian) => ({
    alluvianTag: alluvian.alluvianTag.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const { alluvianTag } = await params;
  const teamMate = findTeamMate(alluvianTag);
  const fullName = `${capitalize(teamMate.firstName)} ${capitalize(teamMate.lastName)}`;
  return {
    title: `${fullName} | Alluvium`,
    description:
      "Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost.",
    keywords: `${fullName} Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira`,
  };
}

export default async function Page({ params }) {
  const { alluvianTag } = await params;
  return <Content teamMate={findTeamMate(alluvianTag)} />;
}
