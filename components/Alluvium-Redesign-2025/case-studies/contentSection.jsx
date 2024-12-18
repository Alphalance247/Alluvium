import styles from "../../../styles/AlluviumRedesign2025/CaseStudy/content-section.module.scss";
import Image from "next/image";

const ContentSection = () => {
  const data = [
    {
      head: "Industry",
      subhead: "Agriculture",
    },
    {
      head: "Tools USED",
      subhead: "Jira, Jira Service Management",
    },
    {
      head: "Service Provided",
      subhead: "Data Migration, Cloud Instance Training",
    },
    {
      head: "Duration",
      subhead: "5 months",
    },
  ];
  return (
    <section className={styles.content__section}>
      <div className={styles.highlight}>
        <div className={styles.industry__encap}>
          {data.map((item, i) => {
            return (
              <div key={i} className={styles.industry}>
                <p className={styles.heading}>{item?.head}</p>
                <p className={styles.subhead}>{item?.subhead}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.share}>
          <p>SHARE THIS STORY</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.subcontent}>
          <h4>The Situation</h4>
          <p>
            Passionate about growth and excellence, our client and their small
            team of more than 3.000 people across the globe, focus on creating
            ways for their customers to thrive in the agri-food industry. The
            organization is headquartered in the UK and they offer their
            customers data services for the agri-food industry.
          </p>
        </div>

        <div className={styles.subcontent}>
          <h4>The Situation</h4>
          <p>
            Passionate about growth and excellence, our client and their small
            team of more than 3.000 people across the globe, focus on creating
            ways for their customers to thrive in the agri-food industry. The
            organization is headquartered in the UK and they offer their
            customers data services for the agri-food industry.
          </p>
        </div>

        <div className={styles.subcontent__img}>
          <Image
            src="/assets/redesign-2025/case-studies/furistic.png"
            width={686}
            height={425}
            alt="furistic"
          />
        </div>

        <div className={styles.subcontent}>
          <h4>The Situation</h4>
          <p>Our client needed us to come in and assess the situation by:</p>

          <div>
            <ul>
              <li>Presenting a cost-efficient solution</li>
              <li>Deploying and training their staff</li>
              <li>
                Delivering a secure migration to simplify the internal processes
              </li>
            </ul>
          </div>

          <p>
            We presented two options to our client to choose from. The first
            option was a Server to DC migration and the second was a Server to
            Cloud migration.
          </p>

          <p>
            The second option Server to Cloud was chosen by us and approved by
            the client. Our solution needed to meet their specific requirements
            - they wanted a SaaS solution that was cost-efficient and easy to
            implement. In addition to this, it was the company’s policy to move
            to Cloud.
          </p>
        </div>

        <div className={styles.subcontent}>
          <h4>The Solution</h4>

          <div>
            <ul>
              <li>
                Our client saved costs by having in-house administrators who
                were trained by us to manage their tools and reduced the
                involvement of third-party’s network.
              </li>
              <li>
                A Cloud instance was set up a month early before their tendency
                agreement with the third party ended.
              </li>
              <li>
                Jira Service Management was chosen as their tickets tracking
                tool.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
