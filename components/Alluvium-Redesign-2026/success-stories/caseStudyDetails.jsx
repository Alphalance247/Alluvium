import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/success-stories/case-study-details.module.scss";
import Image from "next/image";
import FormSection from "../formSection";

const CaseStudyDetail = ({
  client = "Client Name",
  solutionPillar = "Solution Pillar",
  challengeTitle = "The Challenge",
  challengeDescription = "Challenge description",
  solutionTitle = "The Alluvium Solution",
  solutionDescription = "Solution description",
  solutionImage = "/assets/Alluvium-Redesign-2026/SuccessStory/hero2.png",
  industry = "Industry",
  toolsUsed = "Tools",
  servicesProvided = "Services",
  results = [],
}) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.mainContainer}>
        {/* Left: Detailed Narrative */}
        <div className={styles.contentArea}>
          <header className={styles.headerSection}>
            <p className={styles.clientLabel}>Client: {client}</p>
            <h1 className={styles.pillarTitle}>
              Solution Pillar: {solutionPillar}
            </h1>
          </header>

          <section>
            <h3>{challengeTitle}</h3>
            <p>{challengeDescription}</p>
          </section>

          <section>
            <h3>{solutionTitle}</h3>
            <p>{solutionDescription}</p>
            <Image
              width={657}
              height={400}
              src={solutionImage}
              alt="Solution diagram"
              //   className={styles.displayImage}
            />
          </section>

          <div className={styles.resultsBox}>
            <h3>The Result</h3>
            {results.map((result, index) => (
              <div key={index} className={styles.resultItem}>
                <Image
                  width={24}
                  height={24}
                  src={result.img}
                  alt="Result icon"
                />
                <p>
                  <strong>{result.title}</strong>{" "}
                  <span>{result.description}</span>
                </p>
              </div>
            ))}
          </div>

          <div className={styles.shareSection}>
            <p className={styles.shareText}> Share this article:</p>

            {/* Social media icons would go here */}
            <div className={styles.socialIcons}>
              {/* Example social media icons */}
              <a href="#" aria-label="Share on Twitter">
                <Image
                  width={24}
                  height={24}
                  src="/assets/Alluvium-Redesign-2026/SuccessStory/twitter.svg"
                  alt="Twitter"
                />
              </a>
              <a href="#" aria-label="Share on LinkedIn">
                <Image
                  width={24}
                  height={24}
                  src="/assets/Alluvium-Redesign-2026/SuccessStory/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="#" aria-label="Share on Facebook">
                <Image
                  width={24}
                  height={24}
                  src="/assets/Alluvium-Redesign-2026/SuccessStory/facebook.svg"
                  alt="Facebook"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Sidebar Info & Lead Form */}
        <aside className={styles.sidebar}>
          <div className={styles.infoCard}>
            <div className={styles.infoGroup}>
              <label>Industry</label>
              <div>{industry}</div>
            </div>
            <div className={styles.infoGroup}>
              <label>Tools USED</label>
              <div>{toolsUsed}</div>
            </div>
            <div className={styles.infoGroup}>
              <label>Service Provided</label>
              <div>{servicesProvided}</div>
            </div>
          </div>

          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>
              Want to see Alluvium in action?
            </h2>
            <FormSection color="#F2F2F3" />
            {/* <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formField}>
                <label>First name*</label>
                <input type="text" required />
              </div>
              <div className={styles.formField}>
                <label>Last name*</label>
                <input type="text" required />
              </div>
              <div className={styles.formField}>
                <label>Work email*</label>
                <input type="email" required />
              </div>
              <div className={styles.formField}>
                <label>Company name*</label>
                <input type="text" required />
              </div>

              <p className={styles.agreementText}>
                By clicking “Submit”, I agree to the terms set in Alluvium’s
                <a href="#terms"> Terms of Service</a> and{" "}
                <a href="#privacy"> Privacy policy.</a>
              </p>

              <button type="submit" className={styles.submitBtn}>
                Contact Sales
              </button>
            </form> */}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default CaseStudyDetail;
