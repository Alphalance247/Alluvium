import Image from "next/image";
import React from "react";
import styles from "styles/AlluviumRedesign2025/swp/swp.module.scss";

const CustomerStory = () => {
  const planItems = [
    {
      id: 1,
      title: "Clarify what good looks like",
      description:
        "In our contributions and conversations, we will help you see:",
      image: "/assets/SWP/1.svg",
      bullets: [
        {
          bulletItem: "What a skills based operating model really looks like.",
        },
        {
          bulletItem:
            "How roles, skills and work connect in a way leaders can understand.",
        },
        {
          bulletItem:
            "What governance and ownership are needed across HR, Finance and the business.",
        },
      ],
    },
    {
      id: 2,
      title: "Understand the key building blocks",
      image: "/assets/SWP/2.svg",
      description:
        "You'll learn the essential components you need to get in place:",
      bullets: [
        {
          bulletItem:
            " – how to build a reliable, skills based view of your workforce.",
          subBullet: "Data & architecture",
        },
        {
          bulletItem: " – who owns what, and how decisions get made.",
          subBullet: "Governance & decision rights",
        },
        {
          bulletItem:
            " – how skills data fits into planning, budgeting and transformation processes.",
          subBullet: "Workflows & tools",
        },
      ],
    },
    {
      id: 3,
      title: "Leave with practical next steps",
      image: "/assets/SWP/3.svg",
      description: "You'll walk away with:",
      bullets: [
        {
          bulletItem:
            "A simple language to explain skills based Strategic Workforce Planning to your stakeholders.",
        },
      ],
    },
  ];

  return (
    <section className={styles.customerStorySection}>
      <div className={styles.customerStoryContainer}>
        <div></div>
        <div>
          <div className={styles.customerStoryHeader}>
            <h2 className={styles.customerStoryMainHeading}>
              The plan: how we'll help you move forward
            </h2>
            <p className={styles.customerStorySubtitle}>
              At Strategic Workforce Planning Summit London 2026, Alluvium will
              give you a clear, practical path.
            </p>
          </div>

          <div className={styles.planItemsGrid}>
            {planItems.map((item) => (
              <div key={item.id} className={styles.planItemCard}>
                <div className={styles.planItemIcon}>
                  <Image
                    width={56}
                    height={56}
                    src={item?.image}
                    alt={item?.title}
                  />
                </div>
                <h3 className={styles.planItemTitle}>{item.title}</h3>
                <p className={styles.planItemDescription}>{item.description}</p>
                <ul className={styles.planItemBullets}>
                  {item.bullets.map((bullet, index) => (
                    <li key={index} className={styles.planItemBullet}>
                      <span>{bullet?.subBullet}</span> {bullet?.bulletItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStory;
