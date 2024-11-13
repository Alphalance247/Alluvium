import { useState } from "react";
import styles from "../../styles/Atlassian-Case-Study/SuccessStories.module.scss";

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(0);

  const data = [
    {
      btn: "Yale School of Management",
    },
    {
      btn: "Twitter",
    },
    {
      btn: "DHI Group",
    },
    {
      btn: "CBS",
    },
    {
      btn: "The Telegraph",
    },
  ];

  const rating = [
    {
      rate: "50%",
      comment: "Reduction in client services team’s time to resolution",
    },

    {
      rate: "66%",
      comment: "Reduction in average response time for student requests",
    },
    {
      rate: "4.8",
      comment: "satisfaction rate from students (out of 5)",
    },
  ];
  const twitterRatings = [
    {
      rate: "80%",
      comment: "decrease in support email volume",
    },

    {
      rate: "100+",
      comment: "teams using Jira Service Desk to manage their requests",
    },
    {
      rate: "80%",
      comment: "employee adoption rate",
    },
  ];

  const yaleSoftware = [
    {
      heading: "INDUSTRY",
      subHead: ["Higher Education"],
      contentHeading: "The challenge",

      content: [
        "As the Yale School of Management (SOM) set its sights on becoming a global powerhouse, the IT team needed a more robust solution to better support the school’s goals. What’s more, they needed to keep up with the high service expectations of their customers – digital native students accustomed to the modern world of on-demand anything",
        "Before implementing the Atlassian solution, Yale SOM was working with a disjointed set of tools: BMC Footprints and email for Help Desk requests, Basecamp or managing development projects, and “a hodgepodge of tools” for documentation and collaboration. As a result, they lacked transparency",
        "and visibility into tasks, statuses, and key metrics and had no knowledge base for internal or external communities",
        "In order to better serve the school and its students, the SOM IT department decided to standardize on Atlassian to achieve greater efficiency, collaboration, and productivity.",
      ],
    },
    {
      heading: "LOCATION",
      subHead: ["New Haven, CT, USA"],
      contentHeading: "The challenge",

      content: [
        "As the Yale School of Management (SOM) set its sights on becoming a global powerhouse, the IT team needed a more robust solution to better support the school’s goals. What’s more, they needed to keep up with the high service expectations of their customers – digital native students accustomed to the modern world of on-demand anything",
        "Before implementing the Atlassian solution, Yale SOM was working with a disjointed set of tools: BMC Footprints and email for Help Desk requests, Basecamp or managing development projects, and “a hodgepodge of tools” for documentation and collaboration. As a result, they lacked transparency",
        "and visibility into tasks, statuses, and key metrics and had no knowledge base for internal or external communities",
        "In order to better serve the school and its students, the SOM IT department decided to standardize on Atlassian to achieve greater efficiency, collaboration, and productivity.",
      ],
    },
    {
      heading: "NUMBER OF USERS",
      subHead: ["31 IT Employeess"],

      content: [],
    },
    {
      heading: "PRODUCTS",
      subHead: ["Jira Service Desk", "Jira Software", "Confluence"],
      content: [],
    },
    {
      heading: "INTEGRATIONS",
      subHead: ["Slack", "Zoom"],
      content: [],
    },
    {
      heading: "MARKETPLACE APPS",
      subHead: [
        "Insight - Asset Management",
        "Automation for Jira",
        "Gliffy Diagrams for Confluence",
      ],
      content: [],
    },
  ];

  const yaleFeedback = [
    {
      heading: "INDUSTRY",
      subHead: ["Higher Education"],
    },
    {
      heading: "LOCATION",
      subHead: ["New Haven, CT, USA"],
    },
    {
      heading: "NUMBER OF USERS",
      subHead: ["31 IT Employeess"],
    },
    {
      heading: "PRODUCTS",
      subHead: ["Jira Service Desk", "Jira Software", "Confluence"],
    },
    {
      heading: "INTEGRATIONS",
      subHead: ["Slack", "Zoom"],
    },
    {
      heading: "MARKETPLACE APPS",
      subHead: [
        "Insight - Asset Management",
        "Automation for Jira",
        "Gliffy Diagrams for Confluence",
      ],
    },
  ];

  const twitter = [
    {
      heading: "INDUSTRY",
      subHead: ["Technology"],
    },
    {
      heading: "LOCATION",
      subHead: ["San Francisco, California, USA"],
    },
    {
      heading: "NUMBER OF USERS",
      subHead: ["31 IT Employeess"],
    },
    {
      heading: "PRODUCTS",
      subHead: ["Jira Service Desk", "Jira Software", "Confluence"],
    },
  ];

  const handleClick = (i) => {
    setActiveTab(i);
  };
  return (
    <section className={`container-fluid px-0 ${styles.success__stories}`}>
      <div className={`${styles.tab}`}>
        <div>
          <p className={`${styles.success}`}>
            Real Success Stories Powered by Atlassian
          </p>
        </div>

        <div>
          <div className={`${styles.btn__all}`}>
            {data.map((el, i) => {
              return (
                <button
                  className={`${styles.btns} ${
                    activeTab === i ? styles.active : null
                  }`}
                  onClick={() => handleClick(i)}
                  key={i}
                >
                  {el.btn}
                </button>
              );
            })}
          </div>
          <div className={styles.feedback__view}>
            {activeTab === 0 && (
              <div className={styles.body__content__all}>
                <p className={`${styles.expectations}`}>
                  Meeting student expectations by standardizing on a single
                  platform
                </p>
                <div className={styles.body__content}>
                  <div>
                    {yaleSoftware.map((el) => {
                      return (
                        <div style={{ marginBottom: "2.5rem" }}>
                          <p className={styles.heading__styles}>{el.heading}</p>

                          {el.subHead.map((item, i) => {
                            return (
                              <p className={`${styles.subHeading__styles}`}>
                                {item}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <div>
                      <p className={styles.heading__styles__1}>The challenge</p>
                      <p className={`${styles.subHeading__styles__1}`}>
                        As the Yale School of Management (SOM) set its sights on
                        becoming a global powerhouse, the IT team needed a more
                        robust solution to better support the school’s goals.
                        What’s more, they needed to keep up with the high
                        service expectations of their customers – digital native
                        students accustomed to the modern world of on demand
                        anything
                        <br />
                        <br />
                        Before implementing the Atlassian solution, Yale SOM was
                        working with a disjointed set of tools: BMC Footprints
                        and email for Help Desk requests, Basecamp for managing
                        development projects, and “a hodgepodge of tools” for
                        documentation and collaboration. As a result, they
                        lacked transparency and visibility into tasks, statuses,
                        and key metrics and had no knowledge base for internal
                        or external communities.
                        <br />
                        <br />
                        In order to better serve the school and its students,
                        the SOM IT department decided to standardize on
                        Atlassian to achieve greater efficiency, collaboration,
                        and productivity
                      </p>
                    </div>

                    <div>
                      <p className={styles.heading__styles__1}>The solution</p>
                      <p className={`${styles.subHeading__styles__1}`}>
                        The IT team at Yale SOM leveraged multiple Atlassian
                        solutions to meet all of their needs. Workflows and
                        integrations between Jira Software, Jira Service Desk,
                        and Slack allow the DevOps team to support the full
                        development lifecycle. The client services team uses
                        Jira Service Desk to track service requests and reduce
                        time to resolution. And Confluence serves as a knowledge
                        base for the entire IT department as well as a
                        self-service catalog for the external community.
                      </p>

                      <p className={styles.quote}>
                        [Atlassian’s] tools have immensely improved our service.
                        Now we can’t do without them because our community is
                        used to that level of service.
                        <br />
                        <br />
                        <span className={styles.quote__span}>PAUL MCNALLY</span>
                      </p>

                      <p className={styles.improvement__quote}>
                        <span>Improved customer satisfaction:</span> Through the
                        ability to better track service requests through Jira
                        Service Desk, the client services team has reduced time
                        to resolution by 57% and achieved a 4.8 (out of 5)
                        satisfaction rate from students.
                      </p>

                      <p className={styles.improvement__quote}>
                        <span>
                          Greater transparency into metrics and reporting:
                        </span>{" "}
                        With a more intuitive solution and easy-to-use
                        reporting, the IT team can now track key IT metrics and
                        gain insights into issues to improve service.
                      </p>

                      <p className={styles.improvement__quote}>
                        <span>Enhancing service beyond IT: </span>
                        Non-technical teams, such as Communications, Business
                        Operations, and Facilities, have adopted Atlassian
                        solutions to drive efficiency and significantly reduce
                        meetings and emails. For example, the Communications
                        team uses Jira Service Desk to manage requests for
                        marketing materials, Confluence for project
                        documentation, and Jira Software for managing video
                        production.
                      </p>

                      <div className={styles.rating}>
                        {rating.map((el, i) => {
                          return (
                            <div key={i} className={styles.rating__comment}>
                              <p className={styles.rate}>{el?.rate}</p>
                              <p className={styles.comment}>{el?.comment}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className={styles.body__content__all}>
                <p className={`${styles.expectations}`}>
                  Satisfying high demand through self-service with Jira Service
                  Desk
                </p>
                <div className={styles.body__content}>
                  <div>
                    {twitter.map((el) => {
                      return (
                        <div style={{ marginBottom: "2.5rem" }}>
                          <p className={styles.heading__styles}>{el.heading}</p>

                          {el.subHead.map((item, i) => {
                            return (
                              <p className={`${styles.subHeading__styles}`}>
                                {item}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <div>
                      <p className={styles.heading__styles__1}>The challenge</p>
                      <p className={`${styles.subHeading__styles__1}`}>
                        Though it may be hard to remember, there was a time when
                        Twitter was a considerably smaller company than it is
                        now. As the company grew from 900 to 3,600 employees,
                        the small IT team was faced with approximately 2,000
                        tickets per agent per year. They were not equipped to
                        handle this level of growth with its current processes.
                        <br />
                        At the time, they were using email for internal service
                        requests with no easy way to track, manage, or route
                        requests to the appropriate agent. They knew they needed
                        a more robust solution to support the company’s growth
                        and deliver exceptional service
                      </p>
                    </div>

                    <div>
                      <p className={styles.heading__styles__1}>The solution</p>
                      <p className={`${styles.subHeading__styles__1}`}>
                        Twitter’s IT team chose Jira Service Desk for an
                        intuitive, scalable customer portal solution. By also
                        integrating Confluence with Jira Service Desk, they
                        created a self-service knowledge base for employees to
                        find the answers on their own. The adoption of these
                        solutions was quick, and business teams at Twitter soon
                        recognized the benefits and began implementing Jira
                        Service Desk to solve their challenges.
                      </p>

                      <p className={styles.quote}>
                        Jira Service Desk can really increase your team’s
                        efficiency and easily scale your ticketing to meet your
                        business needs.
                        <br />
                        <br />
                        <span className={styles.quote__span}>
                          ALEX STILLINGS, IT MANAGER
                        </span>
                      </p>

                      <p className={styles.improvement__quote}>
                        <span> An intuitive, scalable customer portal: </span>
                        Twitter employees loved the simple, easy-to-use
                        interface of Jira Service Desk’s customer portal,
                        resulting in an 80% adoption rate. As a result, email
                        support requests dropped from 95% to 15%.
                      </p>

                      <p className={styles.improvement__quote}>
                        <span>Deflecting tickets through self-service: </span>{" "}
                        By integrating Jira Service Desk with Confluence, the IT
                        team deflected tickets by automatically surfacing
                        relevant knowledge base articles. This self-service
                        reduced ticket volume, while increasing customer
                        satisfaction.
                      </p>

                      <p className={styles.improvement__quote}>
                        <span>A service desk for every team: </span> Within a
                        year of implementing Jira Service Desk for the IT
                        support team, over 100 teams outside of IT – including
                        Human Resources, Procurement, and Facilities –
                        recognized the benefits and adopted service desks of
                        their own.
                      </p>

                      <div className={styles.rating}>
                        {twitterRatings.map((el, i) => {
                          return (
                            <div key={i} className={styles.rating__comment}>
                              <p className={styles.rate}>{el?.rate}</p>
                              <p className={styles.comment}>{el?.comment}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

{
  /* <>
              <div style={{ width: "100%", height: "500px" }}>
                <iframe
                  src="/case-study.pdf"
                  title="PDF Document"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                />
              </div>
            </> */
}
