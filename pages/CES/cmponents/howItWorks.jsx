import styles from "styles/AlluviumRedesign2025/ces/ces.module.scss";
import Image from "next/legacy/image";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Detect",
      description:
        "Service signals are identified across enterprise systems before escalation.",
      icon: "/assets/ces/1.png",
    },
    {
      id: 2,
      title: "Decide",
      description:
        "AI agents determine the best resolution path using enterprise context",
      icon: "/assets/ces/2.png",
    },
    {
      id: 3,
      title: "Act",
      description:
        "Actions are executed automatically across Jira Service Management and connected tools.",
      icon: "/assets/ces/3.png",
    },
  ];

  return (
    <section className={styles.howItWorksContainer}>
      <h2 className={styles.howItWorksTitle}>
        How Autonomous Service Actually Works
      </h2>
      <div className={styles.cardsContainer}>
        {steps.map((step) => (
          <div key={step.id} className={styles.card}>
            <div className={styles.cardIcon}>
              <Image src={step.icon} alt={step.title} width={65} height={65} />
            </div>
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
