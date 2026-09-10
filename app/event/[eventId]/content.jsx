"use client";
import Layout from "components/layout";
import EventDetail from "components/Alluvium-Redesign-2026/events/eventDetails";
import MainStageHero from "components/Alluvium-Redesign-2026/events/mainStageHero";
import UpcomingWebinars from "components/Alluvium-Redesign-2026/events/upcomingWebinars";
import Container from "components/Alluvium-Redesign-2026/common/container";
import NewEventDetails from "components/Alluvium-Redesign-2026/events/newEventDetails";
export default function EventId({ eventInfo }) {
  if (!eventInfo) {
    return (
      <Layout>
        <div>Event not found</div>
      </Layout>
    );
  }
  console.log(eventInfo);
  return (
    <Layout>
      <div className="">
        <NewEventDetails
          title={eventInfo.title}
          description={eventInfo.description}
          imgSrc={eventInfo.imgUrl}
          date={eventInfo.date}
          coverPoints={eventInfo.coverPoints}
          hosts={eventInfo.hosts}
          subtitle={eventInfo.subtitle}
          breadcrumbItems
          time={eventInfo.time}
          location={eventInfo.location}
        />
      </div>

      {/* <MainStageHero backgroundImage={eventInfo.backgroundImage} />
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
      /> */}
    </Layout>
  );
}
