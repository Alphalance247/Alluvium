import styles from "../../styles/atlassian-services-style/generalstyle.module.scss";

const AtlassianSubHead = ({ headings, strategy }) => {
  return (
    <div className={`${styles.cloudheading}`}>
      <h2>{headings}</h2>
      <p>{strategy}</p>
    </div>
  );
};

export default AtlassianSubHead;
