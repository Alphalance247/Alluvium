import Layout from "components/layout";
import Link from "next/link";
import styles from "../../../styles/atlassian-services-style/generalTermsandCondtion.module.scss";

const data = [
  {
    id: "1",
    heading: "Atlassian Migration Services",
    lastUpdated: "Last updated on February 23, 2024",
    url: "cloud-migration/terms-conditions",
  },
  {
    id: "2",
    heading: "License Management Services",
    lastUpdated: "Last updated on February 23, 2024",
    url: "atlassian-licence/terms-conditions",
  },
  {
    id: "3",
    heading: "Atlassian Training",
    lastUpdated: "Last updated on February 23, 2024",
    url: "training/terms-conditions",
  },
  {
    id: "4",
    heading: "Atlassian Consultancy Services",
    lastUpdated: "Last updated on February 23, 2024",
    url: "consulting/terms-conditions",
  },
];
const AtlassianTermsAndConditions = () => {
  return (
    <Layout>
      <section className={`${styles.terms} container mx-auto`}>
        <h1>Terms and Conditions</h1>
        <div className={styles.services}>
          {data.map((el) => {
            return (
              <div key={el.id}>
                <Link href={`/atlassian-services/${el?.url}`} passHref>
                  <div className={styles.migration__services}>
                    <h2>{el?.heading}</h2>
                    <p>{el?.lastUpdated}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default AtlassianTermsAndConditions;
