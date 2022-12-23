import { useState, useEffect } from 'react'
// import * as arrays from "../data";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/homepage.module.scss'
import Navigation from '../components/navigation';
import ProductPreview from '../components/productPreview';
import News from "../components/news-and-trends/news";
import { Carousel } from 'react-responsive-carousel'

// Import css files
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { productData, featuresData, ourServicesData, milestonesData, trustedCompaniesData } from '../data';

const HeroBanner = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.us}>
          <h1>We are atlassian</h1>
          {/* <h1> atlassian</h1> */}
          <h1> migration experts</h1>
        </div>
        <div className={styles.message}>
          <p>We are Atlassian Products <span className={styles.migration}>Migration Lab.</span> </p>
          <p>We produce Tools, Systems and Services that deliver complete data migration in <span className={styles.half}>half the time for half the cost.</span> </p>
        </div>
      </div>
    </>
  )
}

const EventAd = () => {
  return (
    <>
      <div className={styles.eventBg}>
        {/* <Image src={'/assets/home/graduation_bg.png'} height={1440} width={512} layout="fill" priority loading='eager' /> */}
        <Image src={'/assets/home/alluve-bg.jpg'} layout="fill" priority loading='eager' />
        <div className={styles.blazer}>
          <Image src={'/assets/home/trailblazer.png'} height={97} width={150} priority loading='eager' />
          <h2>Graduation Ceremony</h2>
          <Link href="http://university.alluvium.net/event">
            <a className={styles.reg}>Register for this Event</a>
          </Link>
        </div>
      </div>
    </>
  )
}

const slideArr = [<HeroBanner />, <EventAd />];


export default function Home({ products, features, ourServices, milestones, trustedCompanies }) {
  const [lightTheme, setLightTheme] = useState('')

  useEffect(() => {
    const theme = localStorage.getItem("light-mode");
    setLightTheme(JSON.parse(theme))
    console.log(lightTheme)
  }, []);

  
  return (
    <div>
      <Head>
        <title>Home | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost." />
        <meta name="keywords" content="Alluvium, alluvium, team alluvium, atlassian products migration lab, atlassian, jira" />
      </Head>
      <main className={styles.landingPage}>
        <section className={styles.nav}>
          <Navigation products={products} />
        </section>
        <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} dynamicHeight={true}>
          {slideArr.map((x, i) => {
            return <div key={i}>
              {x}
            </div>
          })}
        </Carousel>
        {/* <HeroBanner /> */}
        <section className={styles.featureSection}>
          <h3 className={styles.featuresTitle}>Our Values</h3>
          <div className={styles.features}>
            <div className={styles.featureSectionImg} data-aos="zoom-in">
              <Image src="/assets/home/values.png" width={654.26 / 1.5} height={625.37 / 1.5} priority loading='eager' />
            </div>
          </div>
        </section>
        <section className={styles.ourServices} id="services">
          <div className={styles.ourServicesHeader}>
            <h1 className={styles.ourServicesTitle}>Our Services</h1>
            <p className={styles.ourServicesSubtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
          </div>
          <div className={styles.ourServicesList}>
            {
              ourServices.map((service) => {
                const { id, title, icon, subtitle, link } = service;

                return (
                  <Link href={link} key={id}>
                    <a className=''>
                      <div className={styles.service}>
                        <div className={styles.serviceIcon}>
                          <img src={icon} alt={title} />
                        </div>
                        <div className={styles.serviceInfo}>
                          <h3 className={styles.serviceTitle}>{title}</h3>
                          <p className={styles.serviceSubtitle}>{subtitle}</p>
                        </div>
                        <div className={styles.serviceLink}>

                        </div>
                      </div>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </section>
        <section className={styles.ourMilestones}>
          <div className={styles.ourMilestonesHeader} >
            <h1 className={styles.ourMilestonesTitle}>Our Major Milestones</h1>
            <p className={styles.ourMilestonesSubtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>
          </div>
          <div className={styles.ourMilestonesList}>
            {
              milestones.map((milestone) => {
                return (
                  <div className={styles.milestone} key={milestone.id}>
                    <div className={styles.milestoneIcon}>
                      <img src={milestone.icon} alt={milestone.category} />
                    </div>
                    <div className={styles.milestoneDescription}>
                      <h3 className={styles.milestoneFigure}>{milestone.value}</h3>
                      <p className={styles.milestoneName}>{milestone.category}</p>
                    </div>
                  </div>
                )
              })

            }
          </div>
        </section>
        <section className={styles.trustedBySection}>
          <h1 className={styles.trustedBySectionTitle}>Trusted by</h1>
          <div className={styles.trustedCompaniesList}>
            <div className={styles.trustedCompanies}>
              {
                trustedCompanies.map((company, idx) => {
                  return (
                    <div className={styles.trustedCompany} key={idx}>
                      <img src={company.logoIcon} alt={company.name} />
                    </div>
                  )
                })
              }

            </div>
            <div className={styles.trustedCompanies}>
              {
                trustedCompanies.map((company, idx) => {
                  return (
                    <div className={styles.trustedCompany} key={idx}>
                      <img src={company.logoIcon} alt={company.name} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
        <section className={styles.news} id="news">
          <News />
        </section>
      </main>
      <script async id="slcLiveChat" src="https://widget.sonetel.com/SonetelWidget.min.js" data-account-id="207734638"></script>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      products: productData,
      features: featuresData,
      ourServices: ourServicesData,
      milestones: milestonesData,
      trustedCompanies: trustedCompaniesData
    }
  }
}
