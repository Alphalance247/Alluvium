import React from "react";
import HeroHeading from "components/Alluvium-Redesign-2025/ReuseComponents/heroHeading";
import ServicesCardReuse from "components/Alluvium-Redesign-2025/ReuseComponents/ServicesCardReuse";
import styles from "../../../styles/AlluviumRedesign2025/Atlassian-Services/atlassianservices.module.scss";

const Solutions = () => {
  const data1 = [
    {
      title: "ITSM Implementation",
      image: "/assets/redesign-2025/atlassianservices/consulting/itsm.svg",
      width: 129,
      height: 116,
      btnText: "Learn More",
      btnType: "redesign",
      btnSize: "xxlarge",
      description: [
        {
          text: "Atlassian Cloud offers high reliability, by having a solid infrastructure with a 99.9% uptime SLA. Atlassian’s global data centers ensure redundancy and disaster recovery capabilities. Regular maintenance, automatic updates, and continuous monitoring guarantee consistent performance for our customers. And Atlassian's dedicated support and incident response teams ensure swift resolution of any issues.",
          withLink: false,
        },
      ],
    },
    {
      title: "Agile at Scale",
      image: "/assets/redesign-2025/atlassianservices/consulting/agile.svg",
      width: 132,
      height: 112,
      btnText: "Book a Free Consult",
      btnType: "redesign",
      btnSize: "xxlarge",
      description: [
        {
          text: "Do you software teams lack alignment and coordination? Is it hard to track project progress and identify issues at an early stage? Transform your organization with our Agile at Scale solution. With our Agile at Scale solution we ensure the successful deployment of Agile at Scale methodologies, supporting your organization through its agile journey. ",
          withLink: false,
        },

        {
          text: "Our services include thorough training for end-users to ensure smooth adoption and effective utilization of Agile practices.",
          withLink: false,
        },
      ],
    },
    {
      title: "Atlassian Migration",
      image: "/assets/redesign-2025/atlassianservices/consulting/migration.svg",
      width: 142,
      height: 142,
      btnType: "redesign",
      btnSize: "xxlarge",
      btnText: "Learn More",
      description: [
        {
          text: "Are you looking to migrate to Atlassian Cloud? We offer a process-driven approach to seamlessly migrate existing data and configurations to the designated Cloud environment with zero data loss. From complex data models to integrating existing apps, we handle it all.",
          withLink: false,
        },
      ],
    },
    {
      title: "Atlassian Optimization",
      image:
        "/assets/redesign-2025/atlassianservices/consulting/optimization.svg",
      width: 117,
      height: 100,
      btnType: "redesign",
      btnSize: "xxlarge",
      btnText: "Book a Free Consult",
      description: [
        {
          text: "Is your Atlassian instance not performing optimally? Or do you notice you’re not making the most out of your Atlassian instances? Let us help you maximize the potential of your Atlassian setup.",
          withLink: false,
        },
        {
          text: "We provide specialized health checks and consultancy to ensure your business processes are fully supported, enabling you to utilize your Atlassian tools to their fullest potential.",
          withLink: false,
        },
      ],
    },
    {
      title: "DevOps Consultancy",
      image: "/assets/redesign-2025/atlassianservices/consulting/Devops.svg",
      width: 124,
      height: 60,
      btnType: "redesign",
      btnSize: "xxlarge",
      btnText: "Book Your Free DevOps Consult",
      description: [
        {
          text: "Are you looking to accelerate your development and operations processes? Our team of DevOps specialists is dedicated to helping your organization achieve faster delivery, improved collaboration, and enhanced efficiency.",
          withLink: false,
        },
        {
          text: "We help development and operations teams to foster a culture of continuous improvement and innovation, providing customized solutions tailored to your specific needs. Comprehensive toolchain integration and end-user training are included to ensure successful adoption and utilization of DevOps practices.",
          withLink: false,
        },
      ],
    },
  ];

  return (
    <section
      className={`${styles.choose__alluvium}`}
      style={{ background: "white" }}
    >
      <div className={styles.choose}>
        <div className={styles.choose__1}>
          <HeroHeading
            withParagragh={true}
            heading={"Tailored Atlassian Solutions for Every Business Need"}
            subhead={
              "Lorem ipsum dolor sit amet consectetur. Eget porta porta ipsum vel sed. Dictum in diam sit sapien iaculis elit."
            }
            variant={"secondary"}
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
            gridVariant="secondary"
            isBtn={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
