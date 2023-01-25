import { useState, useEffect } from 'react'
// import * as arrays from "../data";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/homepage.module.scss'
import Navigation from '../components/navigation';
import Services from 'components/services-components/services';
import CaseStudies from 'components/case-studies/case-studies';
import News from '../components/news-and-trends/news';
import WhyAlluvium from 'components/whyAlluvium';
import Hero from 'components/Hero';
import OurSolution from 'components/ourSolutions';
import OurPartners from 'components/ourPartners';
import WelcomeToAlluvium from 'components/welcomeToAlluvium';
import ToolsAndPlatforms from 'components/toolsAndPlatforms'

const Home = () => {
    return (
        <>
            <div className='container-fluid p-0 m-0'>
                <Navigation />
                <Hero />
                <Services />
                <WelcomeToAlluvium />
                <ToolsAndPlatforms />
                <WhyAlluvium />
                <OurPartners />
                <CaseStudies />
                <OurSolution />
                <News />
            </div>
        </>
    )
}

export default Home;