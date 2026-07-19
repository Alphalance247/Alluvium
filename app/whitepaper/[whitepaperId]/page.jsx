import { notFound } from "next/navigation";
import { environment } from "env/env.local";
import Content from "./content";

// Replaces the old getServerSideProps: fetched per request (no-store), so
// updated whitepapers show up without a rebuild.
async function fetchArticle(whitepaperId) {
  const res = await fetch(
    `${environment?.baseUrl}api/blog/posts/${whitepaperId}/`,
    { cache: "no-store" },
  );
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const whitepaperId = decodeURIComponent((await params).whitepaperId);
  const article = await fetchArticle(whitepaperId);
  return {
    title: article?.pageTitle || article?.title,
    description:
      "Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost.",
    keywords:
      "Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira",
  };
}

export default async function Page({ params }) {
  const whitepaperId = decodeURIComponent((await params).whitepaperId);
  const article = await fetchArticle(whitepaperId);
  if (!article || !article.slug) {
    notFound();
  }
  return <Content article={article} />;
}
