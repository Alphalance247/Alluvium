import Button from 'components/atlassian-service-reuse/Button'
import Link from 'next/link'
import React from 'react'
import styles from "styles/AlluviumRedesign2025/SoftwareDevelopment/services.module.scss"
const Services = ({ url, buttonText }) => {
    const services = [
        {
            rightColumn: false,
            image: "/assets/redesign-2025/devOps/first.svg",
            title: "Data migration ",
            description: "Seamlessly transition your data to the cloud with AWS Data Migration services. We ensure a secure, efficient, and minimal-downtime migration of your databases, applications, and workloads to AWS. Whether you’re moving from on-premises systems or upgrading to new cloud environments, our expert team handles every aspect, allowing you to unlock the full potential of the cloud with confidence.",

        },
        {
            rightColumn: false,
            image: "/assets/redesign-2025/devOps/first.svg",
            title: "Data Wharehousing",
            description: "Unlock the power of your data with our AWS Data Warehousing services. We help you consolidate, store, and analyze vast amounts of data in a scalable and secure environment. Whether you're looking to enhance business intelligence, streamline reporting, or drive data-driven decision-making, our AWS solutions provide the speed, flexibility, and reliability you need to turn your data into actionable insights.",

        },

        {
            rightColumn: false,
            image: "/assets/redesign-2025/devOps/first.svg",
            title: "Cloud Services Optimization",
            description: "Maximize the efficiency and performance of your cloud infrastructure with our AWS Cloud Services Optimization. We analyze and fine-tune your cloud resources to ensure you're getting the best value for your investment. By optimizing costs, improving scalability, and enhancing performance, we help you achieve a more streamlined and cost-effective cloud environment, allowing your business to operate at its full potential.",

        },
        {
            image: null,
            rightColumn: true,
            title: "Continuous Improvement",
            subTitle: " Your Atlassian Partner and Solutions Expert",
            description: "Let's discuss your unique needs and challenges, and we'll develop a customized solution tailored specifically for your use case.",

        }
    ]
    return (
        <div className={styles.services}>
            <div className={styles.gridContainer}>
                {services.map((item, index) => {
                    return (
                        <div key={index} className={`${styles.gridItem} ${index === 3 ? `${styles.highlightedDescp}` : ""}`}>
                            <div style={{ height: "76px" }}><h3 className={styles.ServiceTitle}>{item.title}</h3></div>
                            <div className={`${index === 3 ? `${styles.specialColumn}` : `${styles.normalColumn}`}`} >

                                <div className={styles.contentCard}>
                                    {item.rightColumn ?
                                        <h4 className={styles.partner} >
                                            {item.subTitle}
                                        </h4>
                                        : <img src={item.image} alt={item.title} />}
                                    <p>{item.description}</p>
                                    <div className={styles.button}>
                                        {item.rightColumn ? <Link href={url}>
                                            <Button size="mediumL">{buttonText}</Button>
                                        </Link> : ""}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services