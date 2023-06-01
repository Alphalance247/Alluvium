import React, { useState, useEffect } from "react";

import Layout from "components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import axios from "axios";
import moment from "moment";
import { ToastProvider, useToasts } from 'react-toast-notifications';


import logo from 'public/assets/techpoint-startup-expo/logo.png';
import logo2 from 'public/assets/techpoint-startup-expo/Heading.png';

import styles from 'styles/lagos-startup-expo.module.scss';
// import { countries } from "country-flag-icons";

const images = ['background.png', 'DSC_2918.jpg', 'DSC_3033.jpg', 'DSC_2921.jpg', 'image-9-1 2.png', 'DSC_2890.jpg', 'DSC_2928.jpg', 'DSC_2932.jpg', 'DSC_2952.jpg', 'DSC_2954.jpg', 'DSC_2967.jpg', 'DSC_2973.jpg']

const LagosStartUpExpoPage = () => {
    const [news, setNews] = useState([]);
    const [eventImages, setEventImages] = useState([]);

    useEffect(() => {
        axios.get("https://blog.alluvium.net/wp-json/wp/v2/posts", { params: { categories: [10] } }).then(res => {
            setNews(res.data)
            console.log(res.data);
        }).catch(err => {
            console.log(err.message);
        });
    }, [])

    useEffect(() => {
        let locImage = images.map(imageName => import(`public/assets/techpoint-startup-expo/${imageName}`));
        Promise.all(locImage).then(val => {
            setEventImages(val);
            console.log(val);
        })
    }, [images])

    return (
        <>
            <ToastProvider>
                <Layout withoutForm={true}>
                    <Head>
                        <title>Home | Alluvium</title>
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
                    <div className={`container-fluid p-0 m-0 ${styles.main}`}>
                        <div className={`position-relative ${styles.main_bg}`}>
                            <div className={`d-flex flex-wrap flex-md-nowrap justify-content-center mx-auto ${styles.location}`}>
                                <div className="">
                                    <span>Place</span>
                                    <p>Lagos - Landmark event centre</p>
                                </div>
                                <div className="">
                                    <span>Date/Time</span>
                                    <p>May 20th, 2023, @09am WAT</p>
                                </div>
                            </div>
                        </div>
                        <div className={`container mx-auto py-5 ${styles.summary}`}>
                            <div className="row mt-5">
                                <div className="col-md-4 mb-3 pe-md-5">
                                    <Image src={logo} alt="Techpoint Expo Event logo" loading="eager" priority />
                                </div>
                                <div className="col-md-8">
                                    <p>
                                        The Lagos Startup Expo is the premier event for entrepreneurs, investors, and tech enthusiasts held on May 20th, 2023 to network with top startups, see innovative products and learn about the latest industry trends.
                                    </p>
                                    <p>
                                        This is the perfect platform to grow a business, make connections, and take startups to new heights.
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4 mb-4 d-flex flex-column justify-content-between pe-md-5">
                                    <Image src={logo} alt="Techpoint Expo Event logo" loading="eager" priority />
                                    <Image src={logo} className="mt-auto" alt="Techpoint Expo Event logo" loading="eager" priority />
                                </div>
                                <div className="col-md-8">
                                    <p className={styles.summary_head}>
                                        Alluvium shines at Lagos Startup Expo, delivers top range tech solutions
                                    </p>
                                    <div className={styles.summary_underline}></div>
                                    <p>
                                        Leading Tech firm and and fast rising startup, Alluvium; parent company of REMOTEWORKNG says it’s time for Africans to maximize cloud democracy in solving myriads of problems peculiar to each African nation.
                                    </p>
                                    <p className="mb-5">
                                        Alluvium and over 200 startups and tech firms converged on the Landmark Event Centre in Victoria Island, Lagos Nigeria over the weekend to discuss a push for Africa and Nigeria in the Fourth Industrial revolution at the Lagos Startup Expo.
                                    </p>
                                    <p>
                                        The event, one of the largest innovation startups’ conferences to showcase innovative products, was organized by a leading technology media platform Techpoint Africa, parent company of Altschool and TalentQl, Techpoint inspired and Techpoint build, known for training world class engineering teams.
                                    </p>
                                    <p>
                                        The Lagos Startup expo had investors, entrepreneurs, tech firms, cloud engineers, programmers and specialists using technology solve the myriads of problems facing the continent ranging from health, finance, agriculture ,cloud services, security, among other sectors of the economy. <span>...continue reading</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`container mx-auto py-5 ${styles.gallery}`}>
                            <div className={`mx-auto d-flex flex-wrap flex-md-no-wrap align-items-center justify-content-center ${styles.gallery_title}`}>
                                <p className="">
                                    We were live at
                                </p>
                                <div className="holder">
                                    <Image src={logo2} alt="Techpoint Expo Event logo" loading="eager" priority />
                                </div>
                            </div>
                            <div className={`row ${styles.gallery_content}`}>
                                {eventImages.length > 0 &&
                                    eventImages.map((eventImage, index) => (
                                        <div key={index}>
                                            <Image src={eventImage?.default} key={index} alt="Techpoint Expo Event logo" loading="eager" priority />
                                        </div>
                                    ))}
                            </div>
                            <div className="mx-auto d-flex align-items-center justify-content-center">
                                <p className={styles.gallery_title2}>
                                    Alluvians shares their experience at the Lagos Startup Expo
                                </p>
                            </div>
                            <div className={`row ${styles.gallery_content}`}>
                                {news.length > 0 &&
                                    news.map(info => (<Link href={info?.link} key={info?.id}>
                                        <a target="_blank" rel="norefferer">
                                            <div className={styles.trend} key={info?.id}>
                                                <div className={styles.trend_image}>
                                                    {
                                                        (info?.jetpack_featured_media_url == "") ? "" : <Image priority loading="eager" layout="fill" src={info?.jetpack_featured_media_url} alt={info?.slug} />
                                                    }
                                                </div>
                                                <div className={styles.trend_content}>
                                                    <div>
                                                        <p className={styles.trend_month}>{moment(info?.date).format("MMM")}</p>
                                                        <p className={styles.trend_day}>{moment(info?.date).format("DD")}</p>

                                                    </div>
                                                    <span className={styles.trend_title}>{info?.title.rendered}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>))}
                            </div>
                        </div>
                    </div>
                </Layout>
            </ToastProvider>
        </>
    )
};

export default LagosStartUpExpoPage;