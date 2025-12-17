import React from 'react'
import styles from 'styles/AlluviumRedesign2025/SoftwareDevelopment/softwareDevelopment.module.scss'

const ServiceTextCard = ({
    text

}) => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h3 className={styles.containerh3}>{text}</h3>
            </div>
        </div>
    )
}

export default ServiceTextCard