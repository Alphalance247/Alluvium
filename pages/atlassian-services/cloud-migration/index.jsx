import Layout from "components/layout";
import styles from "./../../../styles/licence.module.scss";
import Link from "next/link";
import ServerCloud from "components/cloud-migration-compo/servercloud";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import ChooseUs from "components/licence-component/chooseUs";
import CaseStudies from "components/case-studies/case-studies";
import FaqPage from "components/faqPage";
import FaQuestions from "components/licence-component/faQuestion";
import LicenceHero from "pages/atlassian-services/atlassian-licence/licencehero";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import MigrationProcess from "components/cloud-migration-compo/migrationProcess";

const CloudMigration = () => {
  return (
    <Layout>
      <LicenceHero
        withrequest={false}
        contentsheading="ATLASSIAN LICENSE MANAGEMENT"
        contentsheading1="Effortless Atlassian Migration"
        contentsheading2="When smooth and secure data migration matters, make Alluvium your go-to partner."
        buttontext="Schedule a Demo"
        withSlide={false}
      />
      <ServerCloud />
      <WhyMigrate />
      <ChooseAlluvium choose="Why Plan Your Migration With Alluvium?" />
      <div className={`container-fluid ${styles.seamlessMigration}`}>
        <div className={` ${styles.seamlessheading}`}>
          <h4>Seamlessly migrate your data with Alluvium – Get started now!</h4>

          <div>
            <Link href="/support/contact#schedule-a-call">
              <button className={styles.button1}>
                Schedule a Free Consult
              </button>
            </Link>
          </div>
        </div>
      </div>
      <MigrationProcess />
      <CaseStudies />
    </Layout>
  );
};

export default CloudMigration;
