import styles from "../../styles/licence.module.scss";
import { chooseUsOptions } from "data";
import Image from "next/image";

const ChooseUs = ({ choose }) => {
  return (
    <div className={`container-fluid ${styles.chooseUsDiv}`}>
      <div className={`container mx-auto ${styles.chooseOption}`}>
        <div className={`${styles.chooseHeading}`}>
          <h3>{choose}</h3>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
            arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit
            id.
          </p> */}
        </div>

        <div className={`${styles.expertGuide}`}>
          {chooseUsOptions.map((el) => {
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

export default ChooseUs;
