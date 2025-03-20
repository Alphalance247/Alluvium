import styles from "../../styles/AlluviumRedesign2025/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import HighLight from "./ReuseComponents/highlight";
import ReadMore from "./ReuseComponents/readmore";
import { useState } from "react";

const Footer = () => {
  const [showreadmore, setShowreadMore] = useState(null);

  const data = [
    {
      img: "/assets/redesign-2025/base1.svg",
      content:
        "Need a quick chat? Skip the form and book a time that works for you.",
      btn: "Book a Meeting",
      url: "/contact-us",
    },
    {
      img: "/assets/redesign-2025/base2.svg",
      content:
        "Need help? Raise a ticket, and our team will get back to you very soon.",
      btn: "Raise a Ticket",
      url: "https://support.portal.alluvium.net/servicedesk/customer/portals",
    },
  ];

  const footerData = [
    {
      heading: "Services",
      text1: "Atlassian Services",
      text2: "AWS Services",
      text3: "Design & Development",
      url1: "/atlassian-services",
      url2: "/aws-services",
      url3: "/software-development",
    },
    {
      heading: "Company",
      text1: "Marketplace Plugins",
      text2: "Cloud Connect",
      text3: "Team ‘24",
      text4: "Booth 53",
      text5: "Contact Us",
      url1: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion",
      url2: "/cloud-connect",
      url3: "/event/team24",
      url4: "/booth53#hero",
      url5: "/contact-us",
    },
    {
      heading: "Resources",
      text1: "Migration Case Study",
      text2: "ITSM/JSM Case study",
      text3: "Events",
      text3: "Blogs",
      url1: "/atlassian-cloud-migration-case-studies",
      url2: "/atlassian-case-studies",
      url3: "/event/event-blog",
      url3: "/blogs",
    },
  ];

  const text = [
    {
      text: "MARKETPLACE PLUGINS",
      url: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion",
    },
    {
      text: "REMOTE WORK NEWS",
      url: "https://remotework.business/",
    },
    {
      text: "CLOUD CONNECT",
      url: "/cloud-connect",
    },
    {
      text: "ALLUVIUM UNIVERSITY",
      url: "https://university.alluvium.net/",
    },
  ];

  const blogContainer = [
    {
      img: "/assets/redesign-2025/press.png",
      content: "Tech Experts Converge on...",
      url: "https://remotework.business/2024/12/02/tech-experts-converge-on-the-zone-arena-lagos-for-alluvium-hqs-2024-cloud-connect-propel-smes-in-africa-to-full-digitization/ ",
    },
    {
      img: "/assets/redesign-2025/rovoagent.jpg",
      content: "Atlassian unveils rovo a game....",
      url: "https://remotework.business/2024/08/02/atlassian-unveils-rovo-a-game-changer-for-team-collaboration/",
    },
  ];

  const handleMouseEnter = (i) => {
    setShowreadMore(i);
  };

  const handleMouseLeave = () => {
    setShowreadMore(null);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.get__in__touch}>
          <p>Skip the Form: Book a Meeting or Raise a Ticket</p>

          <div className={styles.schedule__format}>
            {data.map((item, i) => {
              return (
                <div key={i} className={styles.format}>
                  <Image
                    src={item?.img}
                    width={56}
                    height={56}
                    alt={item?.btn}
                  />
                  <p>{item?.content}</p>
                  <a href={item?.url}>
                    <ReadMore content={item?.btn} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.footer__services}>
          <div className={styles.about}>
            <Link href="/">
              <Image
                src="/assets/alluvium-logo-light.svg"
                width={149}
                height={39}
                alt="logo"
              />
            </Link>
            <p>
              Alluvium creates, maintains and deploys high velocity service desk
              to allow teams deliver value to their internal and
              external customers.
            </p>

            <Image
              src="/assets/redesign-2025/chamber.png"
              width={237}
              height={139}
              alt="logo"
            />
          </div>

          <div>
            <div className={styles.services__contanier}>
              {footerData.map((item, i) => {
                return (
                  <div key={i} className={styles.links}>
                    <h4>{item?.heading}</h4>

                    <div>
                      <ul>
                        <li>
                          <Link href={item?.url1}>{item?.text1}</Link>
                        </li>

                        <li>
                          <Link href={item?.url2}>{item?.text2}</Link>
                        </li>

                        <li>
                          <Link href={item?.url3}>{item?.text3}</Link>
                        </li>

                        {item?.text4 && item?.url4 && (
                          <li>
                            <Link href={item?.url4}>{item?.text4}</Link>
                          </li>
                        )}

                        {item?.text5 && item?.url5 && (
                          <li>
                            <Link href={item?.url5}>{item?.text5}</Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.blog__section}>
              <p className={styles.blog__heading}>Blog</p>
              <div className={styles.showcase}>
                {text.map((item, i) => {
                  return (
                    <a href={item?.url} target="_blank">
                      <HighLight text={item?.text} i={i} />
                    </a>
                  );
                })}
              </div>

              <div className={styles.blogs}>
                {blogContainer.map((item, i) => {
                  return (
                    <a href={item?.url}>
                      <div
                        key={i}
                        className={styles.blog}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div>
                          <Image
                            src={item?.img}
                            width={134}
                            height={120}
                            alt={item?.content}
                            style={{
                              borderTopLeftRadius: "1rem",
                              borderBottomLeftRadius: "1rem",
                            }}
                          />
                        </div>
                        <div
                          className={`${
                            showreadmore === i
                              ? styles.contentHover
                              : styles.content
                          }`}
                        >
                          <p className={styles.readmore}>{item?.content}</p>

                          {showreadmore === i && (
                            // <div data-aos-delay="300" data-aos="fade-up">
                            <ReadMore content="Read More" />
                            // </div>
                          )}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.preferences}>
          <div className={`d-md-flex justify-content-between`}>
            <div className={styles.copyrights}>
              <p>
                © {new Date().getFullYear()} Alluvium Corporation. All rights
                reserved.
              </p>
            </div>
            <div className={styles.extralinks}>
              <Link href="/atlassian-services/terms-conditions">
                <div
                  className="px-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: ".4rem",
                    cursor: "pointer",
                  }}
                >
                  <a aria-label="Terms-Condition">Terms & Conditions </a>
                  <span
                    style={{
                      width: "2px",
                      height: "2px",
                      backgroundColor: "#BFBFBF",
                      borderRadius: "99px",
                      display: "inline-block",
                    }}
                  ></span>
                </div>
              </Link>

              <Link href={"/privacy-policy"}>
                <div
                  className="px-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: ".4rem",
                    cursor: "pointer",
                  }}
                >
                  <a aria-label="privacy-policy">Privacy Policy</a>
                  <span
                    style={{
                      width: "2px",
                      height: "2px",
                      backgroundColor: "#BFBFBF",
                      borderRadius: "99px",
                      display: "inline-block",
                    }}
                  ></span>
                </div>
              </Link>

              <Link href={"/cookie-policy"}>
                <div
                  className="px-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: ".4rem",
                    cursor: "pointer",
                  }}
                >
                  <a aria-label="privacy-policy"> Cookie Preferences</a>
                  <span
                    style={{
                      width: "2px",
                      height: "2px",
                      backgroundColor: "#BFBFBF",
                      borderRadius: "99px",
                      display: "inline-block",
                    }}
                  ></span>
                </div>
              </Link>

              <Link href={"/IT-cyber-security-policy"}>
                <div
                  className="px-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: ".4rem",
                    cursor: "pointer",
                  }}
                >
                  <a aria-label="IT AND CYBER SECURITY">
                    {" "}
                    IT AND CYBER SECURITY
                  </a>
                  <span
                    style={{
                      width: "2px",
                      height: "2px",
                      backgroundColor: "#BFBFBF",
                      borderRadius: "99px",
                      display: "inline-block",
                    }}
                  ></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
