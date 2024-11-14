import { useState } from "react";
import styles from "../../styles/Atlassian-Case-Study/SuccessStories.module.scss";

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(0);

  const btnContent = [
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
  const DHIrating = [
    {
      rate: "70%",
      comment: "Fewer major IT incidents",
    },

    {
      rate: "75%",
      comment: "Lower licensing costs",
    },
  ];
  const TelegraphRating = [
    {
      rate: "66%",
      comment: "Reduction in time to resolution",
    },

    {
      rate: "50%",
      comment: "Reduction in call-waiting time",
    },
    {
      rate: "140%",
      comment: "Increase in customer satisfaction",
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

  const yale = [
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
  const DHI = [
    {
      heading: "INDUSTRY",
      subHead: ["Technology"],
    },
    {
      heading: "LOCATION",
      subHead: ["New York City, New York, USA"],
    },

    {
      heading: "PRODUCTS",
      subHead: ["Jira Service Desk", "Jira Software", "Confluence"],
    },
  ];

  const CBS = [
    {
      heading: "INDUSTRY",
      subHead: ["Television Broadcasting"],
    },
    {
      heading: "LOCATION",
      subHead: ["New York, New York"],
    },

    {
      heading: "PRODUCTS",
      subHead: ["Jira Service Desk", "Jira Software", "Confluence"],
    },
  ];

  const Telegraph = [
    {
      heading: "INDUSTRY",
      subHead: ["Media & Entertainment"],
    },
    {
      heading: "LOCATION",
      subHead: ["London, England"],
    },

    {
      heading: "PRODUCTS",
      subHead: ["Jira Service Desk", "Jira Software", "Confluence"],
    },
    {
      heading: "MARKETPLACE APPS",
      subHead: [
        "Scriptrunner for Jira",
        "Zephyr for Jira",
        "Timesheet Reports and Gadgets",
        "Lucidchart Diagram Connector",
      ],
    },
    {
      heading: "SOLUTION PARTNERS",
      subHead: ["Valiantys"],
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
            {btnContent.map((el, i) => {
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
                    {yale.map((el, i) => {
                      return (
                        <div className={styles.heading__right} key={i}>
                          <p className={styles.heading__styles}>{el.heading}</p>

                          {el.subHead.map((item, i) => {
                            return (
                              <p
                                className={`${styles.subHeading__styles}`}
                                key={i}
                              >
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
                    {twitter.map((el, i) => {
                      return (
                        <div className={styles.heading__right} key={i}>
                          <p className={styles.heading__styles}>{el.heading}</p>

                          {el.subHead.map((item, i) => {
                            return (
                              <p
                                className={`${styles.subHeading__styles}`}
                                key={i}
                              >
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
                        and deliver exceptional service.
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
            {activeTab === 2 && (
              <div className={styles.body__content__all}>
                <p className={`${styles.expectations}`}>
                  Choosing Jira Service Desk for transparency across a global
                  team
                </p>
                <div className={styles.body__content}>
                  <div>
                    {DHI.map((el, i) => {
                      return (
                        <div className={styles.heading__right} key={i}>
                          <p className={styles.heading__styles}>{el.heading}</p>

                          {el.subHead.map((item, i) => {
                            return (
                              <p
                                className={`${styles.subHeading__styles}`}
                                key={i}
                              >
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
                        DHI Group, a leading provider of online career
                        marketplaces, had expanded rapidly in part through
                        acquisitions. With ten strong brands, including Dice.com
                        for technology professionals, the company inherited a
                        mix of collaboration and communication tools. As a
                        result, employees were unable to collaborate smoothly
                        across teams and departments, hurting both efficiency
                        and innovation. DHI’s processes were also out of date.
                        Support cases were tracked on paper and three-ring
                        binders, making information difficult to search and
                        share. Although developer teams were already using Jira
                        Software and Confluence, at least one department was
                        using ServiceNow for IT support. Since ServiceNow didn’t
                        integrate with Jira, these employees were managing two
                        separate workstreams and systems. DHI decided to
                        standardize on a single platform to improve
                        collaboration and reduce its software license costs.
                      </p>
                    </div>

                    <div>
                      <p className={styles.heading__styles__1}>The solution</p>
                      <p className={`${styles.subHeading__styles__1}`}>
                        DHI decided to move the entire company to Atlassian as
                        its single work platform. Given the development teams’
                        familiarity with Jira Software and Confluence, switching
                        from ServiceNow to Jira Service Desk for ITSM was a
                        natural choice. Internal communications also moved from
                        SharePoint to Confluence, including everything from HR
                        benefits documentation to CEO blog posts. Implementing
                        the Atlassian suite and standardizing the company on a
                        single platform has allowed for greater collaboration
                        and transparency.
                      </p>

                      <p className={styles.quote}>
                        The features, the overhead, the process that
                        [ServiceNow] pushed us through, we weren’t working as
                        nimbly as we thought we could. And, frankly, the cost.
                        When you look at a quarter million dollar solution
                        compared to something that is 25% of that, [Jira Service
                        Desk] was an easy choice.
                        <br />
                        <br />
                        <span className={styles.quote__span}>
                          JOE RIESBERG, VP OF TECHNOLOGY
                        </span>
                      </p>

                      <p className={styles.improvement__quote}>
                        <span> Increased collaboration: </span>
                        By moving from SharePoint to Confluence, and from
                        ServiceNow to Jira Service Desk, DHI created a culture
                        of openness. Collaboration happened more naturally with
                        a single platform and allowed teams to be more
                        productive.
                      </p>

                      <p className={styles.improvement__quote}>
                        <span>Cost savings: </span>
                        DHI Group saved considerable costs by switching from
                        tools like SharePoint and ServiceNow, given these
                        vendors’ high licensing fees.
                      </p>

                      <p className={styles.improvement__quote}>
                        <span>Reducing major incidents: </span> Jira Service
                        Desk is credited with lowering major IT incidents by 70
                        percent over the last three years. This is attributed to
                        the transparency that comes from having the entire team
                        on the same platform.
                      </p>

                      <div className={styles.rating}>
                        {DHIrating.map((el, i) => {
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
            {activeTab === 3 && (
              <div className={styles.body__content__all}>
                <p className={`${styles.expectations}`}>
                  Creative teams adopt an agile way of work
                </p>
                <div className={styles.body__content}>
                  <div>
                    {CBS.map((el, i) => {
                      return (
                        <div className={styles.heading__right} key={i}>
                          <p className={styles.heading__styles}>{el.heading}</p>

                          {el.subHead.map((item, i) => {
                            return (
                              <p
                                className={`${styles.subHeading__styles}`}
                                key={i}
                              >
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
                        A leading network in the United States with over 210
                        affiliates and between 12-18 hours of programming a day,
                        CBS is responsible for producing, organizing and
                        promoting massive amounts of content.
                        <br />
                        <br />
                        Functioning much like an agency within the company,
                        CBS’s internal marketing department is composed of over
                        200 distributed marketers supporting all aspects
                        involved in the advertising and marketing of news,
                        sports, entertainment, and daytime programming.
                        <br />
                        <br />
                        Managing, tracking, and executing different delivery
                        formats, sizes, and specs required a whole new technical
                        process to create. CBS Marketing Group was in need of a
                        highly customizable and agile workflow system that could
                        grow and adapt to its ever-expanding promotion
                        processes. The platform had to have an internal and
                        external request management system, an integrated
                        ecosystem, and a shared knowledge base.
                      </p>
                    </div>

                    <div>
                      <p className={styles.heading__styles__1}>The solution</p>
                      <p className={`${styles.subHeading__styles__1}`}>
                        CBS Marketing Group already had good foundational
                        processes across teams, even adopting an agile mindset
                        with creative work organized into sprints similar to a
                        development team. This is one reason why Jira Service
                        Management was a great fit.
                        <br />
                        <br />
                        By working with a certified Atlassian Solution Partner
                        for implementation support, Jira Service Management
                        immediately helped change the way CBS Marketing Group
                        collected information from other teams. Increased
                        visibility: Integrating Jira Service Management with
                        Jira Software means teams have visibility into the
                        entire process, helping workflow between pods and handle
                        the growing number of external requests from various
                        departments across the enterprise.
                      </p>

                      <p className={styles.quote}>
                        Jira Service Management really, really is the cherry on
                        the top of an amazing suite of products that allows us
                        to close that final link to our clients and to the teams
                        that work with us externally, to help us get them what
                        they need. I’ve been with the company for over 15 years,
                        and for the first time, because of Atlassian, we have an
                        accurate measure of our inputs and outputs in a very
                        granular way. We have realized sizable increases in our
                        throughput and bandwidth with the use of these tools.
                        <br />
                        <br />
                        <span className={styles.quote__span}>
                          MITCH CARDWELL, VICE PRESIDENT OF BRAND IDENTITY AND
                          SYSTEMS, CBS
                        </span>
                      </p>

                      <p className={styles.improvement__quote}>
                        <span> Increased visibility: </span>
                        Integrating Jira Service Management with Jira Software
                        means teams have visibility into the entire process,
                        helping workflow between pods and handle the growing
                        number of external requests from various departments
                        across the enterprise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 4 && (
              <div className={styles.body__content__all}>
                <p className={`${styles.expectations}`}>
                  Seamless operations for 25 million unique users a month
                </p>
                <div className={styles.body__content}>
                  <div>
                    {Telegraph.map((el, i) => {
                      return (
                        <div className={styles.heading__right} key={i}>
                          <p className={styles.heading__styles}>{el.heading}</p>

                          {el.subHead.map((item, i) => {
                            return (
                              <p
                                className={`${styles.subHeading__styles}`}
                                key={i}
                              >
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
                        The Telegraph reaches over 25 million unique users per
                        month through its newspapers, mobile apps, website, and
                        magazines. Given their scale, smooth and seamless IT
                        operations are crucial.
                        <br />
                        <br />
                        Before implementing Atlassian, The Telegraph faced
                        massive challenges with their outsourced IT service
                        management. “We were suffering from poor resolution
                        times and lack of transparency,” says Carol Johnson, IT
                        Director.
                        <br />
                        <br />
                        To increase efficiency and improve communication, they
                        decided to move their IT in-house, and they had a short
                        time frame in which to make the transition. As Johnson
                        put it, “We had to find a service management solution,
                        build and implement it in under three months. I felt
                        that was impossible.”
                      </p>
                    </div>

                    <div>
                      <p className={styles.heading__styles__1}>The solution</p>
                      <p className={`${styles.subHeading__styles__1}`}>
                        The Telegraph partnered with Valiantys, a leading
                        Atlassian Solution Partner, to choose and implement an
                        ITSM solution. After deciding on Jira Service Desk, the
                        IT team was up and running within just three months. By
                        integrating Jira Service Desk with Jira Software, the IT
                        and Software Development teams can collaborate more
                        often and resolve issues faster. Jira Service Desk is
                        integrated with Confluence to provide a self-service
                        knowledge base where employees can search and find
                        solutions to frequently raised issues.
                      </p>

                      <p className={styles.quote}>
                        With Jira Service Desk, we can move at the speed of the
                        industry, support our customers, and deliver real
                        business value.
                        <br />
                        <br />
                        <span className={styles.quote__span}>
                          CAROL JOHNSON, IT DIRECTOR
                        </span>
                      </p>

                      <p className={styles.improvement__quote}>
                        <span> Improved service quality: </span>
                        Within three months of the rollout, IT improved its time
                        to resolution by 66%, reduced call-waiting time by 50%,
                        and increased customer satisfaction by 140%.
                      </p>
                      <p className={styles.improvement__quote}>
                        <span>Faster time to value: </span>
                        With Jira Service Desk’s ease of deployment and
                        intuitive interface, The Telegraph’s IT team was able to
                        find, build, and implement the solution in just under
                        three months.
                      </p>
                      <p className={styles.improvement__quote}>
                        <span>
                          Increased collaboration between IT and Development:{" "}
                        </span>
                        By integrating Jira Service Desk and Jira Software, IT
                        and Development teams can better collaborate and resolve
                        issues faster. They also reduced their change management
                        approval process from eight days to one day.
                      </p>

                      <div className={styles.rating}>
                        {TelegraphRating.map((el, i) => {
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
