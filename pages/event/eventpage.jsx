import React, { useState, useEffect } from "react";

import Layout from "components/layout";
import EventHero from 'components/cloud-connect/EventHero';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import axios from "axios";
import moment from "moment";
import { ToastProvider, useToasts } from 'react-toast-notifications';


// import logo from 'public/assets/techpoint-startup-expo/logo.png';
// import logo2 from 'public/assets/techpoint-startup-expo/Heading.png';

// import styles from 'styles/lagos-startup-expo.module.scss';
// import { countries } from "country-flag-icons";

// const images = ['background.png', 'DSC_2918.jpg', 'DSC_3033.jpg', 'DSC_2921.jpg', 'image-9-1 2.png', 'DSC_2890.jpg', 'DSC_2928.jpg', 'DSC_2932.jpg', 'DSC_2952.jpg', 'DSC_2954.jpg', 'DSC_2967.jpg', 'DSC_2973.jpg']

const EventPage = () => {
    return (
        <>
        <Layout>
        <EventHero />
        </Layout>
        </>
    )
};

export default EventPage;