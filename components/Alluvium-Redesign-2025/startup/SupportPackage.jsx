import React from "react";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/startup/SupportPackage.module.scss";

const SupportPackage = () => {
  const list = [
    "You dont have a licensed Atlassian cloud site yet",
    "You must be VC-funded or associated with a partner accelerator",
    "You have not raised more than US$10 million in external funding",
    "If you have questions on any of the criteria, please let us know",
  ];
  return (
    <div className={styles.support__packages}>
      <div className={styles.support__encap}>
        <div className={styles.heading__start}>
          <HeroHeading
            heading={"Exclusive Startup Support Package"}
            subhead={`Unlock your startup's potential with our specially designed support package. We're offering $31,000 in Atlassian AI licenses and dedicated support to fuel your growth and innovation. This comprehensive package includes tools and resources tailored to meet the unique challenges faced by startups, helping you streamline your operations and accelerate your journey towards success`}
            withLink={false}
          />
        </div>

        <div>
          <ul className={styles.list__package}>
            {list.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportPackage;
