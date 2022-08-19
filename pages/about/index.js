import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import styles from '../../styles/about.module.scss'
import { productData } from '../../data'
import { teamsData } from 'lib/staff.ts';
import Image from 'next/image'


export default function Products({ products, teams }) {

    const getImagePath = name => {
        let smallName = name.split(' ')[0].toLowerCase()
        return `/assets/about/team/${smallName}.png`
    }

    return (
        <div className={styles.aboutUsPage}>
            <Head>
                <title>About us | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products} />
            <main>
                <section className={styles.welcome}>
                    <div>
                        <h1>About Us</h1>
                    </div>
                </section>
                <section className={styles.ourStory}>
                    <h2 className={styles.ourStoryTitle} data-aos="fade-down">How it All started</h2>
                    <div className={styles.ourStoryBody}>
                        <div className={styles.ourStoryContent}>
                            <p>
                                It was the summer of 2016, Taiwo, formerly of the Big Four, had been brought into a large UK Bank digital transformation programme to consolidate their project management tool estate into one consolidated Atlassian toolset, was joined by Wale, also formerly of the Big Four, to establish an Agile Way of Working. The synergy was instant and long lasting.
                            </p>
                            <p>
                                The tools supported the controls, deployment and scaling of the new way of working while the methodology utilised and maximised the Atlassian toolset.
                            </p>
                            <p>
                                We had to consolidate data and configuration from several third-party application, couple of Jira instances to a single new Jira instance. Same for documentation storage and dev ops tools. All the while building, integrating to, and reporting from a new data lake.
                            </p>
                            <p>
                                After the success of that programme, we went to repeat a similar delivery for one of UK's biggest telecom providers.
                            </p>
                            <p>
                                We have since delivered some of the largest Atlassian tools Consolidation and accompanying Administration, Engineering, Integration, and long-term Support of the Atlassian products for all ways of working.
                            </p>
                            <p>
                                We routinely put back into the customers' pockets, 15 – 45% of their annual licence costs, by consolidating and scaling their use of Jira, Confluence, Bitbucket and other Atlassian products, from multiple Atlassian and third-party applications.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={styles.teamsSection}>
                    <h2 className={styles.teamsSectionTitle}>
                        <span>Meet a few friendly faces with </span>
                        <span>100% dedication to your technological needs and success.</span>
                    </h2>
                    <div className={styles.teams}>
                        <div className={styles.team} data-aos="fade-up">
                            {
                                !teams ? (<div>No data</div>)
                                    :
                                    (
                                        teams.map((team, index) => {
                                            if (index === 0) {
                                                return <div className={styles.foundersSection} key={index}>
                                                    {
                                                        team.map((individual, index2) =>
                                                            <Link href={`/about/${individual.url}`} key={index2}>
                                                                <a className='text-white'>
                                                                    <div className={styles.founderSection} key={index2}>
                                                                        <Image src={getImagePath(individual.name)} width={207.38} height={207.38} alt={individual.name} loading="eager" priority />
                                                                        <p>{individual.name}</p>
                                                                        <p><b>{individual.role}</b></p>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        )
                                                    }
                                                </div>
                                            }
                                            if (index === 1) {
                                                return <div className={styles.firstStaffsSection} key={index}>
                                                    {
                                                        team.map((individual, index2) =>
                                                            <Link href={`/about/${individual.url}`} key={index2}>
                                                                <a className={styles.firstStaffSection}>
                                                                    <Image src={getImagePath(individual.name)} width={207.38} height={(index2 < 4) || (individual.name === 'Adedayo Jesufolakemi') ? 207.38 : 241.38} alt={individual.name} loading="eager" priority />
                                                                    {
                                                                        ((index2 < 4) || (individual.name === 'Adedayo Jesufolakemi')) &&
                                                                        <>
                                                                            <p>{individual.name}</p>
                                                                            <p><b>{individual.role}</b></p>
                                                                        </>
                                                                    }
                                                                </a>
                                                            </Link>
                                                        )
                                                    }
                                                </div>
                                            }
                                            if (index === 2) {
                                                return <div className={styles.firstStaffsSection} key={index}>
                                                    {
                                                        team.map((individual, index2) =>
                                                            <Link href={`/about/${individual.url}`} key={index2}>
                                                                <a className={styles.firstStaffSection}>
                                                                    <Image src={getImagePath(individual.name)} width={207.38} height={(individual.name === 'Yemisi Adelowo') ? 207.38 : 241.38} alt={individual.name} loading="eager" priority />
                                                                    {
                                                                        (individual.name === 'Yemisi Adelowo') &&
                                                                        <>
                                                                            <p>{individual.name}</p>
                                                                            <p><b>{individual.role}</b></p>
                                                                        </>
                                                                    }
                                                                </a>
                                                            </Link>)
                                                    }
                                                </div>
                                            }
                                            if (index === 3) {
                                                return <div className={styles.firstStaffsSection} key={index}>
                                                    {
                                                        team.map((individual, index2) =>
                                                            <Link href={`/about/${individual.url}`} key={index2}>
                                                                <a className={styles.firstStaffSection}>
                                                                    <Image src={getImagePath(individual.name)} width={207.38} height={207.38} alt={individual.name} loading="eager" priority />

                                                                    <p>{individual.name}</p>
                                                                    <p><b>{individual.role}</b></p>

                                                                </a>
                                                            </Link>)
                                                    }
                                                </div>
                                            }
                                        })
                                    )
                            }
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}


export const getStaticProps = async () => {
    const teams = teamsData();
    return {
        props: {
            products: productData,
            teams
        }
    }
}