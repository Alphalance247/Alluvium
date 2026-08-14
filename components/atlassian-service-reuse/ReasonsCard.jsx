import Image from "next/legacy/image";
import styles from "../../styles/atlassian-services-style/cards.module.scss";

const ReasonsCard = ({ id, headings, imgChoose, paragraphs }) => {
  return (
    <div key={id} className={styles.reasonsCard}>
      <Image src={imgChoose} width={48} height={48} alt="carbon" />
      <h5>{headings}</h5>
      <p>{paragraphs}</p>
    </div>
  );
};

export default ReasonsCard;
