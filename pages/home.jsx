import { useState, useEffect } from 'react'
// import * as arrays from "../data";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/homepage.module.scss'
import Navigation from '../components/navigation';
import ProductPreview from '../components/productPreview';
import { Carousel } from 'react-responsive-carousel';
import Services from 'components/services-components/services';
import CaseStudies from 'components/case-studies/case-studies';
import News from '../components/news-and-trends/news'

const Home = () => {
    return (
        <>
            <div className='container-fluid p-0 m-0'>
                <Navigation />
                <Services />
                <CaseStudies />
                <News />
            </div>
        </>
    )
}

export default Home;