import styles from "../../../styles/AlluviumRedesign2025/AboutUs/about-us.module.scss";
import HeroHeading from "../ReuseComponents/heroHeading";

const HowItStarted = () => {
  const paragraph = [
    "It was the summer of 2016, Taiwo, formerly of the Big Four, had been brought into a large UK Bank digital transformation programme to consolidate their project management tool estate into one consolidated Atlassian toolset, was joined by Wale, also formerly of the Big Four, to establish an Agile Way of Working. The synergy was instant and long lasting.",
    "The tools supported the controls, deployment and scaling of the new way of working while the methodology utilised and maximised the Atlassian toolset.",
    "We had to consolidate data and configuration from several third-party application, couple of Jira instances to a single new Jira instance. Same for documentation storage and Devops tools. All the while building, integrating to, and reporting from a new data lake.",
    "After the success of that programme, we went to repeat a similar delivery for one of UK's biggest telecom providers. We have since delivered some of the largest Atlassian tools Consolidation and accompanying Administration, Engineering, Integration, and long-term Support of the Atlassian products for all ways of working.",
    "We routinely put back into the customers' pockets, 15 – 45% of their annual license costs, by consolidating and scaling their use of Jira, Confluence, Bitbucket and other Atlassian products, from multiple Atlassian and third-party applications.",
  ];

  return (
    <section className={styles.our__story}>
      <div className={styles.story}>
        <div className={styles.story__heading}>
          <HeroHeading
            heading="How it All started"
            withLink={true}
            variant="secondary"
            subsec={"OUR STORY"}
          />
        </div>

        <div>
          {paragraph.map((items, i) => {
            return (
              <p key={i} className={styles.story__update}>
                {" "}
                {items}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItStarted;
