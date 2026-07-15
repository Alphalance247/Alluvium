import React from 'react'
import styles from "../../../styles/AlluviumRedesign2026/common/hero.module.scss";
import GifHero from '../home-hero/gifHero';
import Link from 'next/link';
const Hero = ({ btnText }) => {
    return (
        <div >
            <div className={styles.innerContainer}>
                <div className={styles.heroContents}>
                    {/* <div className={styles.heroTextContainer}>
                        <h1 className={styles.heroTitle}>The Strategic Partner for Enterprise Atlassian Transformations.</h1>
                        <p className={styles.heroDescription}>From high-stakes Cloud Upgrades to optimized Licensing and ESM, we bridge the gap between your tools and your business goals. Unlock Human-AI Collaboration at Scale.</p>
                        <div className={styles.heroButtonsContainer}>
                            <Link href="/contact-us">
                                <button
                                    className={styles.leftButton}
                                >
                                    {btnText || "BOOK A 15-MIN STARTEGY CONSULT"}
                                </button>
                            </Link>
                            <Link href="/contact-us">
                                <button
                                    className={styles.button}
                                >
                                    {btnText || "REQUEST A FREE CLOUD AUDIT"}
                                </button>
                            </Link>
                        </div>
                    </div> */}
                    {/* <div className={styles.GifHeroContainer}> */}
                    <GifHero />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Hero