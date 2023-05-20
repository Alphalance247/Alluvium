import React, { useEffect, useState, useMemo, useCallback } from "react";

import Layout from "components/layout";
import Head from "next/head";
import Image from "next/image";
import countries, { NG } from "country-flag-icons/react/3x2";
import { getCountryByCode } from "country-phonenumber";
import { Country, State } from 'country-state-city';
import axios from "axios";
import { ToastProvider, useToasts } from 'react-toast-notifications';
import LoadingScreen from "components/loading";


import logo from 'public/assets/lagos-startup-expo/logo.png';

import styles from 'styles/lagos-startup-expo.module.scss';
// import { countries } from "country-flag-icons";


const ThankYouComponent = ({ setShowForm, message }) => {
    return (
        <>
            <div className="container mx-auto text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                <div>
                    <Image src={logo} priority loading="eager" />
                </div>
                <h2>{message?.message || 'Thank You!'}</h2>
                <p>Your submission has been received.</p>
                <button type="submit" onClick={() => setShowForm(true)} className={`${styles.button} ${styles.button_aluvium_light_blue} mx-auto`}>Back to Form</button>
            </div>
        </>
    )
}

const FormComponent = ({ userData, setUserData, handleSubmit, loading }) => {
    const [selectedIcon, setSelectedIcon] = useState({ icon: <NG title="Nigeira" />, code: "NG" });
    const [phoneCode, setPhoneCode] = useState('');
    const countryCodes = useMemo(() => Object.keys(countries), [countries]);
    const allCountries = Country.getAllCountries();
    const [allStates, setAllStates] = useState([]);

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        if (name === 'country') {
            let theCountry = allCountries.find(country => country.name.toLowerCase().includes(value.toLowerCase()));
            const states = State.getStatesOfCountry(theCountry.isoCode);
            if (states.length > 0) {
                setAllStates(states.map(state => state.name));
            }
            value = theCountry.name;
        }
        setUserData(prev => ({ ...prev, [name]: value }));
    }, []);


    useEffect(() => {
        setPhoneCode(getCountryByCode(selectedIcon.code)?.phone);
    }, [selectedIcon]);

    useEffect(() => {
        setUserData(prev => ({ ...prev, phone: `(+${phoneCode}) ` }));
    }, [phoneCode]);

    useEffect(() => {
        setUserData(prev => ({ ...prev, state: allStates[0] || '' }))
    }, [allStates]);

    useEffect(() => {
        if (Object.keys(userData).length < 1) {
            setPhoneCode('');
            setSelectedIcon({ icon: <NG title="Nigeira" />, code: "NG" });
        }
    }, [userData]);

    return (
        <div className="container mx-auto">
            <Image src={logo} priority loading="eager" />
            <h2>Online Registration Form</h2>
            <p>We make it easy for you to unlock your personal/team’s potential by connecting with us and it all starts from here!</p>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name <sup className={styles.priority}>*</sup></label>
                    <input type="text" value={userData?.firstName || ''} className="form-control" id="firstName" name="firstName" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name <sup className={styles.priority}>*</sup></label>
                    <input type="text" value={userData?.lastName || ''} className="form-control" id="lastName" name="lastName" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email <sup className={styles.priority}>*</sup></label>
                    <input type="email" value={userData?.email || ''} className="form-control" id="email" name="email" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="w-100 d-flex ms-0">
                        <div className="px-0">
                            <div className="dropdown">
                                <button className={`btn btn-outline-secondary dropdown-toggle rounded-0 rounded-start m-0 ${styles.btn}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedIcon.icon}
                                </button>
                                <ul className={`dropdown-menu ${styles.dropdown_menu}`} aria-labelledby="dropdownMenuButton1">
                                    {
                                        countryCodes.map((countryCode, index) => {
                                            let Comp = countries[countryCode];
                                            return (
                                                <li key={index} className="d-flex justify-content-center" onClick={() => setSelectedIcon({ icon: <Comp title={countryCode} />, code: countryCode })} style={{ cursor: 'pointer', width: '100%' }}>
                                                    <Comp key={countryCode} title={countryCode} className={styles.country_icon} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="px-0 flex-grow-1">
                            <input type="tel" value={userData?.phone || ''} className="form-control rounded-0 rounded-end" id="phone" name="phone" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country </label>
                    <input type="text" value={userData?.country || ''} name="country" className="form-control" id="country" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <select defaultValue={userData?.state || allStates[0] || ''} className="form-select" onChange={handleChange} id="state" name="state" aria-label="Default select example">
                        {
                            allStates.map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Company Name </label>
                    <input type="text" value={userData?.companyName || ''} name="companyName" className="form-control" id="companyName" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="servicesOrProducts" className="form-label">Services/Products </label>
                    <input type="text" value={userData?.servicesOrProducts || ''} name="servicesOrProducts" className="form-control" id="servicesOrProducts" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={handleChange} value={userData?.message || ''} name="message" id="message" className='form-control' rows="7"></textarea>
                </div>

                <div className="mt-5">
                    <button type="submit" disabled={loading} className={`${styles.button} ${styles.button_aluvium_light_blue}`}>Submit Form</button>
                </div>
            </form>
        </div>
    )
}

const LagosStartUpExpoPage = () => {
    const [showForm, setShowForm] = useState(true);
    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState({});
    const [loading, setLoading] = useState(false);
    const eventType = useMemo(() => 'Lagos StartUp Expo', []);
    const { addToast } = useToasts();

    const handleSubmit = useCallback(async (event) => {
        setLoading(true);
        event.preventDefault();
        const { firstName, lastName, email } = userData;
        if (!firstName || !lastName || !email) {
            setMessage({
                success: false,
                message: 'Missing required fields!'
            });
            setLoading(false);
            addToast('Missing required fields!', { appearance: 'error' });
            return;
        }
        await axios
            .post("/api/event/follow-up", { ...userData, eventType })
            .then((res) => {
                setLoading(false);
                setMessage(res.data);
                if (!res.data.success) {
                    addToast('Unable to process data, kindly reach out to our agent.', { appearance: 'error' });
                } else {
                    setShowForm(false);
                }
                return;
            })
            .catch((err) => {
                setLoading(false);
                let errMessage = 'Oops something went wrong. Please try again.';
                setMessage({ message: errMessage, success: false });
                addToast(errMessage, { appearance: 'error' });
                console.log(err.response.data);
                return;
            });
    }, [eventType, userData, setMessage]);

    useEffect(() => {
        if (showForm) {
            setUserData({});
        }
    }, [showForm]);


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
                    <div className={`container-fluid row position-relative p-0 m-0 ${showForm ? styles.main : styles.main_small}`}>
                        <div className="col-lg-7 d-none d-lg-inline"></div>
                        <div className={`col-lg-5 d-none d-lg-inline ${styles.main_bg}`}></div>
                        <div className="container-fluid p-0 m-0 position-absolute top-0 bottom-0">
                            <div className="container row mx-auto" style={{ height: '100%' }}>
                                <div className={`col-lg-6 ${styles.main_content}`}>
                                    {
                                        loading ?
                                            <LoadingScreen message={"Loading..."} />
                                            : (
                                                showForm ?
                                                    <FormComponent setShowForm={setShowForm} loading={loading} userData={userData} setUserData={setUserData} handleSubmit={handleSubmit} />
                                                    :
                                                    <ThankYouComponent setShowForm={setShowForm} message={message} />
                                            )
                                    }
                                </div>
                                <div className="col-lg-6"></div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </ToastProvider>
        </>
    )
};

export default LagosStartUpExpoPage;