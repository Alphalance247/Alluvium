import styles from "../../../styles/atlassian-services-style/aws-services.module.scss";
import ServicesCardReuse from "../ReuseComponents/ServicesCardReuse";
import HeroHeading from "../ReuseComponents/heroHeading";

const AwsTraining = () => {
  const data = [
    {
      title: "Fundamentals & Essential",
      width: 54,
      height: 54,
      description: [
        {
          text: "Build a strong foundation with our AWS Fundamentals & Essentials training. Perfect for beginners, this course covers the core concepts of cloud computing and AWS services, providing you with the essential knowledge needed to start your cloud journey.",
        },
      ],
    },
    {
      title: "Data analytics & Machine learning",
      width: 54,
      height: 54,
      description: [
        {
          text: "Unlock the power of your data with our Data Analytics & Machine Learning training. Learn how to leverage AWS tools and services to collect, process, analyze, and visualize data, as well as build and deploy machine learning models",
        },
      ],
    },
    {
      title: "Security & Compliance",
      width: 54,
      height: 54,
      description: [
        {
          text: "Ensure your cloud environment is secure with our AWS Security & Compliance training. This course covers best practices for securing your AWS infrastructure, managing compliance requirements, and protecting your data against evolving threats.",
        },
      ],
    },

    {
      title: "Advanced Cloud Architecture",
      width: 54,
      height: 54,
      description: [
        {
          text: "Take your skills to the next level with our Advanced Cloud Architecture training. Designed for experienced professionals, this course delves deep into complex AWS architectures, teaching you how to design, implement, and manage scalable, secure, and highly available cloud solutions",
        },
      ],
    },
    {
      title: "DevOps Practices",
      width: 54,
      height: 54,
      description: [
        {
          text: "Streamline your development process with our AWS DevOps Practices training. This course teaches you how to automate workflows, integrate continuous deployment, and manage infrastructure as code, ensuring your team can deliver high-quality software faster and more efficiently.",
        },
      ],
    },
  ];

  return (
    <section className={styles.aws__training}>
      <div className={styles.training}>
        <div className={styles.training__1}>
          <HeroHeading
            withParagragh={true}
            heading={"AWS Training & Certification"}
            subhead={
              "AWS Training and Certification provides a comprehensive learning path for mastering Amazon Web Services (AWS) and gaining recognition for your cloud expertise. Whether you’re new to AWS or an experienced cloud professional, AWS training helps you build skills to effectively manage AWS services and solutions."
            }
            variant={"secondary"}
            variantMargingFix="second"
            withLink={false}
          />
        </div>

        <div style={{ textAlign: "start" }}>
          <ServicesCardReuse
            withList={false}
            marginVariant={"marginTertiary"}
            subHeadingVariant={"primary"}
            headingVariant={"primary"}
            gridVariant="secondary"
            data={data}
            imageAvailable={false}
            borderVariant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default AwsTraining;
