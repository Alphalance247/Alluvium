import React, { useState } from "react";
import styles from "../../../styles/AtlassianWebinars/webinars.module.scss";
import Image from "next/image";

export default function AttendeeQuotes() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const quotes = [
    {
      id: 1,
      text: "Alluvium transformed how our teams work with Atlassian",
      name: "Head of IT",
      company: "Google",
    },

    {
      id: 2,
      text: "Alluvium transformed how our teams work with Atlassian",
      name: "Head of IT",
      company: "Allvium",
    },

    {
      id: 3,
      text: "Alluvium transformed how our teams work with Atlassian",
      name: "Head of IT",
      company: "Google",
    },

    {
      id: 4,
      text: "Alluvium transformed how our teams work with Atlassian",
      name: "Head of IT",
      company: "Moden",
    },

    {
      id: 5,
      text: "Alluvium transformed how our teams work with Atlassian",
      name: "Head of IT",
      company: "Meta",
    },

    {
      id: 6,
      text: "Alluvium transformed how our teams work with Atlassian",
      name: "Head of IT",
      company: "Amazon",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  const visibleQuotes = [
    quotes[(currentSlide - 1 + quotes.length) % quotes.length],
    quotes[currentSlide],
    quotes[(currentSlide + 1) % quotes.length],
  ];

  return (
    <div className={styles.attendeeQuotesContainer}>
      <div className={styles.attendeeQuotesWrapper}>
        <div className={styles.quotesHeader}>
          <button className={styles.quoteNavButton} onClick={handlePrev}>
            <Image
              width={64}
              height={64}
              src="/assets/webinar/right.svg"
              alt="left"
            />
          </button>

          <h2 className={styles.quotesTitle}>Attendee Quotes</h2>

          <button className={styles.quoteNavButton} onClick={handleNext}>
            <Image
              width={48}
              height={48}
              src="/assets/webinar/left.svg"
              alt="right"
            />
          </button>
        </div>

        <div className={styles.quotesCarousel}>
          <div className={styles.quotesGrid}>
            {visibleQuotes.map((quote, index) => (
              <div key={index} className={styles.quoteCard}>
                <div className={styles.quoteAuthor}>
                  <div className={styles.quoteAvatarPlaceholder}>
                    <Image
                      width={48}
                      height={48}
                      src="/assets/webinar/jaytee.png"
                      alt="jaytee"
                    />
                  </div>
                  <div className={styles.quoteAuthorInfo}>
                    <p className={styles.quoteAuthorName}>{quote.name}</p>
                    <p className={styles.quoteAuthorCompany}>{quote.company}</p>
                  </div>
                </div>
                <p className={styles.quoteText}>{quote.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.quotesFooter}>
          <div className={styles.quotesPagination}>
            {quotes.map((_, index) => (
              <button
                key={index}
                className={`${styles.paginationDot} ${
                  index === currentSlide ? styles.paginationDotActive : ""
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button className={styles.quotesCta}>Claim free Access</button>
        </div>
      </div>
    </div>
  );
}
