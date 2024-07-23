import Layout from "components/layout";
import styles from "./../../../styles/licence.module.scss";
import Link from "next/link";
import ServerCloud from "components/cloud-migration-compo/servercloud";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import ChooseUs from "components/licence-component/chooseUs";
import CaseStudies from "components/case-studies/case-studies";
import FaqPage from "components/faqPage";
import FaQuestions from "components/licence-component/faQuestion";
import LicenceHero from "pages/atlassian-licence/licence-request/licencehero";

const CloudMigration = () => {
  return (
    <Layout>
      <LicenceHero
        withrequest={false}
        contentsheading="ATLASSIAN LICENSE MANAGEMENT"
        contentsheading1="Effortless Atlassian License Management"
        contentsheading2="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
            arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit
            id."
        buttontext="Schedule a Demo"
      />
      <ServerCloud />
      <WhyMigrate />
      <ChooseUs choose="Why Plan Your Migration With Alluvium?" />
      <div className={`container-fluid ${styles.seamlessMigration}`}>
        <div className={` ${styles.seamlessheading}`}>
          <h4>Seamlessly migrate your data with Alluvium – Get started now!</h4>

          <div>
            <Link href="">
              <button className={styles.button1}>Schedule a Call</button>
            </Link>
          </div>
        </div>
      </div>
      <CaseStudies />
    </Layout>
  );
};

export default CloudMigration;
