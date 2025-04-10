import { data } from "browserslist";
import styles from "../../../styles/atlassian-services-style/aws-services.module.scss";
import Image from "next/image";

const AwsCards = () => {
  const data = [
    {
      heading: "Hybrid Solution",
      paragraph: [
        "Our Hybrid Solution seamlessly integrates your on-premises infrastructure with the power and scalability of AWS cloud services, providing a flexible and balanced approach to cloud adoption. This solution is ideal for businesses that require a gradual transition to the cloud or need to maintain certain workloads on-premises due to regulatory, security, or performance considerations.",
        "By combining the best of both worlds, our Hybrid Solution ensures that your business can scale efficiently, optimize costs, and maintain high availability, all while securely managing data and applications across environments. Experience a smoother, more controlled cloud journey with our tailored hybrid approach",
      ],
      img: "/assets/redesign-2025/aws/cloud.png",
    },
    {
      heading: "Full Cloud Solution",
      paragraph: [
        "Our Full Cloud Solution is designed to help your business fully embrace the power of AWS, enabling you to migrate all your infrastructure, applications, and data to the cloud. By moving entirely to the cloud, you gain unmatched scalability, flexibility, and cost-efficiency, while eliminating the limitations of traditional on-premises systems.",
        "Our solution covers every aspect of your cloud journey, from planning and migration to ongoing management and optimization, ensuring a smooth transition and maximizing the benefits of cloud technology. With our Full Cloud Solution, your business can innovate faster, respond to market changes more effectively, and focus on what truly matters—growth and success.",
      ],
      img: "/assets/redesign-2025/aws/cloud2.png",
    },
    {
      heading: "Apps & Services Deployment",
      paragraph: [
        "Our App & Services Deployment solution streamlines the process of launching your applications and services on AWS, ensuring they are set up for optimal performance, security, and scalability. We handle everything from initial setup and configuration to continuous integration and deployment, allowing your development teams to focus on innovation rather than infrastructure.",
        "Whether you're deploying a single application or a complex multi-service architecture, our solution ensures a smooth, efficient rollout with minimal downtime. Experience faster time-to-market, enhanced reliability, and simplified management with our expert deployment services on AWS.",
      ],
      img: "/assets/redesign-2025/aws/cloud3.png",
    },
  ];
  return (
    <div className={styles.card__encap}>
      {data.map((item, i) => {
        return (
          <div
            className={`${styles.awscards} ${
              data.length - 2 === i ? styles.reverse : null
            }`}
            key={i}
          >
            <div className={styles.card__content}>
              <h5>{item?.heading}</h5>
              {item?.paragraph.map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>

            <div className={styles.imageContainer}>
              <Image src={item?.img} width={550} height={534} alt="cloud" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AwsCards;
