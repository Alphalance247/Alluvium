import React from "react";
import styles from "../../styles/AlluviumRedesign2026/home/footer.module.scss";
import Image from "next/legacy/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const mobilePhones = [
  { id: "", location: "London", num: "+442035762028" },
  { id: "", location: "Stamford", num: "+1(207)360-7252" },
  { id: "", location: "Nairobi", num: "+254742090807" },
  { id: "", location: "Orlando", num: "+1(567)331-0070" },
];

const services = [
  { url: "/cloud-upgrade", id: "1", name: "Migration" },
  {
    url: "/license-optimization",
    id: "2",
    name: "License & token optimization",
  },
  {
    url: "/enterprise-service-management",
    id: "3",
    name: "Service management",
  },
  {
    url: "/strategic-partnerships",
    id: "4",
    name: "Strategic partnerships",
  },
];

const company = [
  { url: "/about", id: "1", name: "About us" },
  {
    url: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion",
    id: "2",
    name: "Marketplace plugins",
  },
  { url: "https://alluvium.net/cloud-connect", id: "3", name: "Cloud connect" },
  { url: "https://alluvium.net/event/team24", id: "4", name: "Team 24" },
  { url: "https://alluvium.net/booth53#hero", id: "5", name: "Booth 53" },
  { url: "/contact-us", id: "6", name: "Contact us" },
];

const resources = [
  { url: "/success-stories", id: "1", name: "Success stories" },
  { url: "/blogs", id: "2", name: "Blog" },
  {
    url: "/atlassian-cloud-migration-case-studies",
    id: "3",
    name: "Migration case study",
  },
  { url: "atlassian-case-studies", id: "4", name: "ITSM/JST case study" },
  { url: "/event", id: "5", name: "Events" },
];

const badges = [
  // {
  //   img: "/assets/redesign-2025/Solution partner.svg",
  //   width: 219,
  //   height: 67,
  //   alt: "solution partner", public/assets/Alluvium-Redesign-2026/badges/Chamber_of_commer.png
  // },
  {
    img: "/assets/Alluvium-Redesign-2026/badges/GDPR.png",
    width: 68,
    height: 64,
    alt: "Marketplace partner",
  },
  {
    img: "/assets/Alluvium-Redesign-2026/badges/Chamber_of_commer.png",
    width: 119,
    height: 60,
    alt: "marketplace partner",
  },
  {
    img: "/assets/Alluvium-Redesign-2026/badges/London_of_chamber.png",
    width: 175,
    height: 60,
    alt: "marketplace partner",
  },
];
const socialMedias = [
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/company/alluvium-hq/",
  },
  {
    icon: <FaFacebookSquare />,
    url: "https://web.facebook.com/alluviumhq/?ti=as&_rdc=1&_rdr#",
  },
  { icon: <FaXTwitter />, url: "https://x.com/alluviumhq?s=08" },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@AlluviumConsulting-b3o",
  },
];

const Footer = () => {
  return (
    <div style={{ background: "#0F1D29" }}>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_content}>
          <div className={styles.left_content}>
            <div className={styles.mobile_container}>
              <Image
                src="/assets/Alluvium-Redesign-2026/badges/AlluviumLogo.png"
                alt="Alluvium Logo"
                width={152}
                height={48}
              />
              <div className={styles.location}>
                You'll find us in London, Stamford, Orlando, <br /> Lagos and
                Nairobi
              </div>
            </div>
          </div>
          <div className={styles.right_content}>
            <div className={styles.top_content}>
              <div className={styles.col_1}>
                <div className={styles.col_1_title}>Solutions</div>
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
          </div>
        </div>
        <div className={styles.footer_badges}>
          {badges.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt={item.alt}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>
        <div className={styles.footer_copyright}>
          <div className={styles.copyright_text}>
            © 2022 Alluvium Corporation. <br /> All rights reserved.
          </div>
          <div className={styles.privacy_terms}>
            <Link href="/atlassian-services/terms-conditions">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="https://alluvium.net/cookie-policy">
              Cookies Settings
            </Link>
            <div className={styles.socialMedia}>
              {socialMedias.map((icon, index) => (
                <a href={icon.url} key={index} target="_blank">
                  {icon.icon}
                </a>
              ))}
            </div>
            {/* <Link href="/alluvium.net/cookie-policy">Cookies Preferences</Link> */}
          </div>
        </div>
        {/* <div className={styles.bottom_content_container}>
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
                </div> */}
      </div>
      {/* <div className={styles.footer_badges}>
                <Image />
            </div> */}
      {/* <div className={styles.footer_copyright}>
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
            </div> */}
    </div>
  );
};

export default Footer;
