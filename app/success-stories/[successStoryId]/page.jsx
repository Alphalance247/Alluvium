import { notFound } from "next/navigation";
import { successData } from "data/successData";
import Content from "./content";

const findStory = (successStoryId) =>
  successData.find((s) => s.slug === successStoryId);

export async function generateMetadata({ params }) {
  const successStoryId = decodeURIComponent((await params).successStoryId);
  const story = findStory(successStoryId);
  return {
    title: story?.title,
    description:
      "Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost.",
  };
}

export default async function Page({ params }) {
  const successStoryId = decodeURIComponent((await params).successStoryId);
  const story = findStory(successStoryId);
  if (!story) {
    notFound();
  }
  return <Content storyData={story} />;
}
