import React from 'react'
import Link from 'next/link';
import Button from 'components/atlassian-service-reuse/Button';
import styles from "../../styles/AlluviumRedesign2026/home/start-scaling.module.scss"
const StartScaling = () => {
    return (
        <div className={styles.start_scaling}>
            <div className={styles.startScaling_container}>
                <div className={styles.start_scaling_title}>
                    Stop Managing Tools. Start <br /> Scaling Your Business.
                </div>
                <p className={styles.start_scaling_desc}>Join the hundreds of teams thriving on a custom-built Atlassian ecosystem.</p>
                <div className={styles.start_scaling_btn}>
                    <Link href="/contact">
                        <Button variant="default">Schedule Your Consultation</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StartScaling