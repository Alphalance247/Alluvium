import Head from "next/head";
import styles from "../../styles/boot53.module.scss";
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

export default function Boot53() {

  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        // country: country[0].name,
        email_sub: false,
        phone_number: "",
        message_to_alluvium: ""
    });

    const handleFormSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!(phonePattern.test(form.phone_number) || (phonePattern.test(form.contact_number)))) {
            setPhoneError((prev) => true)
        }
        else {
            setPhoneError((prev) => false)
        };

        if (!phoneError) {
            setLoading(true);
            await axios
                .post("https://vast.ec2.alluvium.net/teams24/lead-conversion/", { ...form })
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
                        // country: country[0].name,
                        email_sub: false,
                        phone_number: "",
                        message_to_alluvium: ""
                    });
                    // setRegistrationLimitExceeded(res.data.max_count_reached);
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

    }, [phoneError, phonePattern, form]);

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

            <div id="hero" className="" style={{ backgroundImage: "url('/assets/b53hero.png')", backgroundPosition: 'center', backgroundSize: 'cover', minHeight: "595px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="container">
                    <div className="row my-5 my-md-0">
                        <div className="col-md-6">
                            <div className="" style={{ marginTop: "50px" }}>
                                <h1 className="text-white">Welcome to <span className="text-warning">Booth 53</span></h1>
                                <h1 className="text-white">Unlock the full potential of your Atlassian products</h1>
                                <div className="row px-3 px-lg-0 mb-4 mb-lg-0">
                                    <div className="col-md-6 p-0" style={{ marginTop: "60px" }}>
                                        <Image src="/assets/part.png" width={466.56} height={77.67} className="img-fluid" alt="Badges" />
                                    </div>
                                    <div className="col-md-6 d-none d-lg-block" style={{ paddingLeft: "0" }}>
                                        <Image src="/assets/mark.png" width={270.62} height={189.93} className="img-fluid" alt="direction" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container bg-white" style={{ borderRadius: "10px", maxWidth: '500px', padding: "20px" }}>
                                <form onSubmit={handleFormSubmit} className={styles.form}>
                                    <div className="row">
                                        <div className="mb-1 col-md-6">
                                            <label htmlFor="firstName" className="form-label mb-0">First Name</label>
                                            <input type="text" name="first_name" required value={form?.first_name} onChange={handleChange} className="form-control" id="firstName" />
                                        </div>
                                        <div className="mb-1 col-md-6">
                                            <label htmlFor="lastName" className="form-label mb-0">Last Name</label>
                                            <input type="text" name="last_name" required value={form?.last_name} onChange={handleChange} className="form-control" id="lastName" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-1 col-md-6">
                                            <label htmlFor="companyName" className="form-label mb-0">Company Name</label>
                                            <input type="text" name="company" required value={form?.company} onChange={handleChange} className="form-control" id="companyName" />
                                        </div>
                                        <div className="mb-1 col-md-6">
                                            <label htmlFor="email" className="form-label mb-0">Email Address</label>
                                            <input type="email" name="email" required value={form?.email} onChange={handleChange} className="form-control" id="email" />
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="phoneNumber" className="form-label mb-0">Phone Number</label>
                                        <PhoneInput
                                            placeholder="8140686688"
                                            international
                                            defaultCountry="US"
                                            value={form.phone_number ?? ""}
                                            onChange={handleNumber}
                                            className={`${styles.PhoneInput} ${phoneError ? styles.error : ""}`}
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
                                    <div className="mb-1">
                                        <label htmlFor="message" className="form-label mb-0">Message to Alluvium</label>
                                        <textarea className="form-control" required value={form?.message_to_alluvium} onChange={handleChange} name="message_to_alluvium" id="message" rows="5"></textarea>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn" style={{ backgroundColor: "#E37915", color: "#fff" }}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* comprehensive site audit */}

            <div className="container mx-auto row justify-content-between align-items-center py-5">
                <div className="col-md-5 d-flex justify-content-center justify-content-lg-start align-items-center" style={{ height: "auto" }}>
                    <Image width={556} height={417} src="/assets/audit.png" className="img-fluid" alt="Audit" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="text-left">
                        <h1 className={styles.an_heading}>Comprehensive Site Audit</h1>
                        <div style={{ maxWidth: "676px", fontWeight: "500" }}>
                            <p>
                                Unlock the Full Potential of Your Atlassian Products with Our Comprehensive Site Audit! </p>
                            <ul className="ms-4">
                                <li>Discover Hidden Opportunities,</li>
                                <li>Streamline Operations,</li>
                                <li>and Elevate Performance Across Your Platform.</li>
                            </ul>
                            <p> Our Expert Health Check Ensures Your Setup is Fine-Tuned for Success, Regardless of Your Project&apos;s Scope or Complexity.</p>
                            <p> Don&apos;t Wait – Schedule Your Audit Today and Take Your Atlassian Products to the Next Level!
                            </p>
                        </div>
                        <button type="submit" className="btn" style={{ backgroundColor: "#E37915", color: "#fff" }}>Request a demo</button>
                    </div>
                </div>
            </div>



            {/* case studies */}
            <CaseStudies showBooking={false} />

            {/* brochure */}
            <div className="container mx-auto row align-items-center gap-5 gap-md-0" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <div className="col-md-6">
                    <div className="container">
                        <h1>Discover more with Our Brochure!</h1>
                        <p>Discover Hidden Opportunities, Streamline Operations, and Elevate Performance Across Your Platform. Our Expert Health Check Ensures Your Setup is Fine-Tuned for Success, Regardless of Your Project's Scope or Complexity. Don't Wait – Get to know us Today and Take Your Atlassian Products to the Next Level!</p>
                        <button type="submit" className="btn" style={{ backgroundColor: "#E37915", color: "#fff", borderRadius: "5px" }}>Download Brochure</button>
                    </div>
                </div>
                <div className="container col-md-6 d-flex justify-content-center align-items-center">
                    <img src="/assets/book.png" className="img-fluid" alt="Book Image" />
                </div>
            </div>

            {/* test */}
            <section className={styles.section3} id="register-section">
  <div className="container mx-auto">
    <form action="" onSubmit={handleFormSubmit}>
      <div className={styles.incentives}>
        
        <div className="d-flex flex-wrap">
          {BoothData.map((data) => (
            <button
              type="button"
              onClick={() => handleSouvenir(data?.inputName, data?.inputValue)}
              className={`${styles.encap} col-md-2`} 
              key={data.id}
            >
              <div className="w-100" height={430}>
                <Image
                  width={442}
                  height={430}
                  layout="responsive"
                  src={data.image}
                  alt={data.alt}
                  loading="eager"
                  priority
                />
              </div>
              <div className={styles.incentiveContent}>
                <div className={styles.content}>
                  <p className={styles.firtsP}>{data.incentiveType}</p>
                  <p className={styles.secondP}>{data.incentiveDescription}</p>
                </div>

                <input
                  type="checkbox"
                  name={data.inputName}
                  id="checkbox"
                  required={!form[data.inputName]}
                  checked={form[data.inputName] === data.inputValue}
                  value={data.inputValue}
                  style={{ transform: "scale(2)" }}
                  onChange={handleChange}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </form>
  </div>
</section>

            {/* test */}
                        {/* send me */}
<div className="container-fluid" style={{ backgroundColor: "#11202D" }}>
      <div className="container mx-auto row align-items-center gap-5 gap-md-0" style={{ padding: "100px 0" }}>
        <div className="col-md-12">
          <div className="container d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('/assets/sourvbg.png')", backgroundSize: "cover", minHeight: "457px" }}>
            <div className="d-flex flex-column align-items-center">
              {/* Button to open modal */}
              <button type="button" onClick={handleButtonClick} className="btn" style={{ backgroundColor: "#E37915", color: "#fff", borderRadius: "5px" }}>Send me souvenirs (coming soon)</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"></h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                
                <form onSubmit={handleFormSubmit}>
                                    <div className="row">
                                        <div className="mb-1 col-md-6">
                                            <label htmlFor="firstName" className="form-label mb-0">Name</label>
                                            <input type="text" name="name" required value={form?.name} onChange={handleChange} className="form-control" id="firstName" placeholder="Name" />
                                        </div>
                                        <div className="mb-1 col-md-6">
                                            <label htmlFor="Email" className="form-label mb-0">Email</label>
                                            <input type="text" name="email" required value={form?.email} onChange={handleChange} className="form-control" id="lastName" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row">
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="message" className="form-label mb-0">Postage Address</label>
                                        <textarea className="form-control" required value={form?.message_to_alluvium} onChange={handleChange} name="message_to_alluvium" id="message" rows="5"></textarea>
                                    </div>

                                    <div className="row">
                                        <div className="mb-1 col-md-6">
                                        <label htmlFor="phoneNumber" className="form-label mb-0">Contact</label>
                                        <PhoneInput
                                            placeholder="8140686688"
                                            international
                                            defaultCountry="NG"
                                            value={form.phone_number ?? ""}
                                            onChange={handleNumber}
                                            className={`${styles.PhoneInput} ${phoneError ? styles.error : ""}`}
                                            required
                                            numberInputProps={{
                                                className: phoneError ? styles.error : "",
                                            }}
                                            countrySelectProps={{
                                                className: phoneError ? styles.error : "",
                                            }}
                                        />
                                        </div>
                                        <div className="mb-1 col-md-6">
                                        <label htmlFor="email" className="form-label mb-0">Country</label>
                                        <input type="country" name="country" required value={form?.email} onChange={handleChange} className="form-control" id="email" placeholder="yourname@example.com" />
                                    </div>
                                    </div>
                                    <div className="mb-1 col-md-6">
                                        <label htmlFor="zipcode" className="form-label mb-0">Zip Code</label>
                                            <input type="text" name="zipcode" required value={form?.zipcode} onChange={handleChange} className="form-control" id="zipcode" placeholder="Zip Code" />
                                        </div>

                                   
                                    
                                    <div className="d-grid">
                                        <button type="submit" className="btn" style={{ backgroundColor: "#E37915", color: "#fff" }}>Submit</button>
                                    </div>
                                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>



        </Layout>
    );
}
