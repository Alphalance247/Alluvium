import Button from "components/atlassian-service-reuse/Button";
import styles from "../../styles/cloud-migration-case-study/migartionmain.module.scss";

const ContentSection = () => {
  const data = [
    {
      heading: "INDUSTRY",
      subHead: ["Higher Education"],
    },
    {
      heading: "DEPARTMENT",
      subHead: ["Higher Education"],
    },
    {
      heading: "DEPARTMENT",
      subHead: ["Higher Education"],
    },
  ];
  return (
    <section className={`container mx-auto ${styles.case__study__feedbacks}`}>
      <div className={styles.summary__section}>
        <p className={styles.summary__head}>Executive Summary</p>

        <div className={styles.summary}>
          <p className={styles.summary__p}>
            The Total Economic Impact (TEI) of Atlassian Open DevOps study,
            commissioned by Atlassian and Amazon Web Services and conducted by
            Forrester Consulting, provides an in-depth analysis of the return on
            investment (ROI), benefits, costs, and flexibility of using
            Atlassian’s Open DevOps tools. Below is a detailed summary of the
            report divided into sections.
          </p>
          <div className=" d-flex flex-column gap-3">
            {data.map((el, i) => {
              return (
                <div key={i}>
                  <p className={styles.heading__styles}>{el?.heading}</p>
                  <p className={`${styles.subHeading__styles}`} key={i}>
                    {el?.subHead}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <Button size="large">Contact Our Sales Team</Button>
          </div>
        </div>
      </div>

      <div className={`d-flex flex-column ${styles.content__display}`}>
        <div>
          <p className={styles.paragraph__content}>
            The TEI study aims to provide a framework for evaluating the
            financial impact of Open DevOps, which centralizes tools and
            workflows for software development teams. Using Jira Software as the
            core tool, organizations experienced a substantial ROI of 358%, with
            benefits of $35.34 million over three years versus total costs of
            $7.72 million. Furthermore, a payback period of just 12 months was
            observed.
            <br />
            <br />
            Quantified benefits include a 20% increase in developer
            productivity, contributing $16 million, and a 10% improvement in IT
            productivity, adding $9.7 million. Additionally, software licensing
            costs were reduced by 30%, saving $8.7 million, while improvements
            in the software development lifecycle (SDLC) increased deployment
            frequencies, improved code quality, and contributed an additional
            $918,000.
          </p>
        </div>

        <div className={styles.quote__section}>
          <p className={styles.quote__words}>
            “[Jira Software] is now much more open [and capable of] talking to
            other systems. This is a fundamental change. [Using Open DevOps],
            you can [integrate Jira Software] with other tools, and that’s
            helped us a lot. [We support] developer choice. [I] don’t want to
            tell [a developer] they must use a tool if it’s going to slow them
            down.”
          </p>
          <span className={styles.quote__name}>
            — Senior manager, IT, data analytics
          </span>
        </div>

        <div>
          <h5 className={styles.rest__heading}>Customer Journey</h5>
          <p className={styles.paragraph__content}>
            Organizations previously faced significant challenges in achieving
            seamless DevOps workflows, with disconnected toolchains and
            excessive tool proliferation complicating the development process.
            Teams were often siloed with low levels of collaboration and
            visibility, and IT teams faced significant bottlenecks due to high
            maintenance requirements.
            <br />
            <br />
            This fragmentation resulted in poor visibility, negatively impacting
            project tracking and issue resolution. To address these issues,
            organizations invested in Open DevOps with objectives to standardize
            processes and tools across teams, improve delivery speeds, and
            support the adoption of agile and DevOps practices.
            <br />
            <br />
            Additionally, companies sought to balance standardization with
            flexibility, allowing customization to meet diverse team needs.
            Forrester constructed a composite organization based on the
            interviews, depicting a company with 10,000 employees (4,000 of whom
            are in tech roles), which experiences an annual revenue growth of
            10%.
          </p>
        </div>

        <div>
          <h5 className={styles.rest__heading}>Analysis of Benefits</h5>
          <p className={styles.paragraph__content}>
            Organizations previously faced significant challenges in achieving
            seamless DevOps workflows, with disconnected toolchains and
            excessive tool proliferation complicating the development process.
            Teams were often siloed with low levels of collaboration and
            visibility, and IT teams faced significant bottlenecks due to high
            maintenance requirements.
            <br />
            <br />
            This fragmentation resulted in poor visibility, negatively impacting
            project tracking and issue resolution. To address these issues,
            organizations invested in Open DevOps with objectives to standardize
            processes and tools across teams, improve delivery speeds, and
            support the adoption of agile and DevOps practices.
            <br />
            <br />
            Additionally, companies sought to balance standardization with
            flexibility, allowing customization to meet diverse team needs.
            Forrester constructed a composite organization based on the
            interviews, depicting a company with 10,000 employees (4,000 of whom
            are in tech roles), which experiences an annual revenue growth of
            10%.
          </p>
        </div>

        <div>
          <h5 className={styles.rest__heading}>Unquantified Benefits</h5>
          <p className={styles.paragraph__content}>
            Organizations previously faced significant challenges in achieving
            seamless DevOps workflows, with disconnected toolchains and
            excessive tool proliferation complicating the development process.
            Teams were often siloed with low levels of collaboration and
            visibility, and IT teams faced significant bottlenecks due to high
            maintenance requirements.
            <br />
            <br />
            This fragmentation resulted in poor visibility, negatively impacting
            project tracking and issue resolution. To address these issues,
            organizations invested in Open DevOps with objectives to standardize
            processes and tools across teams, improve delivery speeds, and
            support the adoption of agile and DevOps practices.
            <br />
            <br />
            Additionally, companies sought to balance standardization with
            flexibility, allowing customization to meet diverse team needs.
            Forrester constructed a composite organization based on the
            interviews, depicting a company with 10,000 employees (4,000 of whom
            are in tech roles), which experiences an annual revenue growth of
            10%.
          </p>
        </div>
        <div>
          <h5 className={styles.rest__heading}>Analysis of Costs</h5>
          <p className={styles.paragraph__content}>
            Organizations previously faced significant challenges in achieving
            seamless DevOps workflows, with disconnected toolchains and
            excessive tool proliferation complicating the development process.
            Teams were often siloed with low levels of collaboration and
            visibility, and IT teams faced significant bottlenecks due to high
            maintenance requirements.
            <br />
            <br />
            This fragmentation resulted in poor visibility, negatively impacting
            project tracking and issue resolution. To address these issues,
            organizations invested in Open DevOps with objectives to standardize
            processes and tools across teams, improve delivery speeds, and
            support the adoption of agile and DevOps practices.
            <br />
            <br />
            Additionally, companies sought to balance standardization with
            flexibility, allowing customization to meet diverse team needs.
            Forrester constructed a composite organization based on the
            interviews, depicting a company with 10,000 employees (4,000 of whom
            are in tech roles), which experiences an annual revenue growth of
            10%.
          </p>
        </div>
        <div>
          <h5 className={styles.rest__heading}>
            Financial Summary and TEI Methodology
          </h5>
          <p className={styles.paragraph__content}>
            Organizations previously faced significant challenges in achieving
            seamless DevOps workflows, with disconnected toolchains and
            excessive tool proliferation complicating the development process.
            Teams were often siloed with low levels of collaboration and
            visibility, and IT teams faced significant bottlenecks due to high
            maintenance requirements.
            <br />
            <br />
            This fragmentation resulted in poor visibility, negatively impacting
            project tracking and issue resolution. To address these issues,
            organizations invested in Open DevOps with objectives to standardize
            processes and tools across teams, improve delivery speeds, and
            support the adoption of agile and DevOps practices.
            <br />
            <br />
            Additionally, companies sought to balance standardization with
            flexibility, allowing customization to meet diverse team needs.
            Forrester constructed a composite organization based on the
            interviews, depicting a company with 10,000 employees (4,000 of whom
            are in tech roles), which experiences an annual revenue growth of
            10%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
