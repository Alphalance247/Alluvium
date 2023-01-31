import React from 'react';
import { useState } from "react";
import Email from '../lib/smtp.js';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Link from 'next/link';
import styles from '../styles/booking.module.scss';

export const BookingCTA = () => {
    return (
        <div className={styles.booking}>
            <h3>Talk to an Expert About Your Project</h3>
            <Link href="#consultationForm">
                <a>Book Consultation</a>
            </Link>
        </div>
    )
}

export const ConsultationForm = () => {
    const [fullname , setFullname] = useState('')
    const [email , setEmail] = useState('')
    const [company , setCompany] = useState('')
    const [phone , setPhone] = useState('')
    const [message , setMessage] = useState('')
    const [error , setError] = useState('')
    const { addToast } = useToasts();

    const onsubmit = async (e) => {
        e.preventDefault()
        if(!fullname || !email || !phone || !message){
            addToast("All fields marked with askteriks are required", { appearance: 'error' });
            return
        }

        let formData = {
            fullname: fullname,
            email: email,
            company: company,
            phone: phone,
            message: message,
        };
        let response = await fetch("/api/consultation", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });
        let result = await response.json();
        const status = result.status;
        // show message based on status
        addToast(result.message, { appearance: status });
    
        // send email
        const body = `
                    <p><strong> Name: </strong> ${fullname} </p>
                    <p><strong>Comapny:</strong> ${company ?? "-"} </p>
                    <p><strong>Email:</strong> ${email} </p>
                    <p><strong>Telephone:</strong> ${phone} </p>
                    <p><strong>Message:</strong> ${message} </p>`
        Email.send({
            Host : "smtp.gmail.com",
            Username : "lekanvgbg@gmail.com",
            Password : "jngpaymefwfndmfx",
            To : "lekanvgbg@gmail.com",
            From : email,
            Subject : "New consultation form submission from Alluvium.net",
            Body : body
        }).then(
            message => addToast('Saved Successfully: '+ message, { appearance: 'success' })
        );
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
                    <h2>Looking for a Consultation?</h2>
                    <div className={styles.content}>
                        <div>
                            <form method='POST' onSubmit={onsubmit}>
                                <div className="row my-4">
                                    <div class="form-group col-md-6">
                                        <label for="">Full Name <span className='text-danger'>*</span></label>
                                        <input onChange={(e) => setFullname(e.target.value)} value={fullname}  type="text" class="form-control" name="fullname" placeholder="" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="">Email <span className='text-danger'>*</span></label>
                                        <input onChange={(e) => setEmail(e.target.value)} value={email}  type="text" className="form-control" name="email" placeholder="" />
                                    </div>
                                </div>

                                <div className="row my-4">
                                    <div class="form-group col-md-6">
                                        <label for="">Company <span className='text-danger'>*</span></label>
                                        <input onChange={(e) => setCompany(e.target.value)} value={company}  type="text" class="form-control" name="company" placeholder="" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="">Phone <span className='text-danger'>*</span></label>
                                        <input onChange={(e) => setPhone(e.target.value)} value={phone}  type="text" className="form-control" name="telephone" placeholder="" />
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <label for="">How can we help you? <span className='text-danger'>*</span></label>
                                    <textarea onChange={(e) => setMessage(e.target.value)} value={message}  name="message" id="message" className='form-control' rows="7"></textarea>
                                </div>
                                <div className='notificationAlert'>{error}</div>
                                <div className='notificationAlert'>{error}</div>
                                <div class="form-group mt-5">
                                    <button type="submit" class="btn btn-pri">Submit</button>
                                </div>

                            </form>
                        </div>
                        <div>
                            <h3>Our Location</h3>
                            <p> <strong> Headquarter:</strong> Kemp House 160, City Road London, EC1V 2NX.</p>
                            <p><strong>Ekiti Branch:</strong> No.1 JayTee Ojo Crescent, Off Okemesi Road, Ikoro Ekiti, Ekiti State.</p>
                            <p><strong>Email:</strong> <a href="mailto:contact@alluvium.net">contact@alluvium.net</a> </p>
                            <p><strong>Phone Number:</strong> +234 812 345 6789</p>
                        </div>
                    </div>
                </div>
            </section>
        </ToastProvider>
    )
}

