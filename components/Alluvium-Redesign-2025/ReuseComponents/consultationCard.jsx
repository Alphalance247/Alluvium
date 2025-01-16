import Button from "components/atlassian-service-reuse/Button";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/consultation.module.scss";
import Link from "next/link";
const ConsultationCardServices = ({ title, description, buttons }) => {
  return (
    <div className={styles.consultaion__card}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={styles.button__group}>
        {buttons.map((button, index) => (
          <Link href={button.href}>
            <Button key={index} variant={button.variant} size={button.size}>
              {button.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConsultationCardServices;
