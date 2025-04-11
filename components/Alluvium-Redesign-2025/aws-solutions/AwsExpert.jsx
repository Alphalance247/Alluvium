import NewCard from "../ReuseComponents/newCard";
import ServicesCardReuse from "../ReuseComponents/ServicesCardReuse";

const AwsExpert = () => {
  const data1 = [
    {
      image: "/assets/redesign-2025/aws/1a.svg",
      width: 44,
      height: 44,
      description: [
        {
          text: "Seamlessly transition your data to the cloud with AWS Data Migration services. We ensure a secure, efficient, and minimal-downtime migration of your databases, applications, and workloads to AWS. Whether you’re moving from on-premises systems or upgrading to new cloud environments, our expert team handles every aspect, allowing you to unlock the full potential of the cloud with confidence.",
          withLink: false,
        },
      ],
    },
    {
      image: "/assets/redesign-2025/aws/2.svg",
      width: 40,
      height: 40,
      description: [
        {
          text: "Unlock the power of your data with our AWS Data Warehousing services. We help you consolidate, store, and analyze vast amounts of data in a scalable and secure environment. Whether you're looking to enhance business intelligence, streamline reporting, or drive data-driven decision-making, our AWS solutions provide the speed, flexibility, and reliability you need to turn your data into actionable insights.",
          withLink: false,
        },
      ],
    },
  ];
  const data2 = [
    {
      image: "/assets/redesign-2025/aws/3.svg",
      width: 44,
      height: 44,
      description: [
        {
          text: "Maximize the efficiency and performance of your cloud infrastructure with our AWS Cloud Services Optimization. We analyze and fine-tune your cloud resources to ensure you're getting the best value for your investment. By optimizing costs, improving scalability, and enhancing performance, we help you achieve a more streamlined and cost-effective cloud environment, allowing your business to operate at its full potential.",
          withLink: false,
        },
      ],
    },
  ];
  return (
    <section>
      <NewCard />
      <ServicesCardReuse
        withList={false}
        marginVariant={"marginPrimary"}
        subHeadingVariant={"primary"}
        headingVariant={"primary"}
        gridVariant="default"
        data={data1}
        borderVariant="primary"
      />
      <NewCard />
      <ServicesCardReuse
        withList={false}
        marginVariant={"marginPrimary"}
        subHeadingVariant={"primary"}
        headingVariant={"primary"}
        gridVariant="default"
        data={data2}
        showAdditionalCard={true}
      />
    </section>
  );
};

export default AwsExpert;
