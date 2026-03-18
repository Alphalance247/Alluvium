import React from "react";
import styles from "../../styles/AlluviumRedesign2026/home/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
const mobilePhones = [
  // {
  //     id: "", location: "Lagos", num: ""
  // },
  { id: "", location: "London", num: "+442035762028" },
  { id: "", location: "Stamford", num: "+1(207)360-7252" },
  { id: "", location: "Nairobi", num: "+254742090807" },
  { id: "", location: "Orlando", num: "+1(567)331-0070" },
];
const services = [
  { url: "/cloud-upgrade", id: "1", name: "Cloud Upgrade" },
  { url: "/license-optimization", id: "2", name: "License Optimization" },
  {
    url: "/enterprise-service-management",
    id: "3",
    name: "Enterprise Service Management (ESM)",
  },
  {
    url: "/strategic-partnerships",
    id: "4",
    name: "Strategic Partnerships",
  },
];
const company = [
  { url: "/about", id: "1", name: "about us" },
  {
    url: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion",
    id: "2",
    name: "marketplace plugins",
  },
  { url: "https://alluvium.net/cloud-connect", id: "3", name: "cloud connect" },
  { url: "https://alluvium.net/event/team24", id: "4", name: "team 24" },
  { url: "https://alluvium.net/booth53#hero", id: "5", name: "booth 53" },
  { url: "/contact-us", id: "6", name: "contact us" },
];
const resources = [
  { url: "", id: "1", name: "success stories" },
  { url: "/blogs", id: "2", name: "blog" },
  {
    url: "/atlassian-cloud-migration-case-studies",
    id: "3",
    name: "migration case study",
  },
  { url: "atlassian-case-studies", id: "4", name: "ITSM/JST case study" },
  { url: "", id: "5", name: "events" },
];

const badges = [
  // {
  //   img: "/assets/redesign-2025/Solution partner.svg",
  //   width: 219,
  //   height: 67,
  //   alt: "solution partner",
  // },
  {
    img: "/assets/redesign-2025/Certs.svg",
    width: 227,
    height: 84,
    alt: "marketplace partner",
  },

  {
    img: "/assets/redesign-2025/Chamber of Commerce.svg",
    width: 148,
    height: 87,
    alt: "stamford chamber of commerce",
  },

  {
    img: "/assets/Alluvium-Redesign-2026/home/image72.png",
    width: 272,
    height: 92,
    alt: "london chamber of commerce",
  },
  {
    img: "/assets/redesign-2025/awscerts.svg",
    width: 107,
    height: 100,
    alt: "aws partner",
  },
];
const Footer = () => {
  return (
    <div style={{ background: "#0f172a" }}>
      <div className={styles.footer_container}>
        <div className={styles.left_content}>
          <div className={styles.mobile_container}>
            <Image
              src="/assets/Alluvium-Redesign-2026/home/AlluviumLogoWhite.svg"
              alt="Alluvium Logo"
              width={149}
              height={30}
            />
            <div className={styles.mobile_phone}>
              {mobilePhones.map((item) => (
                <div key={item.id}>
                  <div>
                    {item.location} :{" "}
                    <a href={`tel:${item.num}`}> {item.num}</a>
                  </div>
                </div>
              ))}
              <div>
                Sales Team :
                <a href="mailto:contact@alluvium.net"> contact@alluvium.net</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.top_content}>
            <div className={styles.col_1}>
              <div className={styles.col_1_title}>Services</div>
              <div className={styles.col_1_services}>
                {services.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <div>{item.name}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.col_2}>
              <div className={styles.col_2_title}>Company</div>
              <div className={styles.col_2_services}>
                {company.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <div>{item.name}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.col_3}>
              <div className={styles.col_3_title}>Resources</div>
              <div className={styles.col_3_services}>
                {resources.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <div>{item.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.bottom_content_container}>
            <div className={styles.bottom_content}>
              {badges.map((item) => (
                <div key={item.alt} className={styles.partners}>
                  <div className={styles.col_1}>
                    <Image
                      src={item.img}
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <div className={styles.copyright_text}>
          © 2022 Alluvium Corporation. All rights reserved.
        </div>
        <div className={styles.privacy_terms}>
          <Link href="/atlassian-services/terms-conditions">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/alluvium.net/cookie-policy">Cookies Preferences</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
