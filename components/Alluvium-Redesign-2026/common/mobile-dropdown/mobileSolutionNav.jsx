import Link from 'next/link';
import React from 'react'
import styles from '../../../../styles/AlluviumRedesign2026/common/mobile-dropdown/solution.module.scss';
import { FaChevronRight } from 'react-icons/fa6';
const MobileSolutionNav = () => {
    const services = [
        {
            name: "Cloud Upgrade",
            link: "/cloud-upgrade",
        },
        { name: "ESM", link: "/enterprise-service-management" },
        { name: "License Optimization", link: "/license-optimization" },
        { name: "Partnerships", link: "/strategic-partnerships" },
    ];
    return (
        <div className={styles.mobileSolutionNav}>
            <div className={styles.dropdownTitle}>Alluvium solutions</div>
            {services.map((service, index) => (
                <Link key={index} href={service.link}>
                    <div className={styles.mobileSolutionItem}>
                        <div className={styles.navItemTitle}>{service.name}</div>
                        <div> <FaChevronRight className={styles.linkIcon} /></div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MobileSolutionNav