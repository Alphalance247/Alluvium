import styles from "../../styles/atlassian-services-style/cards.module.scss";
import Button from "./Button";

const PackageCard = ({ packageName, price, link }) => {
  return (
    <div className={`${styles.packageCard}`}>
      <div className={styles.heading}>
        <h3>Silver</h3>
        <p>Up to 80 support hours monthly</p>
      </div>

      <div className={styles.price}>
        <div>
          <span>$600</span>
          <p>USD/month</p>
        </div>
        <p>billed monthly or annually</p>
      </div>

      <Button>Schedule a Call</Button>
    </div>
  );
};

export default PackageCard;
