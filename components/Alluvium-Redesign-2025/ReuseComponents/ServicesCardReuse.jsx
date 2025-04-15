import AtlassianServicesCard from "./atlassianServicesCard";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/servicecardreuse.module.scss";
import ConsultationCardServices from "./consultationCard";
import TrustedAtlassian from "../Atlassian-Services/TrustedAtlassian";
const ServicesCardReuse = ({
  withList,
  marginVariant,
  subHeadingVariant,
  headingVariant,
  gridVariant = "default",
  data,
  showAdditionalCard = false,
  isBtn,
  borderRemove = false,
  trusted = false,
  borderVariant = "default",
  imageAvailable,
}) => {
  const totalCards = data.length;

  // Determine how many borders to remove
  const removeCount = totalCards >= 6 ? 3 : 2;
  const removeThree = totalCards >= 6 && 2;
  const removeType = borderRemove ? removeCount : removeThree;
  const startIndexToRemove = totalCards - removeType;

  return (
    <section
      className={` ${styles.services__card__reuse} ${
        styles[`services__card__reuse--${borderVariant}`]
      } `}
    >
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
              btnUrl={item?.btnUrl}
              withList={withList}
              marginVariant={marginVariant}
              subHeadingVariant={subHeadingVariant}
              headingVariant={headingVariant}
              removeBorder={i >= startIndexToRemove}
              isBtn={isBtn}
              imageAvailable={imageAvailable}
              btnText={item?.btnText}
              btnSize={item?.btnSize}
              btnType={item?.btnType}
            />
          ))}

          {showAdditionalCard && <ConsultationCardServices />}
        </div>
      </div>

      {trusted && <TrustedAtlassian />}
    </section>
  );
};

export default ServicesCardReuse;
