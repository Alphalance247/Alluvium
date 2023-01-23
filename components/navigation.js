import React, { useState } from "react";
import Link from 'next/link';
import styles from '../styles/navigation.module.scss';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { ourServicesData } from "data";


export default function Navigation({ theme, ourServices }) {
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const [currentDropdown, setCurrentDropdown] = useState('');
    const [dropdownActive, setDropdownActive] = useState(false);
    const toggleMenu = () => {
        setDisplayMobileMenu(!displayMobileMenu);
    }

    const toggleDropdown = (title) => {
        if (dropdownActive) {
            if (currentDropdown === title) {
                setDropdownActive(!dropdownActive)
                setCurrentDropdown('')
            } else {
                setCurrentDropdown(title)
            }
        } else {
            setCurrentDropdown(title)
            setDropdownActive(!dropdownActive)
        }
        setDisplayMobileMenu(!displayMobileMenu);
    }

    return (
        <div className={`${styles.navigationMenu}`} data-aos-delay="300" data-aos="fade-down" onMouseLeave={() => toggleDropdown('')}>
            <div className="container d-flex justify-content-between position-relative align-items-center">
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/assets/alluvium-logo-dark.svg" alt="logo" />
                        {/* {
                        theme === "dark" ? <img src="/assets/alluvium-logo-dark.svg" alt="logo" /> : <img src="/assets/alluvium-logo.svg" alt="logo" />
                    } */}
                        {/* <Image src="/assets/alluvium-logo.svg" width={150} height={29.06} alt="logo"/> */}
                    </Link>
                </div>
                <nav className={styles.navigation}>
                    <ul className={theme === "dark" ? styles.desktopMenuDark : styles.desktopMenu}>
                        <li>
                            <div>
                                <p onClick={() => toggleDropdown('company')} className={(dropdownActive && (currentDropdown === 'company')) ? styles.dropdownActive : styles.dropdownToggler}>
                                    <span>Company</span>
                                    {
                                        (dropdownActive && (currentDropdown === 'company')) ?
                                            <MdOutlineKeyboardArrowUp size={'1.5em'} className="fw-bold text-white" />
                                            :
                                            <MdOutlineKeyboardArrowDown size={'1.5em'} className="fw-bold text-dark" />

                                    }
                                </p>
                                <div className={(dropdownActive && (currentDropdown === 'company')) ? styles.dropdownDiv : styles.dropdownHidden}>
                                    <ul>
                                        <li><Link href="/about">About us</Link></li>
                                        {/* <li><Link href="/products">Our Products</Link></li> */}
                                        <li><Link href="/#services">Our Services</Link></li>
                                        <li><Link href="/reel">Project Reel</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p onClick={() => toggleDropdown('services')} className={(dropdownActive && (currentDropdown === 'services')) ? styles.dropdownActive : styles.dropdownToggler}>
                                    <span>Services</span>
                                    {
                                        (dropdownActive && (currentDropdown === 'services')) ?
                                            <MdOutlineKeyboardArrowUp size={'1.5em'} className="fw-bold text-white" />
                                            :
                                            <MdOutlineKeyboardArrowDown size={'1.5em'} className="fw-bold text-dark" />

                                    }
                                </p>
                                <div className={(dropdownActive && (currentDropdown === 'services')) ? styles.dropdownDiv : styles.dropdownHidden}>
                                    <ul>
                                        {
                                            ourServices && ourServices.map((service)=>(
                                                <li key={service.id}><Link href="/#">{service.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="https://marketplace.atlassian.com/vendors/1218751/alluvium" target="_blank">Our Products</a></li>
                        <li><a href="https://blog.alluvium.net/" rel="Alluvium" target="_blank">Blog</a></li>
                        <li>
                            <div>
                                <p onClick={() => toggleDropdown('university')} className={(dropdownActive && (currentDropdown === 'university')) ? styles.dropdownActive : styles.dropdownToggler}>
                                    <span>University</span>
                                    {
                                        (dropdownActive && (currentDropdown === 'university')) ?
                                            <MdOutlineKeyboardArrowUp size={'1.5em'} className="fw-bold text-white" />
                                            :
                                            <MdOutlineKeyboardArrowDown size={'1.5em'} className="fw-bold text-dark" />
                                    }
                                </p>
                                <div className={(dropdownActive && (currentDropdown === 'university')) ? styles.dropdownDiv : styles.dropdownHidden}>
                                    <ul>
                                        <li><Link href="/showing-interest">Show Interest (AU)</Link></li>
                                        <li><a href="http://university.alluvium.net" target='_blank'>Alluvium University (AU)</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* <li><Link href="/support">Support (FAQs)</Link></li> */}
                        <li>
                            <Link href="/support/contact">
                                <a className={styles.contactUsButton}>Contact Us</a>
                            </Link>
                        </li>
                        {/* <li><Link href="/onboarding">Onboarding</Link></li> */}
                    </ul>
                    <div className={displayMobileMenu === true ? styles.mobileMenu : styles.hideMobileMenu}>
                        <ul>
                            <li><Link href="/">+ Home</Link></li>
                            {/* <li><Link href="/products">+ Our Products</Link></li> */}
                            <li><Link href="/#services">+ Our Services</Link></li>
                            <li><Link href="/reel">+ Project Reel</Link></li>
                            <li><Link href="/about">+ About us</Link></li>
                            {/* <li><Link href="/team">+ Our Team</Link></li> */}
                            <li><a href="http://university.alluvium.net" target='_blank'>+ Alluvium University (AU)</a></li>
                            <li><Link href="/showing-interest">+ Show Interest (AU)</Link></li>
                            <li><a href="https://marketplace.atlassian.com/vendors/1218751/alluvium" target="_blank">+ Our Products</a></li>
                            {/* <li><Link href="/onboarding">+ Onboarding</Link></li> */}
                            <li><Link href="/support">+ Support (FAQs)</Link></li>
                            <li><Link href="/support/contact">+ Contact Us</Link></li>
                        </ul>
                    </div>
                </nav>
                {
                    displayMobileMenu && <button onClick={toggleMenu} className={styles.closeBtn}>
                        {/* <div className={theme === "dark" ? styles.menuBtnDark : styles.menuBtn}> */}
                        <div className={styles.menuBtnDark}>
                            <div className={styles.barOne}></div>
                            <div className={styles.barTwo}></div>
                            <div className={styles.barThree}></div>
                        </div>
                    </button>
                }
            </div>

        </div>

    )
}

export const getStaticProps = async () => {
    return {
      props: {
        products: productData,
        ourServices: ourServicesData
      }
    }
  }