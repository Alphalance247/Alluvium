import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/booking.module.scss';

const BookingCTA = ({ title, btnText, bgColor, btnClass }) => {

    const [customStyle, setCustomStyle] = useState(null);

    useEffect(() => {
        if (!bgColor) {
            setCustomStyle(null);
        } else {
            setCustomStyle({ backgroundColor: bgColor });
        }
    }, [bgColor]);


    return (
        <div className={styles.booking} style={customStyle}>
            <h3>{title ? title : 'Talk to an Expert About Your Project'}</h3>
            <Link
                href="#consultationForm"
                className={`${styles.button} ${btnClass || styles.defaultButton}`}>
                {btnText ? btnText : 'Book Consultation'}
            </Link>
        </div>
    );
}

export default BookingCTA;