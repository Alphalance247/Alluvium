// import React from "react";
// import styles from "../../../styles/AlluviumRedesign2026/common/hero.module.scss";
// import GifHero from "../home-hero/gifHero";
// import Link from "next/link";
// const Hero = ({ btnText }) => {
//   return (
//     <div>
//       <div className={styles.innerContainer}>
//         <div className={styles.heroContents}>
//           <GifHero />
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Link from "next/link";
import React from "react";

const Hero = () => {
  const products = [
    {
      brand: "Claude",
      accentBg: "bg-[#EFD7C6]",
      borderColor: "border-orange-200",
      badgeBg: "bg-orange-600",
      badgeText: "Anthropic",
      title: "Claude works where the thinking happens.",
      description:
        "Claude reasons across email, Slack, documents and the web to handle the work that has no template. Alluvium deploys it securely and builds the agents your teams need.",
      ctaText: "Explore Claude services",
      href: "#claude-services",
      logo: "/assets/Alluvium-Redesign-2026/badges/claude-logo.svg",
      icon: (
        <svg
          className="w-8 h-8 text-orange-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      brand: "Rovo",
      accentBg: "bg-[#C2D8F8]",
      borderColor: "border-blue-200",
      badgeBg: "bg-blue-600",
      badgeText: "Atlassian",
      title: "Rovo works where the work already lives.",
      description:
        "Rovo is native to Jira, Confluence and JSM, governed by the permissions you already trust. Alluvium builds the Rovo agents that carry repeatable work at scale.",
      ctaText: "Explore Atlassian services",
      href: "#atlassian-services",
      logo: "/assets/Alluvium-Redesign-2026/badges/claude-logo.svg",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.53 2.3a1 1 0 01.94 0l9 5a1 1 0 010 1.74l-9 5a1 1 0 01-.94 0l-9-5a1 1 0 010-1.74l9-5zM3.5 12.5l8 4.44 8-4.44M3.5 17.5l8 4.44 8-4.44" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2">
        {products.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between items-start gap-8 px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28 ${item.accentBg} border-b lg:border-b-0 ${
              index === 0 ? "lg:border-r border-slate-200" : ""
            }`}
          >
            {/* Header Content */}
            <div className="flex flex-col items-start gap-6 max-w-xl">
              {/* Brand Icon & Tag */}
              <img src={item?.logo} alt="" />

              {/* Title & Body */}
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
                  {item.title}
                </h2>
                <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Action Link Button */}
            <Link href={item.href}>
              <div className="px-6 py-3.5 text-[#344054] font-bold font-sans text-base rounded-lg border-[1px] border-[#091219] hover:bg-[#F3F4F6] hover:border-[#C2C9D4] inline-flex items-center gap-2 transition-all duration-150">
                <span>{item.ctaText}</span>
                <svg
                  className="w-4 h-4 text-slate-700 transform group-hover:translate-x-1 transition-transform duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
