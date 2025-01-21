import AtlassianServicesCard from "./atlassianServicesCard";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/servicecardreuse.module.scss";

const ServicesCardReuse = ({
  withList,
  marginVariant,
  subHeadingVariant,
  headingVariant,
  gridVariant = "default",
  data,
  showAdditionalCard = false,
  useText,
  useImage,
  ConsultationCardServices,
  noBorder,
  noBorderCard,
  containerStyle,
}) => {
  return (
    <section className={styles.mainSection}>
      <div
        className={`${styles.services__card__reuse} ${
          styles[`services__card__reuse--${noBorder}`]
        }`}
      >
        <div
          className={`${styles.services__card} ${
            styles[`services__card--${gridVariant}`]
          }`}
        >
          {data.map((item, i) => (
            <AtlassianServicesCard
              key={i}
              mainText={item?.mainText}
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
              useImage={useImage}
              useText={useText}
              noBorderCard={noBorderCard}
              containerStyle={containerStyle}
            />
          ))}

          {showAdditionalCard && ConsultationCardServices}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardReuse;
