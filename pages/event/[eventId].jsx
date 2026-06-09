import Layout from "components/layout";
import Head from "next/head";
import EventDetail from "components/Alluvium-Redesign-2026/events/eventDetails";
import MainStageHero from "components/Alluvium-Redesign-2026/events/mainStageHero";
import UpcomingWebinars from "components/Alluvium-Redesign-2026/events/upcomingWebinars";
import { eventData } from "../../data/eventData";
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
      <Head>
        <title>{eventInfo.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
        />
      </Head>
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

export async function getServerSideProps({ params }) {
  const event = eventData.find((e) => e.slug === params.eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      eventInfo: event,
    },
  };
}
