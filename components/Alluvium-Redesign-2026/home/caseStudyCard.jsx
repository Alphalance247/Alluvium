import React, { useRef } from "react";
import styles from "../../../styles/AlluviumRedesign2026/home/case-study-card-carousel.module.scss";
import Image from "next/image";
import Link from "next/link";

const SuccessStories = () => {
  const scrollRef = useRef(null);

  const stories = [
    {
      sector: "Financial Sector",
      title: "100% compliance achieved for a Tier-1 UK Bank migration.",
      image: "/assets/Alluvium-Redesign-2026/home/compliance-achiver.png", // Larger placeholder for better quality
      link: "strategic-agile-transformation-&-cloud-migration",
    },
    {
      sector: "Telecommunications",
      title: "Multimillion-pound Enterprise Agile Framework.",
      image: "/assets/Alluvium-Redesign-2026/home/multi-million.png",
      link: "multimillion-pound-enterprise-agile-framework",
    },
    {
      sector: " IT Services",
      title: "Rapid Cloud Migration & Cost Optimization",
      image: "/assets/Alluvium-Redesign-2026/home/rapid-cloud.png",
      link: "rapid-cloud-migration-cost-optimization",
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const firstCard = current.firstElementChild;
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 612;
      current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header with Navigation Controls */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our Success Stories</h2>
          <div className={styles.controls}>
            <button
              className={styles.navBtn}
              onClick={() => scroll("left")}
              aria-label="Previous"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M15 18L9 12L15 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={`${styles.navBtn} ${styles.active}`}
              onClick={() => scroll("right")}
              aria-label="Next"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M9 18L15 12L9 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Stories Horizontal List */}
        <div className={styles.carouselTrack} ref={scrollRef}>
          {stories.map((story, index) => (
            <Link href={`/success-stories/${story.link}`} key={index}>
              <div key={index} className={styles.storyCard}>
                <div className={styles.textContent}>
                  <div className={styles.topContent}>
                    <div className={styles.badgeWrapper}>
                      <span className={styles.badge}>{story.sector}</span>
                    </div>
                    <h3 className={styles.storyTitle}>{story.title}</h3>
                  </div>

                  <div className={styles.readMore}>
                    <span className={styles.linkText}>READ MORE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.6667 8L8.66671 4L12.6667 8ZM12.6667 8L8.66671 12L12.6667 8ZM12.6667 8H3.33337H12.6667Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M12.6667 8L8.66671 4M12.6667 8L8.66671 12M12.6667 8H3.33337"
                        stroke="#262626"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className={styles.imageWrapper}>
                  <Image
                    src={story.image}
                    width={223}
                    height={284}
                    alt={story.sector}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
