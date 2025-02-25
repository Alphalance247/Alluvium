import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/accelerating-incident/RegistrationSection.module.scss";
import FeatureData from "../../Alluvium-Redesign-2025/FeatureData";

const RegistrationSection = () => {
  const featureData = [
    {
      icon: "/assets/events/jira-software-class/1.svg",
      heading: "See AI in Action",
      subhead:
        "Witness  demonstrations of AI-powered incident management solutions.",
      width: "50%",
    },
    {
      icon: "/assets/events/jira-software-class/4.svg",
      heading: "Interactive Hands-on Sessions",
      subhead:
        "Engage in real-world exercises to apply AI-driven incident management techniques.",
      width: "70%",
    },
    {
      icon: "/assets/events/jira-software-class/3.svg",
      heading: "Networking Opportunities",
      subhead:
        "Connect with professionals, industry leaders, and AI innovators to exchange ideas.",
      width: "50%",
    },
    {
      icon: "/assets/events/jira-software-class/2.svg",
      heading: "Live Q&A with Experts",
      subhead: "Ask questions and get tailored advice from Jira experts.",
      width: "70%",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <main>
        <div className={styles.house}>
          <h2> Join Us & Discover AI-Driven Incident Management</h2>
          <p>
            Register now for exclusive insights into AI-powered incident
            management with hands-on sessions, live demos, and expert
            discussions.
          </p>
        </div>
        <FeatureData featureData={featureData} />
      </main>
    </div>
  );
};

export default RegistrationSection;
