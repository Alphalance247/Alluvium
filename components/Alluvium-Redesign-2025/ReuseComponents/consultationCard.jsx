import Button from "components/atlassian-service-reuse/Button";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/consultation.module.scss";
const ConsultationCardServices = ({ title, description, image }) => {
  return (
    <div className={styles.consultaion__card}>
      <div>
        <h3>
          Book a Free Training Consultation with Our Certified Experts Today.
        </h3>
        <p>
          Discover how our experts can transform your team's efficiency with a
          free training consultation today
        </p>
      </div>

      <div>
        <Button>Book Free Consultation</Button>
      </div>
    </div>
  );
};

export default ConsultationCardServices;
