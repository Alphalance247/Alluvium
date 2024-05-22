import Head from "next/head";
import styles from "../../styles/gitex24.module.scss";
// import styles from "../../styles/team.module.scss";

import Image from "next/image";
import CaseStudies from "components/case-studies/case-studies";
import Layout from "components/layout";
import { useCallback, useMemo, useState } from "react";
import axios from "axios";
import { Country } from "country-state-city";
import { ToastProvider, useToasts } from "react-toast-notifications";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoIosGift } from "react-icons/io";
// import IncentiveDataa from "./IncentiveDataa";
import BoothData from "components/TEAM24/BoothData"
import Input from "components/TEAM24/Input";

export default function Gitex24() {

    const [showModal, setShowModal] = useState(false);
    const [api, setApi] = useState("https://vast.ec2.alluvium.net/teams24/lead-conversion/");
    const handleButtonClick = () => {
        setShowModal(true);
        setApi("https://vast.ec2.alluvium.net/teams24/shippment/");
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setApi("https://vast.ec2.alluvium.net/teams24/lead-conversion/");
        setForm({
            ...form,
            first_name: "",
            last_name: "",
            name: "",
            contact_number: "",
            zip_code: "",
            postage_address: "",
            email: "",
            company: "",
            country: "",
            phone_number: "",
            message_to_alluvium: "",
            souvenir: ""
        });
    };


    const [country] = useState(Country.getAllCountries());
    const [phoneError, setPhoneError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { addToast } = useToasts();

    const phonePattern = useMemo(() => /^\+\d{1,13}$/);

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        name: "",
        contact_number: "",
        zip_code: "",
        postage_address: "",
        email: "",
        company: "",
        country: "",
        phone_number: "",
        message_to_alluvium: "",
        souvenir: ""
    });

    const handleFormSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!(phonePattern.test(form.phone_number) || (phonePattern.test(form.contact_number)))) {
            setPhoneError((prev) => true)
        }
        else {
            setPhoneError((prev) => false)
        };
        if(api.includes("shippment")){
            if(!form.souvenir){
                addToast("Please select a souvenir on the page", {appearance: "error"});
                return;
            }
        }

        if (!phoneError) {
            setLoading(true);
            await axios
                .post(api, { ...form })
                .then((res) => {
                    setLoading(false);
                    if (res.status !== 201) {
                        addToast(
                            res.data.error ||
                            "Error occured, please try again or contact Admin",
                            { appearance: "error" }
                        );
                        return;
                    }
                    addToast("Registration successful. Thank you, we'll be in touch.", {
                        appearance: "success",
                    });
                    setForm({
                        ...form,
                        first_name: "",
                        last_name: "",
                        name: "",
                        contact_number: "",
                        zip_code: "",
                        postage_address: "",
                        email: "",
                        company: "",
                        country: "",
                        phone_number: "",
                        message_to_alluvium: "",
                        souvenir: ""
                    });
                })
                .catch((err) => {
                    setLoading(false);
                    let errMessage =
                        "Oops something went wrong. Please try again or contact Admin";
                    if (err?.response?.status < 500) {
                        errMessage =
                            err?.response?.data?.error ||
                            "Oops something went wrong. Please try again or contact Admin";
                        if (err?.response?.data?.max_count_reached) {
                            errMessage =
                                "Oops. Seems we are not allowed to accept anymore registrations at this time.";
                        }
                    }
                    addToast(errMessage, { appearance: "error" });
                    return;
                });
        }

    }, [phoneError, phonePattern, form, api]);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "radio" ? Boolean(value) : value,
        }));
        // setFormErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleNumber = (value) => {
        setForm((prev) => ({ ...prev, phone_number: value, contact_number: value }));
        if (!(phonePattern.test(value) || (phonePattern.test(value)))) {
            setPhoneError((prev) => true)
        }
        else {
            setPhoneError((prev) => false)
        };
    };

    const handleSouvenir = (name, value) => {
        setForm(prev => ({ ...prev, [name]: value }));
        // setFormErrors((prev) => ({ ...prev, [name]:false }));
    }

    return (
        <Layout withoutForm={true}>
            <div>
                <Head>
                    <title>Booth 53 | Alluvium</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Welcome to booth 53, Unlock full potential of your Atlassian products. Experience Alluvium’s presence at Team ‘24, a remarkable event celebrating the synergy of teamwork and innovation. Join us in Las Vegas or digitally from April 30th to May 2nd to explore our outstanding Atlassian solutions, connect with our dedicated team, and inspire life-changing ideas. Register now to secure your exclusive African-inspired souvenir."
                    />
                    <meta
                        name="keywords"
                        content="Alluvium, Booth 53, 53, Alluvium Booth, Team '24', Atlassian, Teamwork and Innovation, Las Vegas, Digital Event, Atlassian Solutions, Dedicated Team, Africa, Africa at Team ‘24, Alluvium at Team ‘24, African-inspired Souvenir, Collaboration, Growth, Networking, Technology Conference, Professional Development"
                    />
                </Head>
            </div>

            <div id="hero" className={`${styles.herosec}`}>
                <div className="container">
                    <div className="row my-5 my-md-0">
                        <div className="col-md-8">
                            <div className={`${styles.herosecover}`}>
                            <h1 className="text-white fw-bold font-weight-bold display-1">Claim your Fila/Gele</h1>
                            <h1 className="text-warning fw-bold font-weight-bold display-1">Now</h1> 
                                <div className="row px-3 px-lg-0 mb-4 mb-lg-0">
                                    <div className={`col-md-12 p-0 ${styles.supercharge}` }>
                                    <h1 className="text-white">Alluvium at Gitex Africa</h1>  
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={`container ${styles.gitexallu}`}>
                            <Image src="/assets/gitex24/gitexallu.png" width={285.53} height={346} className="img-fluid" alt="Badges" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* choose souvenir */}

            <div className={`mx-auto row justify-content-between align-items-center py-5 ${styles.chooseSourve}`}>
            <h1 className="text-white fw-bold font-weight-bold display-5 text-center">Choose your souvenir</h1>
            <p className="text-white text-center">Congratulations! proceed to order your fila or gele by filling out the form below.</p>
                <div className="col-md-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                    <div className="card">
                        <Image width={300} height={370.81} src="/assets/gitex24/gele.png"  />
                        <div className="card-body">
                           <h2>Gele</h2>
                        <p className="card-text">Traditional headpiece worn by women. Gele is not just a fashion accessory but a cultural artifact that embodies the beauty, elegance, and heritage of a Woman.</p>
                        </div>
                    </div> 
                    {/* <Image width={556} height={417} src="/assets/audit.png" className="img-fluid" alt="Audit" /> */}
                </div>
                <div className="col-md-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                <div className="card">
                        <Image width={300} height={370.81} src="/assets/gitex24/fila.png"  />
                        <div className="card-body">
                        <h2>Fila</h2>
                        <p className="card-text">A traditional head covering worn by men in the Yoruba culture of Nigeria and some other West African countries. Fila is a cultural emblem that embodies values.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 justify-content-center align-items-center">
                    <p className="text-white">ORDER FORM</p>
                    <form onSubmit={handleFormSubmit} className={styles.form}>
                                    <div className="row">
                                        <div className="mb-1 col-md-12">
                                            <label htmlFor="firstName" className="form-label mb-0 text-white">Fullname</label>
                                            <input type="text" name="fullname" required value={form?.first_name} onChange={handleChange} className={`form-control ${styles.transparentinput}`} id="firstName" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-1 col-md-12">
                                            <label htmlFor="email" className="form-label mb-0 text-white">Email Address</label>
                                            <input type="email" name="email" required value={form?.email} onChange={handleChange} className={`form-control ${styles.transparentinput}`} id="email" />
                                        </div>
                                    </div> 
                                    <div className="mb-1">
                                        <label htmlFor="phoneNumber" className="form-label mb-0 text-white">Phone Number</label>
                                        <PhoneInput
                                            placeholder="8140686688"
                                            international
                                            defaultCountry="US"
                                            value={form.phone_number ?? ""}
                                            onChange={handleNumber}
                                            className={`${styles.PhoneInput, styles.transparentinput} ${phoneError ? styles.error : ""}`}
                                            required
                                            numberInputProps={{
                                                className: phoneError ? styles.error : "",
                                            }}
                                            countrySelectProps={{
                                                className: phoneError ? styles.error : "",
                                            }}
                                        />
                                        {/* <input type="text" name="phone_number" required value={form?.phone_number} onChange={handleChange} className="form-control" id="phoneNumber" placeholder="0810000000" /> */}
                                    </div>
    <div className="row">
    <div className="mb-1 col-md-12">
      <label htmlFor="country" className="form-label mb-0 text-white">Country of Residence</label>
      <select 
        name="country" 
        required 
        value={form?.country} 
        onChange={handleChange} 
        className={`form-control custom-select ${styles.transparentinput}`}
        id="country"
      >
        <option value="Nigeria">Nigeria</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
        
      </select>
    </div>
    </div>

    <div className="row">
    <div className="mb-1 col-md-12">
      <label htmlFor="country" className="form-label mb-0 text-white">Choose Souvenir</label>
      <select 
        name="souvenir" 
        required 
        value={form?.country} 
        onChange={handleChange} 
        className={`form-control custom-select ${styles.transparentinput}`}
        id="souvenir"
      >
        <option value="Fila">Fila</option>
        <option value="Gele">Gele</option>
        
        
      </select>
    </div>
    </div>
                                   
<div className="d-grid">
<button type="submit" disabled={loading} className={`btn ${styles.souvenirsubmit}`}>{loading? 'Loading...' : 'Order'}</button>
</div>
</form>
                </div>
               
            </div>



            {/* Africa Style */}

            <div className={`container mx-auto row justify-content-between align-items-center py-5 ${styles.africanStyle}`}>
            
            
                <div className="col-md-6 justify-content-center justify-content-lg-start align-items-center" style={{ height: "auto" }}>
                  <div><h1 className={`fw-bold font-weight-bold display-5 ${styles.africastyle}`}>
                    Alluvium, Powering <br></br> Africa with Style</h1>
                  </div>
                  <div>
                  <p>
                  Be sure not to overlook Alluvium’s showcase at GITEX Africa, Marrakesh from 29th-31st May 2024. Let's come together to witness Africa’s powering into the Global AI economy and connect with us as our experts unfold Atlassian-powered solutions.
                  </p>
                  </div>

                 
                  
                    {/* <Image width={556} height={417} src="/assets/audit.png" className="img-fluid" alt="Audit" /> */}
                </div>
                <div className="col-md-6 justify-content-center justify-content-lg-start align-items-center" style={{ height: "auto" }}>
                <Image width={714.5} height={403.95} src="/assets/gitex24/3heads.png" className="img-fluid" alt="Alluvium" />   
                </div>

                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <Image width={1176} height={98.8} src="/assets/gitex24/badge.png" className="img-fluid" alt="Alluvium" />   
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>
                
                
            </div>

                {/* More at our stand */}

            <div className={`mx-auto row justify-content-between py-5 ${styles.standbg}`}>
            <h1 className={`text-white fw-bold font-weight-bold display-5 text-center ${styles.moreatourstand}`}>More at our stand</h1>
         
            {/* cards */}
            <div className="row">
    <div className="col-md-3">
    <div className={`card ${styles.shirtbg}`}>
        <div className="card-body">
        </div>
        <div className={`${styles.cardfooter}`}>
         <p className={`${styles.footerspan}`} ><span>T-shirst</span> lined with various africa patterns  like the <span>kentege, Batik, Ankara</span></p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
    <div className={`card ${styles.geles}`}>
        <div className="card-body">  
        </div>
        <div className={` ${styles.cardfooter}`}>
         <p className={`${styles.footerspan}`} ><span>Gele ,Traditional headpiece</span> worn by women. Gele is not just a fashion accessory but a cultural artifact that embodies the <span>beauty,...</span></p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
    <div className={`card ${styles.wallet}`}>
        <div className="card-body">    
        </div>
        <div className={` ${styles.cardfooter}`}>
         <p className={`${styles.footerspan}`} ><span>Wallet</span> lined with various africa patterns  like the <span>kentege, Batik, Ankara</span></p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
    <div className={`card ${styles.filas}`}>
        <div className="card-body">     
        </div>
        <div className={` ${styles.cardfooter}`}>
         <p className={`${styles.footerspan}`} ><span>Fila, A traditional head covering</span> worn by men in some West African countries. Fila is a cultural emblem that embodes.....</p>
        </div>
      </div>
    </div>
  </div>
            {/* cards */}

    <div className={`container row justify-content-between ${styles.morestand}`}>
    <div className="col-md-5 justify-content-center justify-content-lg-start align-items-center">
        <h1>
        Experience the Alluvium Difference
        </h1>

        <p>
        At our stand, we're bringing the difference to you! Prepare to be dazzled by our exclusive goodies, including traditional gele, fila, coasters, and more. As you soak up the beauty, expertise, and pure fun, you'll also take home souvenirs that will keep the magic of Alluvium alive even after the event ends.
        </p>
    </div>
    <div className="col-md-5 justify-content-center justify-content-lg-start align-items-center">
        <h1 className="">
        Connect with a network of experts
        </h1>

        <p>
        Looking to revolutionize your business? Connect with Alluvium's network of industry-leading experts at the upcoming Gitex Africa event. As pioneers in the fields of Atlassian products, AI solutions, and ITSM providers, we offer you the keys to attaining your business true potential.
        </p>
    </div>
</div>
               
            </div>
  
    {/* remarkable */}
    <div className={`container-fluid mx-auto row justify-content-between ${styles.remarkable}`}>
        <div className={`container row justify-content-between ${styles.experience}`}>
        <div className="col-md-5 justify-content-center justify-content-lg-start align-items-center">
        <Image src="/assets/gitex24/allteam24.png" width={547} height={102.07} className="img-fluid" alt="Alluvium at Team 2024" />  
        </div>
        <div className="col-md-5 justify-content-center justify-content-lg-start align-items-center">
            <p>
                We had an incredible time at Team’24! We enjoyed connecting with so many of you and sharing our vision and innovations. To show our appreciation, we brought along some special souvenirs for everyone who visited our stand.
            </p>
        </div>
    </div>
    <div className={`container row justify-content-between ${styles.allteam}`}>
    <div className={`row ${styles.nogutters}`}>
            <div className="col-md-2">
            <Image src="/assets/gitex24/team1.png" width={306.92} height={210} className="img-fluid" alt="Alluvium at Team 2024" />  
            </div>
            <div className="col-md-2">
            <Image src="/assets/gitex24/team2.png" width={306.92} height={210} className="img-fluid" alt="Alluvium at Team 2024" />  
            </div>
            <div className="col-md-2">
            <Image src="/assets/gitex24/team3.png" width={306.92} height={210} className="img-fluid" alt="Alluvium at Team 2024" />  
            </div>
            <div className="col-md-2">
            <Image src="/assets/gitex24/team4.png" width={306.92} height={210} className="img-fluid" alt="Alluvium at Team 2024" />  
            </div>
            <div className="col-md-2">
            <Image src="/assets/gitex24/team5.png" width={306.92} height={210} className="img-fluid" alt="Alluvium at Team 2024" />  
            </div>
        </div>
    </div>
    </div>



        </Layout>
    );
}
