import styles from "../../../styles/AlluviumRedesign2025/Atlassian-Services/atlassianservices.module.scss";
import HeroHeading from "../ReuseComponents/heroHeading";
import ServicesCardReuse from "../ReuseComponents/ServicesCardReuse";

const ChoosePartnerAlluvium = () => {
  const data1 = [
    {
      title: "Expert Guidance",
      image: "/assets/redesign-2025/cardIcons/btn1.svg",
      width: 44,
      height: 44,
      description: [
        {
          text: "We’ve helped numerous companies migrate to Cloud before.",
          withLink: false,
        },
      ],
    },
    {
      title: "Staff Training",
      image: "/assets/redesign-2025/cardIcons/btn1.svg",
      width: 44,
      height: 44,
      description: [
        {
          text: "Conducted workshops to enhance Atlassian tool proficiency.",
          withLink: false,
        },
      ],
    },
    {
      title: "Expert Guidance",
      image: "/assets/redesign-2025/cardIcons/btn1.svg",
      width: 44,
      height: 44,
      description: [
        {
          text: "We’ve helped numerous companies migrate to Cloud before",
          withLink: false,
        },
      ],
    },
    {
      title: "Expert Guidance",
      image: "/assets/redesign-2025/cardIcons/btn1.svg",
      width: 44,
      height: 44,
      description: [
        {
          text: "We’ve helped numerous companies migrate to Cloud before.",
          withLink: false,
        },
      ],
    },
    {
      title: "Expert Guidance",
      image: "/assets/redesign-2025/cardIcons/btn1.svg",
      width: 44,
      height: 44,
      description: [
        {
          text: "We’ve helped numerous companies migrate to Cloud before.",
          withLink: false,
        },
      ],
    },
    {
      title: "Expert Guidance",
      image: "/assets/redesign-2025/cardIcons/btn1.svg",
      width: 44,
      height: 44,
      description: [
        {
          text: "We’ve helped numerous companies migrate to Cloud before.",
          withLink: false,
        },
      ],
    },
  ];
  return (
    <section className={styles.choose__alluvium}>
      <div className={styles.choose}>
        <div className={styles.choose__1}>
          <HeroHeading
            withParagragh={true}
            heading={"Why Choose Alluvium"}
            subhead={
              "From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey"
            }
            variant={"subtertiary"}
            withLink={false}
            variantMargingFix="second"
          />
        </div>

        <div>
          <ServicesCardReuse
            withList={false}
            marginVariant={"marginSecondary"}
            subHeadingVariant={"primary"}
            headingVariant={"primary"}
            data={data1}
            borderRemove={false}
            showAdditionalCard={false}
            borderVariant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default ChoosePartnerAlluvium;
