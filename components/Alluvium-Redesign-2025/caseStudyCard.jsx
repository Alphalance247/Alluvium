import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import { redesignCaseStudy } from "data";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import ReadMore from "./ReuseComponents/readmore";

const CaseStudyCard = () => {
  return (
    <div className={styles.card__encap}>
      {redesignCaseStudy.map((item, i) => {
        return (
          <Link href={item?.url}>
            <div className={styles.card} key={i}>
              <Image
                layout="responsive"
                src={item?.img}
                alt={item?.title}
                width={357}
                height={191}
              />
              <div className={styles.content}>
                <p>{item?.title}</p>
                <h5>{item?.heading}</h5>
                <ReadMore content="Read More" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CaseStudyCard;
