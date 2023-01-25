import React from 'react';
// import * as arrays from "../data";
import Head from 'next/head';
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
            <Head>
                <title>Home | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost." />
                <meta name="keywords" content="Alluvium, alluvium, team alluvium, atlassian products migration lab, atlassian, jira" />
            </Head>
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