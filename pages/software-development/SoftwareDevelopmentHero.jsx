import React from 'react'
import { Lines } from 'components/Alluvium-Redesign-2025/ReuseComponents/Lines'
import styles from "../../styles/AlluviumRedesign2025/SoftwareDevelopment/softwareDevelopment.module.scss"
import SoftwarDevelopmentCard from 'components/Alluvium-Redesign-2025/ReuseComponents/softwarDevelopmentCard'

const SoftwareDevelopmentHero = (

) => {
    return (
        <section className={styles.atlassian_software_development_hero}>
            <div style={{ maxWidth: "1272px", margin: "auto" }}>
                <Lines variant={"secondary"} />
            </div>
            <div className={styles.header}>
                <div className={styles.header_section}>

                    <SoftwarDevelopmentCard
                        subhead={"Software development & design"}
                        heading={"Alluvium Engineering Solutions"}
                        headContent={"Alluvium delivers software development services integrated with Atlassian tools for agile and efficient project execution"}
                        buttonText={"Schedule a Call"}
                        url={"/contact-us"}
                    />

                </div>
            </div>
            <div style={{ maxWidth: "1272px", margin: "auto" }}>
                <Lines variant={"secondary"} />
            </div>
        </section>
    )
}

export default SoftwareDevelopmentHero