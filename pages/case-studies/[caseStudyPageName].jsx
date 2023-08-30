import React, { useCallback, useState, useMemo } from "react";
// import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { InView } from "react-intersection-observer";
import styles from "../../styles/casestudypage.module.scss";
import { caseStudiesData } from "../../data";
import BookingCTA from "components/Booking";
import Layout from "components/layout";

export default function CaseStudy({ caseStudy }) {
  const [activeNav, setActiveNav] = useState(null);
  const { details } = useMemo(() => caseStudy, [caseStudy]);

  const changeNav = useCallback((inView, entry) => {
    if (inView) {
      setActiveNav(entry?.target?.id);
    }
  }, []);

  return (
    <Layout>
      <div className={styles.caseStudyPage}>
        <Head>
          <title>{caseStudy?.title + ' | Alluvium'}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
          />
        </Head>
        <main>
          <section
            className={`container-fluid ${styles.heroSection}`}
            style={{ backgroundImage: `url(${details.displayImage})` }}
          >
            <div className="container">
              <h1>{details.caseStudyTitle}</h1>
              <div className="w-100 mb-5 d-flex flex-column flex-md-row justify-content-between gap-md-4">
                {details.caseStudyAchievements?.map((achievements) => (
                  <div className={styles.results} key={achievements.goal}>
                    <Image
                      priority
                      src={achievements.icon}
                      width={60}
                      height={60}
                      alt="Successfully Trained In-house Administrator"
                    />
                    <p>{achievements.goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={`container-fluid p-0 ${styles.contentSection}`}>
            <section className={`container-fluid ${styles.navSection}`}>
              <div className="container py-3 py-md-0 d-flex justify-content-between align-items-center">
                <div className="me-auto d-none d-md-block">
                  <ul className="list-unstyled d-flex gap-md-3 gap-lg-5 mb-0 align-items-center">
                    <li
                      className={
                        activeNav === "overview"
                          ? styles.active
                          : styles.inActive
                      }
                    >
                      <Link href={"#overview"}>
                        <a>Overview</a>
                      </Link>
                    </li>
                    <li
                      className={
                        activeNav === "situation"
                          ? styles.active
                          : styles.inActive
                      }
                    >
                      <Link href={"#situation"}>
                        <a>The Situation</a>
                      </Link>
                    </li>
                    <li
                      className={
                        activeNav === "challenge"
                          ? styles.active
                          : styles.inActive
                      }
                    >
                      <Link href={"#challenge"}>
                        <a>The Challenge & Solution</a>
                      </Link>
                    </li>
                    <li
                      className={
                        activeNav === "result" ? styles.active : styles.inActive
                      }
                    >
                      <Link href={"#result"}>
                        <a>The Result</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link href={caseStudy.downloadLink}>
                  <a
                    alt={caseStudy.filename}
                    className={`${styles.downloadLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdDownload size={20} color="rgba(227, 121, 21, 1)" />
                    <span>Download PDF</span>
                  </a>
                </Link>
              </div>
            </section>
            <InView
              as={"section"}
              threshold={1}
              className={`container-fluid py-5 ${styles.overviewSection}`}
              id="overview"
              onChange={changeNav}
            >
              <div className="container my-5">
                <h3 className={styles.sectionHeader}>Project Overview</h3>
                <p>{details.caseStudyHeaderText}</p>
                <div className="d-flex flex-wrap mt-5">
                  <div className="pe-md-4">
                    <h4 className="mb-3">Tech Stack</h4>
                    <ul className="list-unstyled">
                      <li className="mb-lg-3">
                        <span>Team Composition : </span>{details.teamComposition}
                      </li>
                      <li className="mb-lg-3">
                        <span>Tools : </span> {details.tools}
                      </li>
                      <li className="mb-lg-3">
                        <span>Duration : </span>  {details.duration}
                      </li>
                    </ul>
                  </div>
                  <div className="pe-md-4 mt-4 mt-md-0">
                    <h4 className="mb-3">Company</h4>
                    <ul className="list-unstyled">
                      <li className="mb-lg-3">

                        <span>Number of User : </span> {details.users}
                      </li>
                      <li className="mb-lg-3">
                        <span>Service Provided : </span> {details.serviceProvided}
                      </li>
                      <li className="mb-lg-3">
                        <span>Industry : </span> {details.industry}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </InView>
            <InView
              as={"section"}
              threshold={1}
              className={`container-fluid py-5 ${styles.situationSection}`}
              id="situation"
              onChange={changeNav}
            >
              <div className="container my-5 row mx-auto align-items-center">
                <div className="col-md-6">
                  <h3 className={styles.sectionHeader}>The Situation</h3>
                  <p>{details.caseStudySituation}</p>
                </div>
                <div className="col-md-6 mt-2 mt-lg-0">
                  <div className={styles.image}>
                    <Image
                      priority
                      src={details.caseStudySituationImage}
                      width={580}
                      height={384}
                      alt="The Situation Image"
                    />
                  </div>
                </div>
              </div>
            </InView>
            <InView
              as={"section"}
              threshold={1}
              className={`container-fluid py-5 ${styles.challengeAndSolutionSection}`}
              id="challenge"
              onChange={changeNav}
            >
              <div className="container mx-auto my-5">
                <div className="">
                  <h3 className={styles.sectionHeader}>The Challenge</h3>
                  <div>
                    <p>{details.caseStudyChallenge}</p>
                    <ul className="list-group list-group-flush ms-3">
                      {details.caseStudyChallengePoints?.map((challenge) => (
                        <li key={challenge}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="">
                  <h3 className={styles.sectionHeader}>The Solution</h3>
                  {details.solution.length > 0 && details.solution.map((solution, index) => (
                    <div key={index} className="mb-3">
                      <p className={details.solution.length > 1 ? 'fw-medium' : ''}>{solution.caseStudySolutionSubtitle}</p>
                      <span>{solution.caseStudySubParagraph}</span>
                      <ul className="list-group list-group-flush ms-3">
                        {solution.caseStudySolutions?.map((solution) => (
                          <li key={solution}>{solution}</li>
                        ))}
                      </ul>
                      <span>
                        {solution.caseStudySolutionsParagraphs?.map(
                          (paragraph) => (
                            <span key={paragraph}>{paragraph}</span>
                          )
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </InView>
            <section className={`container-fluid py-5 ${styles.bookings}`}>
              <div className="container">
                <BookingCTA
                  title={
                    "Get a free step-by-step strategy for your project by claiming a 30-minute consultation with our experts!"
                  }
                  btnText="Speak to Our Consultant"
                  bgColor={"rgba(0, 155, 192, 1)"}
                  btnClass={styles.button}
                />
              </div>
            </section>
            <InView
              as={"section"}
              threshold={1}
              className={`container-fluid py-5 ${styles.resultSection}`}
              id="result"
              onChange={changeNav}
            >
              <div className="container my-5 row mx-auto align-items-center">
                <div className="col-md-6 mb-4 mb-lg-0">
                  <div className={styles.image}>
                    <Image
                      priority
                      src={details.caseStudyResultsImage}
                      width={526}
                      height={384}
                      alt="The Result Image"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className={styles.sectionHeader}>The Result</h3>
                  <ul className="list-group list-group-flush">
                    {details.caseStudyResults?.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </InView>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const caseStudiesArr = caseStudiesData.filter(
    (caseStudy) =>
      caseStudy.caseStudyPageName.toString() === params.caseStudyPageName
  );

  return {
    props: {
      caseStudy: caseStudiesArr[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = caseStudiesData.map((caseStudy) => ({
    params: { caseStudyPageName: caseStudy.caseStudyPageName.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
