import Head from "next/head";
import styles from "../../styles/about.module.scss";
import Image from "next/image";
import { AchievementCounter } from "components/Achievement";
import { BookingCTA } from "components/Consultation";
import { CoreValue, values } from "components/about-us/CoreValues";
import Services from "components/services-components/services";
import WhyAlluvium from "components/whyAlluvium";
import OurSolution from "components/ourSolutions";
// import OurPartners from "components/ourPartners";
import Layout from "components/layout";
import { milestonesData } from "data";

export default function AboutUs() {
  const imagePath = "/assets/about/";
  let achievemnetKeys = 0;
  return (
    <Layout>
      <div className={styles.aboutUsPage}>
        <Head>
          <title>About Us | Alluvium</title>
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
        {/* <Navigation /> */}
        <main>
          <section className={styles.welcome}>
            <div className={styles.shape}></div>
            <div className={styles.content}>
              <div className="container">
                <h1>Leaders in Data Migration</h1>
                <p>
                  Revolutionizing the Data Migration Industry - Your Partner for
                  Success
                </p>
              </div>
            </div>
          </section>

          <section className={styles.about}>
            <div className="container">
              <div className="row gap-5 justify-content-between align-items-center">
                <div className="col-md-6">
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      <h2>About us</h2>
                      <h3>About Alluvium</h3>
                    </div>
                    <p>
                      Welcome to Alluvium, where{" "}
                      <strong>innovation meets expertise.</strong> We are a team
                      of passionate professionals dedicated to providing
                      businesses with cutting-edge solutions leveraging the
                      Atlassian suite of tools.{" "}
                      <strong>
                        Our aim is to simplify the complexity of digital
                        transformation and help our clients achieve their goals
                        with ease and efficiency.
                      </strong>{" "}
                    </p>
                    <p>
                      At Alluvium, we believe in delivering more than just
                      products and services. We strive to provide a unique and
                      personalised experience for each of our clients,
                      understanding their specific needs and providing
                      customised solutions.{" "}
                      <strong>
                        Our unique value proposition lies in our extensive
                        expertise in the Atlassian platform, combined with a
                        focus on innovation and a commitment to excellence.
                      </strong>{" "}
                    </p>{" "}
                    <p>
                      Alluvium's Mission is to provide highly capable,
                      experienced consultants and dependable managed services
                      for a seamless digital transformation to give our clients
                      and partners the advantage in their business environment.{" "}
                    </p>
                    <p>
                      We invite you to learn more about Alluvium and our
                      commitment to excellence. Our team is dedicated to helping
                      you succeed, and we look forward to the opportunity to
                      work with you.
                    </p>
                  </div>
                </div>
                <div className="position-relative col-md-5">
                  <Image
                    src={"/assets/about/atlassian-tools-icon.png"}
                    width={500}
                    height={450}
                    objectFit="contain"
                    alt="Atlassian tools"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.story}>
            <div className={`${styles.content}  container`}>
              <div className={` text-center ${styles.heading}`}>
                <h2>Our Story</h2>
                <h3>How it All started</h3>
              </div>
              <div className="row align-items-center">
                <div className={`col-lg-6 p-5`}>
                  <div className="d-flex flex-wrap">
                    <div className="col-6 pe-1">
                      <Image
                        src={imagePath + "Image-2.png"}
                        width={256 * 1.2}
                        height={241 * 1.2}
                        alt="about-us-learning"
                      />
                    </div>
                    <div className="col-6 ps-1">
                      <Image
                        src={imagePath + "Image-3.png"}
                        width={256 * 1.2}
                        height={241 * 1.2}
                        alt="about-us-1"
                      />
                    </div>
                    <div className="col-12">
                      <Image
                        src={imagePath + "Image-1.png"}
                        width={532 * 1.2}
                        height={283 * 1.2}
                        alt="about-us-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p>
                    It was the summer of 2016, Taiwo, formerly of the Big Four,
                    had been brought into a large UK Bank digital transformation
                    programme to consolidate their project management tool
                    estate into one consolidated Atlassian toolset, was joined
                    by Wale, also formerly of the Big Four, to establish an
                    Agile Way of Working. The synergy was instant and long
                    lasting.{" "}
                  </p>
                  <p>
                    <strong>
                      The tools supported the controls, deployment and scaling
                      of the new way of working while the methodology utilised
                      and maximised the Atlassian toolset.
                    </strong>{" "}
                  </p>
                  <p>
                    We had to consolidate data and configuration from several
                    third-party application, couple of Jira instances to a
                    single new Jira instance. Same for documentation storage and
                    Devops tools. All the while building, integrating to, and
                    reporting from a new data lake.
                  </p>
                  <p>
                    After the success of that programme, we went to repeat a
                    similar delivery for one of UK's biggest telecom providers.
                    We have since delivered some of the largest Atlassian tools
                    Consolidation and accompanying Administration, Engineering,
                    Integration, and long-term Support of the Atlassian products
                    for all ways of working.
                  </p>
                  <p>
                    <strong>
                      We routinely put back into the customers' pockets, 15 –
                      45% of their annual license costs,
                    </strong>{" "}
                    by consolidating and scaling their use of Jira, Confluence,
                    Bitbucket and other Atlassian products, from multiple
                    Atlassian and third-party applications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.achievements}>
            <div className="container">
              <h2 className={styles.h2}>Our Achievements</h2>
              <div className="row mb-5">
                {milestonesData.map(({ value, category }) => (
                  <div
                    className="col-lg-2 col-md-4 col-sm-6 col-6"
                    key={achievemnetKeys++}
                  >
                    <AchievementCounter name={category} value={value} />
                  </div>
                ))}
              </div>

              <BookingCTA />
            </div>
          </section>

          <Services />

          <WhyAlluvium />

          {/* <OurPartners /> */}

          <section className={styles.values}>
            <div className="container">
              <h2 className={styles.h2}>Our Core Values</h2>
              <p className={styles.p}>
                At Alluvium, we are guided by three core values -{" "}
                <strong>Ownership, Leadership,</strong> and{" "}
                <strong>Excellence</strong>. These values serve as the
                foundation of everything we do and are central to our mission of
                delivering exceptional services and products to our clients.
                This drive us towards a common goal - to empower businesses with
                the tools and support they need to succeed in today’s digital
                landscape.
              </p>
              <div className="row">
                {values.map((value) => (
                  <div className="col-lg-4 col-md-6" key={achievemnetKeys++}>
                    <CoreValue
                      title={value.title}
                      description={value.description}
                      image={value.image}
                      bg={value.backgroundImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.cta}>
            <div className="container">
              <BookingCTA />
            </div>
          </section>

          <OurSolution />

          <section className={styles.impact}>
            <div className={styles.content}>
              <h2 className={styles.h2}>Our Impact in the Society</h2>
              <p>
                <strong> JayTee Ojo Foundation</strong> is a non-profit
                organisation set up from Ekiti to help make the young person
                globally competitive and help our communities towards
                self-sustenance.
              </p>
              <p>
                We have, among other projects, donated solar streetlights to
                light up communities at night, we have donated borehole water
                fountains, we have sponsored several medical interventions, food
                banks, sports intervention as well as farmer empowerment and
                local farming interventions.
              </p>
              <p>
                For all the intervention projects and works mentioned above and
                many more besides, we are prouder of the investments we make
                into the future via educational interventions from donating
                books to students, to multiple scholarship programmes that cover
                school fees, various examination registration fees,
                accommodation, and projects support.
              </p>
              <a
                href="https://jayteeojo.com"
                target="_blank"
                className="btn btn-pri mt-4"
              >
                Visit Website
              </a>
            </div>
            <div className={styles.contentRight}></div>
          </section>

          {/* <section>
            <ConsultationForm />
          </section> */}
        </main>
      </div>
    </Layout>
  );
}
