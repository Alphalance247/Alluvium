import React from 'react';
import Link from 'next/link';
import styles from '../styles/booking.module.scss';

const BookingCTA = () => {
    return (
        <div className={styles.booking}>
            <h3>Talk to an Expert About Your Project</h3>
            <Link href="#consultationForm">
                <a>Book Consultation</a>
            </Link>
        </div>
    )
}

export default BookingCTA;