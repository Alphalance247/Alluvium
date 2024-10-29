import Head from "next/head";
import Layout from "../../components/cloud-connect-2/Layout";
import SectionHeader from "../../components/cloud-connect-2/SectionHeader";
import styles from "../../styles/cloud-connect-2/Agenda/agenda.module.scss";
import SpeakerDetails from "../../components/cloud-connect-2/AgendaPage/SpeakerDetails";
import Button from "../../components/cloud-connect-2/Button";
import AgendaSection from "components/cloud-connect-2/Home/AgendaSection";

export default function Agenda() {
  const events = [
    {
      time: "8:00am - 8:30am",
      heading: "Registration",
      content: <p className={styles.bold}>Grand lobby</p>,
    },
    {
      time: "8:00am - 8:30am",
      heading: "Expanding Service Management to Non-IT Departments",
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus nisl proin justo leo
            nisl egestas. Etiam sit mi porttitor facilisi congue convallis id.
            At eros in vestibulum enim integer. Morbi phasellus eu morbi amet
            dictum donec
          </p>
          <SpeakerDetails
            speakerImage={"/assets/cloud-connect/images/speakers/Image.png"}
            speakerName="Kayode Ayoola"
            speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
          />
        </>
      ),
    },
    {
      time: "8:00am - 8:30am",
      heading: "Expanding Service Management to Non-IT Departments",
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur. Velit mauris nibh neque odio
            proin fermentum elementum diam. Elit sed nulla dolor interdum. Enim
            elementum nullam aliquet pharetra vivamus mattis. Enim ipsum in
            volutpat laoreet dolor habitasse. Urna rhoncus fusce ullamcorper
            sagittis. Laoreet duis vel sagittis nullam purus lobortis urna dui.
            Duis diam turpis commodo odio sagittis eleifend libero. Etiam
            tristique tellus at sodales venenatis. Enim id eleifend leo gravida.
          </p>
          <Button className={styles.agendaButton}>View the Slide Deck</Button>
          <div className={styles.speakersGrid}>
            <div className={styles.speakersColumn}>
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-7.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
            </div>
            <div className={styles.speakersColumn}>
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-2.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-3.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
            </div>
          </div>
        </>
      ),
    },

    {
      time: "8:00am - 8:30am",
      heading: "Expanding Service Management to Non-IT Departments",
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur. Velit mauris nibh neque odio
            proin fermentum elementum diam. Elit sed nulla dolor interdum. Enim
            elementum nullam aliquet pharetra vivamus mattis. Enim ipsum in
            volutpat laoreet dolor habitasse. Urna rhoncus fusce ullamcorper
            sagittis. Laoreet duis vel sagittis nullam purus lobortis urna dui.
            Duis diam turpis commodo odio sagittis eleifend libero. Etiam
            tristique tellus at sodales venenatis. Enim id eleifend leo gravida.
          </p>
          <Button className={styles.agendaButton}>View the Slide Deck</Button>
          <div className={styles.speakersGrid}>
            <div className={styles.speakersColumn}>
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-6.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-2.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
            </div>
            <div className={styles.speakersColumn}>
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-4.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-5.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      time: "8:00am - 8:30am",
      heading: "Expanding Service Management to Non-IT Departments",
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur. Velit mauris nibh neque odio
            proin fermentum elementum diam. Elit sed nulla dolor interdum. Enim
            elementum nullam aliquet pharetra vivamus mattis. Enim ipsum in
            volutpat laoreet dolor habitasse. Urna rhoncus fusce ullamcorper
            sagittis. Laoreet duis vel sagittis nullam purus lobortis urna dui.
            Duis diam turpis commodo odio sagittis eleifend libero. Etiam
            tristique tellus at sodales venenatis. Enim id eleifend leo gravida.
          </p>
          <Button className={styles.agendaButton}>View the Slide Deck</Button>
          <div className={styles.speakersGrid}>
            <div className={styles.speakersColumn}>
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-6.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
            </div>
            <div className={styles.speakersColumn}>
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-7.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      time: "8:00am - 8:30am",
      heading: "Expanding Service Management to Non-IT Departments",
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur. Velit mauris nibh neque odio
            proin fermentum elementum diam. Elit sed nulla dolor interdum. Enim
            elementum nullam aliquet pharetra vivamus mattis. Enim ipsum in
            volutpat laoreet dolor habitasse. Urna rhoncus fusce ullamcorper
            sagittis. Laoreet duis vel sagittis nullam purus lobortis urna dui.
            Duis diam turpis commodo odio sagittis eleifend libero. Etiam
            tristique tellus at sodales venenatis. Enim id eleifend leo gravida.
          </p>
          <Button className={styles.agendaButton}>View the Slide Deck</Button>
          <div className={styles.speakersGrid}>
            <div className={styles.speakersColumn}>
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-6.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
            </div>
            <div className={styles.speakersColumn}>
              <SpeakerDetails
                speakerImage={
                  "/assets/cloud-connect/images/speakers/Image-7.png"
                }
                speakerName="Kayode Ayoola"
                speakerTitle="CEO, Stashwall Inc., Futurist & Brand Builder"
              />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Agenda | Cloud Connect 2024</title>
      </Head>
      <section className={styles.agendaSection}>
        <SectionHeader heading="Cloud Connect Agenda" />
      </section>
      {/* <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.dateHeader}>
            <p className={styles.date}>Tuesday, November 12</p>
            <p className={styles.timeZone}>
              All times are in WAT (Nigeria time)
            </p>
          </div>
          <div className={styles.timeline}>
            {events.map((event, index) => (
              <div key={index} className={styles.event}>
                <div className={styles.time}>{event.time}</div>
                <div className={styles.timelineIndicator}></div>
                <div className={styles.details}>
                  <h3 className={styles.heading}>{event.heading}</h3>
                  <div className={styles.content}>{event.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <AgendaSection />
    </Layout>
  );
}
