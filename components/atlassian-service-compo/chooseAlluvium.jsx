import styles from "../../styles/licence.module.scss";
import { chooseUsAlluvium } from "data";
import Image from "next/image";

const ChooseAlluvium = ({ choose }) => {
  return (
    <div className={`container-fluid ${styles.chooseUsDiv}`}>
      <div className={`container mx-auto ${styles.chooseOption}`}>
        <div className={`${styles.chooseHeading}`}>
          <h3>{choose}</h3>
          <p>
            From strategy to execution, our team of experts will provide the
            utmost guidance and smooth delivery through your data migration
            journey.
          </p>
        </div>

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
