import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import styles from "../../styles/licence.module.scss";
import { chooseUsAlluvium } from "data";
import Image from "next/image";

const ChooseAlluvium = ({ choose, strategy }) => {
  return (
    <div className={`container-fluid ${styles.chooseUsDiv}`}>
      <div className={`container mx-auto ${styles.chooseOption}`}>
        <AtlassianSubHead headings={choose} strategy={strategy} />

        <div className={`${styles.expertGuide}`}>
          {chooseUsAlluvium.map((el) => {
            return (
              <div key={el.id}>
                <Image src={el.imgChoose} width={48} height={48} alt="carbon" />
                <h5>{el.headings}</h5>
                <p>{el.paragraphs}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseAlluvium;
