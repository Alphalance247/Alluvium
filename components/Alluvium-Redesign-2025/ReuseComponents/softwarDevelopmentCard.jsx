import React from 'react'
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/softwareDevelopment.module.scss";
import Link from 'next/link';
import Button from "components/atlassian-service-reuse/Button";
const softwarDevelopmentCard = (
    {
        heading,
        subhead,
        headContent,
        url,
        buttonText,
    }
) => {
    return (
        <div className={styles.hero_heading}>
            <p className={styles.subHead}>
                {subhead}
            </p>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.heading_text}>{headContent}</p>
            <Link href={url}>
                <Button size="mediumL">{buttonText}</Button>
            </Link>
        </div>
    )
}

export default softwarDevelopmentCard