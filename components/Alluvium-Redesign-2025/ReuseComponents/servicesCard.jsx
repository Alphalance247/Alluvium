import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/services_card.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "components/atlassian-service-reuse/Button";

const ServicesCard = ({ content, btn = true }) => {
  return (
    <div className={styles.card}>
      {content.map((item, i) => {
        return (
          <div key={i} className={styles.card__content}>
            <div className={styles.content}>
              <Image src={item?.img} width={56} height={56} alt="logos" />
              <h5>{item?.heading}</h5>
              <p>{item?.subHeading}</p>
            </div>

            {btn && (
              <div className={styles.btn}>
                <Link href={item?.url}>
                  <Button variant="block">{item?.btn}</Button>
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ServicesCard;
