"use client";
import Layout from "components/layout";
import EventDetail from "components/Alluvium-Redesign-2026/events/eventDetails";
import MainStageHero from "components/Alluvium-Redesign-2026/events/mainStageHero";
import UpcomingWebinars from "components/Alluvium-Redesign-2026/events/upcomingWebinars";
export default function EventId({ eventInfo }) {
  if (!eventInfo) {
    return (
      <Layout>
        <div>Event not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <MainStageHero backgroundImage={eventInfo.backgroundImage} />
      <EventDetail
        dateTime={eventInfo.dateTime}
        startsIn={eventInfo.startsIn}
        title={eventInfo.title}
        descriptionParagraphs={eventInfo.descriptionParagraphs}
        coverPoints={eventInfo.coverPoints}
        hosts={eventInfo.hosts}
        speakers={eventInfo.speakers}
        subtitle={eventInfo.subtitle}
      />
      <UpcomingWebinars
        heading={"Explore More Upcoming Webinars"}
        subtitle={
          "Join upcoming live sessions and learn directly from experts in real time."
        }
      />
    </Layout>
  );
}

