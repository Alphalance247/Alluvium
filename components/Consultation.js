import React from 'react';
import { useState } from "react";
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { validateEmail } from 'lib/validation';
import Link from 'next/link';
import styles from '../styles/booking.module.scss';

export const BookingCTA = () => {
    return (
        <div className={styles.booking}>
            <h3>Talk to an Expert About Your Project</h3>
            <Link href="#consultationForm">
                <a className={`${styles.button} ${styles.defaultButton}`}>Book Consultation</a>
            </Link>
        </div>
    )
}

export const ConsultationForm = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const { addToast } = useToasts();

    const onsubmit = async (e) => {
        e.preventDefault()
        if (!fullname || !email || !phone || !message) {
            addToast("All fields marked with askteriks are required", { appearance: 'error' });
            return
        }
        if (!validateEmail(email)) {
            addToast("Please enter a valid email address", { appearance: 'error' });
            return
        }

        let formData = {
            fullname: fullname,
            email: email,
            company: company,
            phone_number: phone,
            how_we_can_help: message,
        };

        try {
            let response = await fetch("https://vast.ec2.alluvium.net/support/inquiry/", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            let result = await response.json();
            const status = result.status;
            console.log(result);
            // show message based on status
            addToast(result.success, { appearance: status });
        } catch (e) {
            console.log(e.message);
            addToast('Oops something went wrong. Please try again.', { appearance: "error" });
        }

        setFullname("")
        setEmail("")
        setPhone("")
        setCompany("")
        setMessage("")
    }

    return (
        <ToastProvider>
            <section id='consultationForm' className={styles.contact}>
                <div className="container">
                    <h2>How can we help?</h2>
                    <div className={styles.content}>
                        <div>
                            <form method='POST' onSubmit={onsubmit}>
                                <div className="row my-4">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="fullname">Full Name <span className='text-danger'>*</span></label>
                                        <input onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" className="form-control" name="fullname" id='fullname' placeholder="" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email <span className='text-danger'>*</span></label>
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" name="email" id='email' placeholder="" />
                                    </div>
                                </div>

                                <div className="row my-4">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="company">Company <span className='text-danger'>*</span></label>
                                        <input onChange={(e) => setCompany(e.target.value)} value={company} type="text" className="form-control" name="company" id='company' placeholder="" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="telephone">Phone <span className='text-danger'>*</span></label>
                                        <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className="form-control" name="telephone" id='telephone' placeholder="" />
                                    </div>
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="message">How can we help you? <span className='text-danger'>*</span></label>
                                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" id="message" className='form-control' rows="7"></textarea>
                                </div>
                                <div className="form-group mt-5">
                                    <button type="submit" aria-label='submit' className={`${styles.button} ${styles.defaultButton} ${styles.consultButton}`}>Submit</button>
                                </div>

                            </form>
                        </div>
                        <div>
                            <h3>Our Locations</h3>
                            <p>
                                <strong>Europe:</strong> Kemp House 160, City Road London, EC1V
                                2NX, UK.
                            </p>
                            <p>
                                <strong>America:</strong> 27345 W Sand Lake Rd,
                  STE 210 Office 3190
                  Orlando, FL 32819 US.
                            </p>
                            <div>
                                <strong>Africa:</strong>
                                <p>
                                    Lagos: Dominion Plaza, 140/141 Lekki - Epe Expressway, Lekki, Lagos 106104, Nigeria.
                                </p>
                                <p>
                                    Ekiti: No.1 JayTee Ojo Crescent, Off Okemesi
                                    Road, Ikoro Ekiti, Ekiti State, Nigeria.
                                </p>
                            </div>
                            <p><strong>Email:</strong> <a href="mailto:contact@alluvium.net">contact@alluvium.net</a> </p>
                            <p><strong>Phone Number:</strong> <a href="tel:+442035762028"> +442035762028</a> </p>
                        </div>
                    </div>
                </div>
            </section>
        </ToastProvider>
    )
}

