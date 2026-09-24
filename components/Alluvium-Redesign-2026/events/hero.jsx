import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/hero.module.scss";
import HeroHeader from "./heroHeader";
import Image from "next/image";
import Button from "../common/button";
import Link from "next/link";

const EventsBanner = () =>
// { title, heading, subhead, backgroundImage }
{
  // const sectionStyle = backgroundImage
  //   ? { backgroundImage: `url("${backgroundImage}")` }
  //   : {};

  return (
    // <section className={styles.section} style={sectionStyle}>
    //   <div className={styles.container}>
    //     {title && <p className={styles.heading}>{title}</p>}
    //     <h1 className={styles.title}>{heading || "Webinars & Events"}</h1>
    //     <p className={styles.description}>
    //       {subhead ||
    //         "Explore thought-provoking roundtables, in-depth customer support discussions, case studies, Atlassian product demos, and more."}
    //     </p>
    //   </div>
    // </section>

    <section className="">
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-stretch">
          <Image
            src="https://d38rkvi67t4lhi.cloudfront.net/assets/1786701308245-Image-9.png"
            alt="event banner"
            width={764}
            height={513}
            className="w-full md:w-[764px]"
          />

          <div className="flex flex-col justify-between">
            {/* Content */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex justify-start items-center gap-2">
                <div className="w-5 h-0 outline outline-4 outline-offset-[-2px] outline-[#008DAF]" />

                <span className="text-tertiary-300 text-sm font-bold uppercase leading-4 font-manrope">
                  CAMPAIGN
                </span>
              </div>

              <div className="w-full md:w-[412px]">
                <h2 className="font-bold font-merriweather text-[36px] leading-[44px] text-tertiary-200">
                  Alluvium is exhibiting at HR Analytics Summit, London.
                </h2>

                <p className="pt-6 text-lg font-medium font-manrope text-tertiary-175">
                  3 September, 155 Bishopsgate, London, Our CEO, Taiwo Ojo, is
                  speaking on the main stage. See you there or contact us if
                  you’d like to be part of the conversation.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-6">
              <Link href="/contact-us" className="w-full md:w-fit">
                <Button
                  size="md"
                  variant="secondary"
                  type="button"
                  className="!bg-white hover:!bg-black hover:!text-white text-black"
                >
                  <span className="font-manrope">Contact us</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default EventsBanner;
