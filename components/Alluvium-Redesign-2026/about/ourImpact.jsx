import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/about/our-impact.module.scss";
import Image from "next/image";

const stats = [
  { value: "80+", label: "Projects Completed", color: "cyan" },
  { value: "80+", label: "Happy Clients", color: "amber" },
  { value: "100%", label: "Success Rate", color: "dark" },
];

const ImpactStory = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.mainContainer}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>Our Impact</div>
          <h2>Alluvium by the Numbers</h2>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={`${styles.statCard} ${styles[stat.color]}`}>
              <span className={styles.number}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Story Block */}
        <div className={styles.storyBlock}>
          <div className={styles.storyContent}>
            <h3>How it All started</h3>
            <p>
              It was the summer of 2016, Taiwo, formerly of the Big Four, had
              been brought into a large UK Bank digital transformation programme
              to consolidate their project management tool estate into one
              consolidated Atlassian toolset, was joined by Wale, also formerly
              of the Big Four, to establish an Agile Way of Working. The synergy
              was instant and long lasting.
              <br />
              <br />
              The tools supported the controls, deployment and scaling of the
              new way of working while the methodology utilised and maximised
              the Atlassian toolset.
              <br />
              <br />
              We had to consolidate data and configuration from several
              third-party application, couple of Jira instances to a single new
              Jira instance. Same for documentation storage and Devops tools.
              All the while building, integrating to, and reporting from a new
              data lake.
              <br />
              <br />
              After the success of that programme, we went to repeat a similar
              delivery for one of UK's biggest telecom providers. We have since
              delivered some of the largest Atlassian tools Consolidation and
              accompanying Administration, Engineering, Integration, and
              long-term Support of the Atlassian products for all ways of
              working.
              <br />
              <br />
              We routinely put back into the customers' pockets, 15 – 45% of
              their annual license costs, by consolidating and scaling their use
              of Jira, Confluence, Bitbucket and other Atlassian products, from
              multiple Atlassian and third-party applications.
            </p>
          </div>

          {/* Author Footer */}
          <div className={styles.author}>
            <Image
              src="/assets/Alluvium-Redesign-2026/about/taiwo.svg"
              width={70}
              height={70}
              alt="Taiwo Ojo"
            />
            <div className={styles.info}>
              <span className={styles.name}>Taiwo Ojo</span>
              <span className={styles.role}>CEO & Technical Lead</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStory;
