import Content from "./content";

export const metadata = {
  title: "Alluvium | Cloud Upgrade",
  description:
    "Alluvium, an Atlassian Solution Partner in the United States, United Kingdom, and Nigeria. We deliver ITSM, DevOps, Agile, Cloud Migration, and workflow automation services.",
  keywords:
    "Atlassian Solution Partner, Atlassian services, ITSM solutions, Jira Service Management, Confluence, Jira Software, Bitbucket, DevOps tools, Agile workflows, Cloud migration, workflow automation, project management tools, Atlassian partner US, Atlassian partner UK, Atlassian partner Nigeria, ITSM Atlassian consultant, enterprise collaboration tools.",
};

export default function Page() {
  return (
    <>
      <link rel="preload" as="image" href="/assets/redesign-2025/home/high-velocity.webp" />
      <Content />
    </>
  );
}
