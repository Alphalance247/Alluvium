import styles from "../../styles/atlassian-services-style/cards.module.scss";
import Button from "./Button";
import Link from "next/link";

const PackageCard = ({ packageName, hoursUse, price }) => {
  return (
    <div className={`${styles.packageCard}`}>
      <div className={styles.heading}>
        <h3>Silver{packageName}</h3>
        {/* replace values with props */}
        <p>{hoursUse}</p>
      </div>

      <div className={styles.price}>
        <div>
          <span>{price}</span>
          <p>USD/month</p>
        </div>
        <p>billed monthly or annually</p>
      </div>
      <Link href="">
        <Button variant="outline">Schedule a Call</Button>
      </Link>
    </div>
  );
};

export default PackageCard;
