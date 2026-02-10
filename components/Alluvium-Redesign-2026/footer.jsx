import React from 'react'
import styles from "../../styles/AlluviumRedesign2026/home/footer.module.scss";
import Image from 'next/image';
import Link from 'next/link';
const mobilePhones = [
    { id: "", location: "Lagos", num: "(+44) 2035762028" },
    { id: "", location: "London", num: "(+44) 2035762028" },
    { id: "", location: "Stamford", num: "(+ 44) 2035762028" },
    { id: "", location: "Nairobi", num: "(+44) 2035762028" },
    { id: "", location: "Orlando", num: "(+44) 2035762028" },
    // { id: "", location: "Sales team", num: "contact@alluvium.net" }
]
const services = [
    {
        id: "1", name: "atlassian services"
    },
    {
        id: "2", name: "AWS services"
    }, {
        id: "3", name: "design & development"
    }
]
const company = [
    { id: "1", name: "about us" },
    { id: "2", name: "marketplace plugins" },
    { id: "3", name: "cloud connect" },
    { id: "4", name: "team 24" },
    { id: "5", name: "booth 53" },
    { id: "6", name: "contact us" }
]
const resources = [
    { id: "1", name: "success stories" },
    { id: "2", name: "blog" },
    { id: "3", name: "migration case study" },
    { id: "4", name: "ITSM/JST case study" },
    { id: "5", name: "events" }

]

const badges = [
    {
        img: "/assets/redesign-2025/Solution partner.svg",
        width: 219,
        height: 67,
        alt: "solution partner",
    },
    {
        img: "/assets/redesign-2025/Certs.svg",
        width: 227,
        height: 84,
        alt: "marketplace partner",
    },

    {
        img: "/assets/redesign-2025/Chamber of Commerce.svg",
        width: 148,
        height: 87,
        alt: "stamford chamber of commerce",
    },

    {
        img: "/assets/Alluvium-redesign-2026/images/image72.png",
        width: 272,
        height: 92,
        alt: "london chamber of commerce",
    },
    {
        img: "/assets/redesign-2025/awscerts.svg",
        width: 107,
        height: 100,
        alt: "aws partner",
    },


];
const Footer = () => {
    return (
        <div>
            <div className={styles.footer_container}>
                <div className={styles.left_content}>
                    <div className={styles.mobile_container}>
                        <Image src='/assets/Alluvium-Redesign-2026/home/AlluviumLogo.png' alt='Alluvium Logo' width={149} height={30} />
                        <div className={styles.mobile_phone}>
                            {mobilePhones.map((item) => (
                                <div key={item.id} >
                                    <div>{item.location} : {item.num}</div>
                                </div>
                            ))}
                            <div>Sales Team :<a href="mailto:contact@alluvium.net"> contact@alluvium.net</a></div>
                        </div>
                    </div>
                </div>
                <div className={styles.right_content}>
                    <div className={styles.top_content}>
                        <div className={styles.col_1}>
                            <div className={styles.col_1_title}>Services</div>
                            <div className={styles.col_1_services}>
                                {services.map((item) => (
                                    <Link key={item.id} href="#">
                                        <div>{item.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={styles.col_2}>
                            <div className={styles.col_2_title}>Company</div>
                            <div className={styles.col_2_services}>
                                {company.map((item) => (
                                    <Link key={item.id} href="#">
                                        <div>{item.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={styles.col_3}>
                            <div className={styles.col_3_title}>Resources</div>
                            <div className={styles.col_3_services}>
                                {resources.map((item) => (
                                    <Link key={item.id} href="#">
                                        <div>{item.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom_content_container}>
                        <div className={styles.bottom_content}>
                            {badges.map((item) => (
                                <div key={item.id} className={styles.partners}>
                                    <div className={styles.col_1}>
                                        <Image src={item.img} width={item.width} height={item.height} alt={item.alt} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div >
            <div className={styles.footer_copyright}>
                <div className={styles.copyright_text}>© 2022 Alluvium Corporation. All rights reserved.</div>
                <div className={styles.privacy_terms}>
                    <Link href="#">Terms & Conditions</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Cookies Preferences</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer