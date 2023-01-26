import React from 'react';
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
    return (
        <section className={styles.contact}>
            <div className="container">
                <h2>Looking for a Consultation?</h2>
                <div className={styles.content}>
                    <div>
                        <form action="">
                            <div className="row my-4">
                                <div class="form-group col-md-6">
                                    <label for="">Full Name <span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control" name="" placeholder="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="">Email <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" name="" placeholder="" />
                                </div>
                            </div>

                            <div className="row my-4">
                                <div class="form-group col-md-6">
                                    <label for="">Company <span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control" name="" placeholder="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="">Phone <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" name="" placeholder="" />
                                </div>
                            </div>

                            <div class="form-group col-md-12">
                                <label for="">How can we help you? <span className='text-danger'>*</span></label>
                                <textarea name="" id="" className='form-control' rows="7"></textarea>
                            </div>

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
    )
}

