import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import styles from '../../styles/about.module.scss'
import Image from 'next/image'
import {AchievementCounter, achievements } from 'components/Achievement'
import {BookingCTA, ConsultationForm} from 'components/Consultation'
import { CoreValue, values } from 'components/about-us/CoreValues'
import Services from 'components/services-components/services';
import WhyAlluvium from 'components/whyAlluvium';
import OurSolution from 'components/ourSolutions';
import OurPartners from 'components/ourPartners';

export default function AboutUs() {

    const imagePath = "/assets/about/"
    let achievemnetKeys = 0;
    return (
        <div className={styles.aboutUsPage}>
            <Head>
                <title>About us | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main>
                <section className={styles.welcome}>
                    <div className={styles.shape}></div>
                    <div className={styles.content}>
                        <div className='container'>
                        <h1>Leaders in Data Migration</h1>
                        <p>Revolutionizing the Data Migration Industry - Your Partner for Success</p>
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
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p> 
                                    <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p> <p>Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. </p>
                                </div>
                            </div>
                            <div className="position-relative col-md-5">
                                <Image src={'/assets/about/atlassian-tools-icon.png'} width={500} height={450} objectFit='contain' alt='Atlassian tools'/>
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
                                    <div className='col-6 pe-1'>
                                        <Image src={imagePath+"Image-2.png"} width={256 * 1.2} height={241 * 1.2}  />
                                    </div>
                                    <div className='col-6 ps-1'>
                                        <Image src={imagePath+"Image-3.png"} width={256 * 1.2} height={241 * 1.2} />
                                    </div>
                                    <div className='col-12'>
                                        <Image src={imagePath+"Image-1.png"} width={532 * 1.2} height={283 * 1.2} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p>It was the summer of 2016, Taiwo, formerly of the Big Four, had been brought into a large UK Bank digital transformation programme to consolidate their project management tool estate into one consolidated Atlassian toolset, was joined by Wale, also formerly of the Big Four, to establish an Agile Way of Working. The synergy was instant and long lasting. </p>
                                <p><strong>The tools supported the controls, deployment and scaling of the new way of working while the methodology utilised and maximised the Atlassian toolset.</strong> </p>
                                <p>We had to consolidate data and configuration from several third-party application, couple of Jira instances to a single new Jira instance. Same for documentation storage and Devops tools. All the while building, integrating to, and reporting from a new data lake.</p>
                                <p>After the success of that programme, we went to repeat a similar delivery for one of UK's biggest telecom providers.
                                We have since delivered some of the largest Atlassian tools Consolidation and accompanying Administration, Engineering, Integration, and long-term Support of the Atlassian products for all ways of working.</p>
                                <p><strong>We routinely put back into the customers' pockets, 15 – 45% of their annual license costs,</strong>  by consolidating and scaling their use of Jira, Confluence, Bitbucket and other Atlassian products, from multiple Atlassian and third-party applications.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.achievements}>
                    <div className="container">
                        <h2 className={styles.h2}>Our Achievements</h2>
                        <div className="row">
                            {
                                achievements.map((achievement) => (
                                    <div className="col-lg-2 col-md-4 col-sm-6 col-6" key={achievemnetKeys++}>
                                        <AchievementCounter name={achievement.name} value={achievement.value} />
                                    </div>
                                ))
                            }
                        </div>

                       <BookingCTA />
                    </div>
                </section>

                <Services />

                <WhyAlluvium />

                <OurPartners />

                <section className={styles.values}>
                    <div className="container">
                        <h2 className={styles.h2}>Our Core Values</h2>
                        <div className="row">
                            {
                                values.map((value) => (
                                    <div className="col-lg-3 col-md-6" key={achievemnetKeys++}>
                                        <CoreValue title={value.title} description={value.description} image={value.image} bg={value.backgroundImage} />
                                    </div>
                                ))
                            }
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
                        <p><strong> JayTee Ojo Foundation</strong> is a non-profit organisation set up from Ekiti to help make the young person globally competitive and help our communities towards self-sustenance.</p> 
                        <p>We have, among other projects, donated solar streetlights to light up communities at night, we have donated borehole water fountains, we have sponsored several medical interventions, food banks, sports intervention as well as farmer empowerment and local farming interventions.</p> 
                        <p>For all the intervention projects and works mentioned above and many more besides, we are prouder of the investments we make into the future via educational interventions from donating books to students, to multiple scholarship programmes that cover school fees, various examination registration fees, accommodation, and projects support.</p>
                        <a href="https://jayteeojo.com" target="_blank" className='btn btn-pri mt-4'>Visit Website</a>
                    </div>
                    <div className="position-relative">
                        <Image src={'/assets/about/our-impact.png'} layout="fill" alt='our impact' className={styles.impactImage} />
                    </div>
                </section>

                <section>
                    <ConsultationForm />
                </section>
            </main>
        </div>
    )
}
