import { notFound } from "next/navigation";
import { eventData } from "data/eventData";
import Content from "./content";

const findEvent = (eventId) => eventData.find((e) => e.slug === eventId);

export async function generateMetadata({ params }) {
  const eventId = decodeURIComponent((await params).eventId);
  const event = findEvent(eventId);
  return {
    title: event?.title,
    description:
      "Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost.",
    openGraph: {
      title: event.title,
      description: event.description,
      type: "website",
      images: [
        {
          url: event.imgUrl,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [event.imgUrl],
    },

  };

}

export default async function Page({ params }) {
  const eventId = decodeURIComponent((await params).eventId);
  const event = findEvent(eventId);
  if (!event) {
    notFound();
  }
  return <Content eventInfo={event} />;
}
