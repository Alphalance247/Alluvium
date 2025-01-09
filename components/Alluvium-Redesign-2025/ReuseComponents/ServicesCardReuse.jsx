import AtlassianServicesCard from "./atlassianServicesCard";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/servicecardreuse.module.scss";
import ConsultationCardServices from "./consultationCard";
const ServicesCardReuse = ({
  withList,
  marginVariant,
  subHeadingVariant,
  headingVariant,
  gridVariant = "default",
  data,
  showAdditionalCard = false,
  img,
}) => {
  return (
    <section className={styles.services__card__reuse}>
      <div className={styles.card__encap}>
        <div
          className={`${styles.services__card} ${
            styles[`services__card--${gridVariant}`]
          }`}
        >
          {data.map((item, i) => (
            <AtlassianServicesCard
              index={i}
              key={i}
              text={item?.text}
              img={item?.image}
              width={item?.width}
              height={item?.height}
              title={item?.title}
              description={item?.description}
              list={item?.list}
              withList={withList}
              marginVariant={marginVariant}
              subHeadingVariant={subHeadingVariant}
              headingVariant={headingVariant}
            />
          ))}

          {showAdditionalCard && <ConsultationCardServices />}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardReuse;
