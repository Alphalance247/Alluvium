import styles from "../../styles/AlluviumRedesign2025/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import HighLight from "./ReuseComponents/highlight";
import ReadMore from "./ReuseComponents/readmore";
import { useState } from "react";

const Footer = () => {
  const [showreadmore, setShowreadMore] = useState(false);

  const data = [
    {
      img: "/assets/redesign-2025/base1.svg",
      content:
        "Need a quick chat? Skip the form and book a time that works for you.",
      btn: "Book a Meeting",
    },
    {
      img: "/assets/redesign-2025/base2.svg",
      content:
        "Need help? Raise a ticket, and our team will get back to you very soon.",
      btn: "Raise a Ticket",
    },
  ];

  const footerData = [
    {
      heading: "Services",
      text1: "Atlassian Services",
      text2: "AWS Services",
      text3: "Design & Development",
    },
    {
      heading: "Company",
      text1: "About us",
      text2: "Marketplace Plugins",
      text3: "Cloud Connect",
      text4: "Team ‘24",
      text5: "Booth 53",
      text6: "Contact Us",
    },
    {
      heading: "Resources",
      text1: "Success Stories",
      text2: "Blog",
      text3: "Migration Case Study",
      text4: "ITSM/JSM Case study",
      text5: "Events",
    },
  ];

  const text = [
    {
      text: "MARKETPLACE PLUGINS",
    },
    {
      text: "REMOTE WORK NEWS",
    },
    {
      text: "CLOUD CONNECT",
    },
    {
      text: "ALLUVIUM UNIVERSITY",
    },
  ];

  const blogContainer = [
    {
      img: "/assets/redesign-2025/chamberbloog.png",
      content: "Alluvium joins the Stanford Chamber...",
      btn: "Read more",
    },
    {
      img: "/assets/redesign-2025/press.png",
      content: "Alluvium joins the Stanford Chamber...",
      fullhighlight: "Alluvium joins the Stanford Chambe",
    },
  ];

  const handleMouseEnter = () => {
    setShowreadMore(!showreadmore);
  };

  const handleMouseLeave = () => {
    setShowreadMore(!showreadmore);
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
                  <ReadMore content={item?.btn} />
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
                        <li>{item?.text1}</li>
                        <li>{item?.text2}</li>
                        <li>{item?.text3}</li>
                        <li>{item?.text4}</li>
                        <li>{item?.text5}</li>
                        <li>{item?.text6}</li>
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
                  return <HighLight text={item?.text} key={i} />;
                })}
              </div>
              <div className={styles.blogs}>
                {blogContainer.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={styles.blog}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={() => handleMouseLeave(i)}
                    >
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
                      <div className={styles.content}>
                        <p>{item?.content}</p>

                        {showreadmore && (
                          <div data-aos-delay="300" data-aos="fade-down">
                            <ReadMore content="Read More" />
                          </div>
                        )}
                      </div>
                    </div>
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
                <a aria-label="privacy-policy" className="px-3">
                  Terms & Conditions
                </a>
              </Link>
              <Link href={"/privacy-policy"}>
                <a aria-label="privacy-policy">Privacy Policy</a>
              </Link>

              <Link href={"/privacy-policy"}>
                <a aria-label="privacy-policy" className="px-3">
                  Cookie Preferences
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
