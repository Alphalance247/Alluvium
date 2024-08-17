import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import styles from "../../styles/licence.module.scss";
import { chooseUsAlluvium } from "data";
import ReasonsCard from "components/atlassian-service-reuse/ReasonsCard";

const ChooseAlluvium = ({ choose, strategy }) => {
  return (
    <div className={`container-fluid ${styles.chooseUsDiv}`}>
      <div className={`container mx-auto ${styles.chooseOption}`}>
        <AtlassianSubHead headings={choose} strategy={strategy} />

        <div className={`${styles.expertGuide}`}>
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
