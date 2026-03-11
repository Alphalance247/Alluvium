import React from "react";
import styles from "../../styles/swp/followUpHero.module.scss";

const FollowUpHero = () => {
  return (
    <div className={styles.followUpHeroWrapper}>
      <div className={styles.followUpHeroOverlay} />
      <div className={styles.followUpHeroBlurBg1} />
      <div className={styles.followUpHeroCircle1} />
      <div className={styles.followUpHeroCircle2} />
      <div className={styles.followUpHeroCircle3} />

      <div className={styles.followUpHeroCard}>
        <div className={styles.followUpHeroCardBlur1} />
        <div className={styles.followUpHeroCardBlur2} />

        <img
          className={styles.followUpHeroImage}
          src="https://placehold.co/629x550"
          alt="SWP Summit"
        />

        <div className={styles.followUpHeroImageGallery}>
          <div className={styles.followUpHeroGalleryContainer}>
            <img
              className={styles.followUpHeroGalleryImage}
              src="https://placehold.co/173x163"
              alt="Gallery 1"
            />
            <img
              className={styles.followUpHeroGalleryImage}
              src="https://placehold.co/171x163"
              alt="Gallery 2"
            />
            <img
              className={styles.followUpHeroGalleryImage}
              src="https://placehold.co/165x163"
              alt="Gallery 3"
            />
          </div>
        </div>

        <div className={styles.followUpHeroContent}>
          <div className={styles.followUpHeroContentGroup}>
            <div className={styles.followUpHeroTextGroup}>
              <h1 className={styles.followUpHeroHeading}>
                Get 20% Off SWP Summit
              </h1>
              <div className={styles.followUpHeroLocationBox}>
                <h2 className={styles.followUpHeroLocationText}>London 2026</h2>
              </div>
              <p className={styles.followUpHeroDescription}>
                Join global workforce leaders and hear directly from Alluvium's
                CEO and other industry experts.
              </p>
            </div>
            <p className={styles.followUpHeroNote}>
              Exclusive partner discount for Alluvium network
            </p>
          </div>

          <div className={styles.followUpHeroButtonGroup}>
            <button className={styles.followUpHeroButton}>
              Claim 20% Discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpHero;
