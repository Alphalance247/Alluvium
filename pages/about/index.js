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
    const imagePath = "/assets/about/"

    return (
        <div className={styles.aboutUsPage}>
            <Head>
                <title>About us | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products} />
            <main>
                <section className={styles.welcome}>
                    <div className={styles.shape}></div>
                    <div className={styles.content}>
                        <div className='container'></div>
                        <h1>Leaders in Data Migration</h1>
                        <p>Revolutionizing the Data Migration Industry - Your Partner for Success</p>
                    </div>
                </section>
                <section className={styles.about}>
                    <div className="container">
                        <div className="row gap-5">
                            <div className="col-md-6">
                                <div className={styles.content}>
                                    <span>About us</span>
                                    <h2>About Alluvium</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p> 
                                    <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p> <p>Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. </p>
                                </div>
                            </div>
                            <div className="position-relative col-md-5">
                                <Image src={'/assets/about/atlassian-tools-icon.png'} className={styles.image} layout="fill" alt='Atlassian tools'/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.story}>
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6 position-relative">

                                <div className="position-relative">
                                    <div className='position-relative'>
                                        <Image src={imagePath+"Image-2.png"} layout="fill" className={styles.image} />
                                    </div>
                                    <div className='position-relative'>
                                        <Image src={imagePath+"Image-3.png"} layout="fill" className={styles.image} />
                                    </div>
                                </div>
                                
                                <Image src={imagePath+"Image-1.png"} layout="fill" className={styles.image}/>
                            </div>
                            <div className="col-md-6">
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