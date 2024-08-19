import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import styles from "../../styles/licence.module.scss";
import ReasonsCard from "components/atlassian-service-reuse/ReasonsCard";

const ChooseAlluvium = ({
  choose,
  strategy,
  chooseUsAlluvium,
  variant = "default",
  backgroundVariant = "default",
}) => {
  return (
    <div
      className={`container-fluid ${styles.chooseUsDiv} ${
        styles[`chooseUsDiv--${backgroundVariant}`]
      }`}
    >
      <div className={`container mx-auto ${styles.chooseOption}`}>
        <AtlassianSubHead headings={choose} strategy={strategy} />

        <div
          className={`${styles.expertGuide} ${
            styles[`expertGuide--${variant}`]
          }`}
        >
          {chooseUsAlluvium.map((el) => {
            return (
              <ReasonsCard
                id={el.id}
                headings={el.headings}
                paragraphs={el.paragraphs}
                imgChoose={el.imgChoose}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseAlluvium;
