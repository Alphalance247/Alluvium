import React from 'react'
import styles from "styles/AlluviumRedesign2025/SoftwareDevelopment/awsTrainingSolution.module.scss"
const AWSTrainingSolution = ({ title, description }) => {
    const data = [
        {
            title: "Fundamentals & Essential",
            description: "Build a strong foundation with our AWS Fundamentals & Essentials training. Perfect for beginners, this course covers the core concepts of cloud computing and AWS services, providing you with the essential knowledge needed to start your cloud journey."
        },
        {
            title: "Data analytics & Machine learning",
            description: "Unlock the power of your data with our Data Analytics & Machine Learning training. Learn how to leverage AWS tools and services to collect, process, analyze, and visualize data, as well as build and deploy machine learning models"
        },
        {
            title: "Security & Compliance",
            description: "Ensure your cloud environment is secure with our AWS Security & Compliance training. This course covers best practices for securing your AWS infrastructure, managing compliance requirements, and protecting your data against evolving threats."
        },
        {
            title: "Advanced Cloud Architecture",
            description: "Take your skills to the next level with our Advanced Cloud Architecture training. Designed for experienced professionals, this course delves deep into complex AWS architectures, teaching you how to design, implement, and manage scalable, secure, and highly available cloud solutions"
        },
        {
            title: "DevOps Practices",
            description: "Streamline your development process with our AWS DevOps Practices training. This course teaches you how to automate workflows, integrate continuous deployment, and manage infrastructure as code, ensuring your team can deliver high-quality software faster and more efficiently."
        }
    ]
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.container_item}>
                    <div className={styles.box}>
                        <div className={styles.rightColumn}>
                            <div className={styles.contentItems}>
                                <div className={styles.headTitleContainer}> <h3 className={styles.headingText}>{title}</h3></div>
                                <p className={styles.headingDescription}>{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        {data.map((item, index) => {
                            return (
                                <div className={`${index === 4 ? `${styles.customBorder}` : `${styles.secondColumnItems}`}`} key={index}>
                                    <div className={styles.contentItems}>
                                        <div className={styles.headTitleContainer}><h4 className={styles.headTitle}>{item.title}</h4></div>
                                        <p className={styles.headDescription}>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AWSTrainingSolution