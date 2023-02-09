import React from 'react';
import { AltFooter } from './footer';
import Navigation from './navigation';
import styles from '../styles/layout.module.scss';

export default function Layout ({children}) {
    return (
        <div>
            <Navigation />
            <div className={styles.layoutBody}>
                {children}
            </div>
            <AltFooter/>
        </div>  
    )
}