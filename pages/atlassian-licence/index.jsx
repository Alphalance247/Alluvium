import Layout from "components/layout";
import styles from "../../styles/licence.module.scss";
import Exceptional from "components/licence-component/exceptional";
import DepOption from "../../components/licence-component/depOption";
import Platinum from "../../components/licence-component/platinum";
import Purchase from "components/licence-component/purchase";
import ChooseUs from "components/licence-component/chooseUs";
import FaQuestions from "components/licence-component/faQuestion";
import Link from "next/link";

const AtlassianLicence = () => {
  return (
    <Layout>
      <div className={`container-fluid ${styles.licencelayout}`}>
        <div className={` ${styles.licencehero}`}>
          <p className={styles.textlicence}>ATLASSIAN LICENSE MANAGEMENT</p>
          <h3>Effortless Atlassian License Management</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
            arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit
            id.
          </p>
          <div>
            <Link href="/atlassian-licence/licence-request">
              <button className={styles.button1}>Request License</button>
            </Link>
            <button className={styles.button2}>Request Site Audit</button>
          </div>
        </div>
      </div>
      <Exceptional />
      <DepOption />
      <Platinum />
      <Purchase />
      <ChooseUs />
      <FaQuestions />
    </Layout>
  );
};

export default AtlassianLicence;
