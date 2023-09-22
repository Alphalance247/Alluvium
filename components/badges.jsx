import Image from "next/image";
import styles from "../styles/hero.module.scss";
export default function () {
    return (
        <>
            <div className={styles.badges_cover}>
                <div className={styles.badges}>
                    <Image src={"/assets/atlassian-badges/market-place-white.png"} loading="eager" priority width={400} height={138} alt={"Atlassian Platinum Market Place Partner"} />
                    {/* <Image src={"/assets/atlassian-badges/aws-cloud.png"} loading="eager" priority width={198} height={198} alt={"AWS Certified Cloud Practitioner"} /> */}
                    <Image src={"/assets/atlassian-badges/aws-partner.png"} loading="eager" priority width={198} height={198} alt={"AWS Partner"} />
                    <Image src={"/assets/atlassian-badges/aws-qualified-software-partner.png"} loading="eager" priority width={198} height={198} alt={"AWS Qualified Software Partner"} />
                    <Image src={"/assets/atlassian-badges/atl-expert.png"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Atlassian Certified Expert"} />
                    <Image src={"/assets/atlassian-badges/gcp-02.jpeg"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Google Cloud Certified, Cloud Digital Leader"} />
                    <Image src={"/assets/atlassian-badges/atl.png"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Atlassian Certified Jira Administrator for Cloud"} />
                    <Image src={"/assets/atlassian-badges/atl-cloud.png"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Atlassian Certified Confluence Administrator for Cloud"} />
                    <Image src={"/assets/atlassian-badges/atl-jira-project.png"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Atlassian Platinum Market Place Partner"} />
                </div>
            </div>
        </>
    )
}