import React from "react";
import styles from "../../styles/AlluviumRedesign2026/home/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
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
  { url: "/cloud-upgrade", id: 1, name: "Atlassian cloud upgrade" },
  {
    url: "/enterprise-service-management",
    id: "2",
    name: "ESM & ITSM consulting",
  },
  {
    url: "/license-optimization",
    id: "3",
    name: "License & token optimization",
  },
  { id: 4, url: "/ai-solutions", name: "AI solutions" },
  {
    url: "/strategic-partnerships",
    id: "5",
    name: "Strategic partnerships",
  },
];

const company = [
  { url: "/about", id: 1, name: "About us" },
  { url: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion?tab=overview&hosting=cloud", id: 2, name: "Export & count plugin" },
  { url: "https://marketplace.atlassian.com/apps/1223507/resource-compare-for-jira?tab=overview&hosting=cloud", id: 3, name: "Resource compare" },
  { url: "/contact-us", id: 4, name: "Contact us" },
  // {
  //   url: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion",
  //   id: "2",
  //   name: "Marketplace plugins",
  // },
  // { url: "/cloud-connect", id: "3", name: "Cloud connect" },
  // { url: "/event/team24", id: "4", name: "Team 24" },
  // { url: "/booth53#hero", id: "5", name: "Booth 53" },
  // { url: "/contact-us", id: "6", name: "Contact us" },
];

const resources = [
  { url: "/success-stories", id: "1", name: "Success stories" },
  { url: "/blogs", id: "2", name: "Blog" },
  { url: "/whitepaper", id: "", name: "White papers" },
  { url: "/event", id: "5", name: "Events" },
  // {
  //   url: "/atlassian-cloud-migration-case-studies",
  //   id: "3",
  //   name: "Migration case study",
  // },
  // { url: "atlassian-case-studies", id: "4", name: "ITSM/JST case study" },
  // { url: "/event", id: "5", name: "Events" },
];

const badges = [
  {
    img: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-Claude-badge.png",
    width: 118,
    height: 60,
    alt: "claude partner badge",
  },
  {
    img: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-AT14VX9-1-1-1.png",
    width: 95,
    height: 60,
    alt: "service management partner badge",
  },
  {
    img: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-AT14W34-1-1-1.png",
    width: 107,
    height: 67,
    alt: "cloud migration partner badge",
  },
  {
    img: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-AWS-1.png",
    width: 70,
    height: 67,
    alt: "AWS partner badge",
  },
  {
    img: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-Mask-group-2.png",
    width: 68,
    height: 64,
    alt: "GDPR partner badge",
  },
  {
    img: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-Chamber-of-commer-1.png",
    width: 119,
    height: 67,
    alt: "Chamber-of-commerce partner badge",
  },
  {
    img: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589124-London-of-chamber-1.png",
    width: 175,
    height: 60,
    alt: "London-chamber partner badge",
  },
];
const socialMedias = [
  {
    icon: <IoLogoLinkedin size={24} />,
    url: "https://www.linkedin.com/company/alluvium-hq/",
  },
  {
    icon: <FaFacebookSquare size={24} />,
    url: "https://web.facebook.com/alluviumhq/?ti=as&_rdc=1&_rdr#",
  },
  { icon: <FaXTwitter size={24} />, url: "https://x.com/alluviumhq?s=08" },
  {
    icon: <FaYoutube size={24} />,
    url: "https://www.youtube.com/@AlluviumConsulting-b3o",
  },
];

const Footer = () => {
  return (
    <div
      className="w-full bg-[#F9FAFB] "
      style={{
        paddingTop: "3rem",
      }}
    >
      {/* <div className={styles.footer_container}> */}
      <div className="max-w-7xl mx-auto pt-4 lg:pt-[32px] pb-4 lg:pb-4  lg:px-16 md:px-12 px-6">
        <div className="flex lg:flex-row flex-col pb-10 lg:pb-[87px]">
          <div className="w-full h-auto  lg:w-1/4 lg:h-[383px]">
            <div className="">
              <div className="pb-6">
                <Image
                  src="https://d38rkvi67t4lhi.cloudfront.net/assets/1787246810183-Frame-10-1.png"
                  alt="Alluvium Logo"
                  width={120}
                  height={24}
                />
              </div>
              <div className="flex gap-4 items-center">
                {socialMedias.map((icon, index) => (
                  <a href={icon.url} key={index} target="_blank">
                    {icon.icon}
                  </a>
                ))}
              </div>
              {/* <div className="text-[#bfbfbf] text-sm font-medium mt-6">
                You'll find us in London, Stamford, Orlando, <br /> Lagos and
                Nairobi
              </div> */}
            </div>
          </div>
          <div className="w-full lg:w-[75%]">
            <div className="flex md:flex-row flex-col  gap-6 md:gap-0 pt-10 lg:pt-0">
              <div className="lg:h-[383px] h-auto w-full md:w-[290px] lg:w-[320px] xl:w-1/3 px-0 md:px-4">
                <div className="text-base font-bold font-merriweather pb-4 text-[#344054]">
                  Solutions
                </div>
                <div className=" flex flex-col gap-3  ">
                  {services.map((item) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className="cursor-pointer"
                    >
                      <div className="font-medium text-base font-manrope text-[#667085]">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="lg:h-[383px] h-auto w-full md:w-[220px] lg:w-[260px] xl:w-1/3 px-0 md:px-4 ">
                <div className="text-base font-bold font-merriweather pb-4 text-[#344054]">
                  Company
                </div>
                <div className=" flex flex-col gap-3 font-medium text-base font-manrope text-[#667085] cursor-pointer">
                  {company.map((item) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className="cursor-pointer"
                    >
                      <div className="font-medium text-base font-manrope text-[#667085]">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="lg:h-[383px] h-auto w-full md:w-[200px] lg:w-[220px] xl:w-1/3 px-0 md:px-4 ">
                <div className="text-base font-bold font-merriweather pb-4 text-[#344054]">
                  Resources
                </div>
                <div className=" flex flex-col gap-3 font-medium text-base font-manrope text-[#667085] cursor-pointer">
                  {resources.map((item) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className="cursor-pointer"
                    >
                      <div className="font-medium text-base font-manrope text-[#667085]">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-wrap lg:flex-nowrap gap-6 items-center border-t-[1px] border-b-[1px] py-6 border-[#D0D5DD]">
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
        <div className=" flex md:flex-row flex-col items-center justify-between h-[88px] max-w-7xl">
          <div className="text-sm font-medium font-manrope text-[#344054] py-6 lg:w-auto md:w-[380px] w-full">
            {/* © 2022 Alluvium Corporation. <br /> All rights reserved. */}©
            2026 Alluvium. All rights reserved. This site is protected by
            reCAPTCHA.
          </div>
          <div className="flex gap-4">
            <Link
              href="/atlassian-services/terms-conditions"
              className="py-1 text-xs font-manrope font-medium text-[#344054]"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs font-manrope font-medium py-1 text-[#344054]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
