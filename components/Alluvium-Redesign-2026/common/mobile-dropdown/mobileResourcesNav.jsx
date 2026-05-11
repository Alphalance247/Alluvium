import React from 'react'
import styles from '../../../../styles/AlluviumRedesign2026/common/mobile-dropdown/resources.module.scss';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

const MobileResourcesNav = () => {
    const resourceLinks = [
        {
            title: "Success Stories",
            desc: "Explore how we’ve helped organizations deliver successful cloud migrations, optimize costs, and scale with Atlassian.",
            link: "/success-stories",
        },
        {
            title: "Blog",
            desc: "Insights, best practices, and expert perspectives on cloud, Agile, and enterprise transformation.",
            link: "/blogs",
        },
        {
            title: "Whitepapers",
            desc: "Insights, best practices, and expert perspectives on cloud, Agile, and enterprise transformation.",
            link: "/whitepaper",
        },
    ];

    const companyLinks = [
        {
            title: "Webinars & Events",
            desc: "Join our sessions to learn from experts, discover new trends, and explore practical solutions.",
            link: "/event",
        },
        {
            title: "About us",
            desc: "Learn who we are, what we stand for, and how we help organizations succeed with Atlassian.",
            link: "/about",
        },
        {
            title: "Contact & Support",
            desc: "Get in touch with our team or access support for your products and services.",
            link: "/contact-us",
        },
    ];
    return (
        <div>
            <div className={styles.mobileResourcesNav}>
                <div className={styles.dropdownTitle}>Resources</div>
                {resourceLinks.map((resourceLink, index) => (
                    <div>
                        <Link key={index} href={resourceLink.link}>
                            <div className={styles.mobileResourcesItem}>
                                <div className={styles.navItemTitle}>{resourceLink.title}</div>
                                <div> <FaChevronRight className={styles.linkIcon} /></div>
                            </div>
                        </Link>
                        <p className={styles.mobileResourcesDescription}>
                            {resourceLink.desc}
                        </p>
                    </div>
                ))}
            </div>
            <div className={styles.mobileResourcesNav}>
                <div className={styles.dropdownTitle}>Company</div>
                {companyLinks.map((companyLink, index) => (
                    <div>
                        <Link key={index} href={companyLink.link}>
                            <div className={styles.mobileResourcesItem}>
                                <div className={styles.navItemTitle}>{companyLink.title}</div>
                                <div> <FaChevronRight className={styles.linkIcon} /></div>
                            </div>
                        </Link>
                        <p className={styles.mobileResourcesDescription}>
                            {companyLink.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileResourcesNav