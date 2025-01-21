import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/hero-heading.module.scss";
import Link from "next/link";
import Image from "next/image";

const HeroHeading = ({
  update,
  heading,
  subhead,
  updateSub,
  updateVariant,
  updateSign = false,
  variant,
  withLink = true,
  subsec,
  showParagraph = true,
  headSection = "primary",
  withParagragh = true,
  variantMargingFix = "independent",
  headingAvailable = true,
}) => {
  return (
    <div className={styles.hero__heading}>
      {withLink &&
        (showParagraph ? (
          <p
            className={`${styles.sub__sec} ${
              styles[`sub__sec--${headSection}`]
            }`}
          >
            {subsec}
          </p>
        ) : (
          <Link href="/">
            <p
              className={`${styles.new__update} ${
                updateVariant ? styles[`new__update--${updateVariant}`] : ""
              }`}
            >
              {updateSign && (
                <span className={styles.span1}>
                  {" "}
                  <Image
                    src="/assets/redesign-2025/Dots.svg"
                    width={10}
                    height={10}
                    alt="dot"
                  />{" "}
                  {updateSub}
                </span>
              )}

              {update}
              {/* {updateSign && <span className={styles.span2}>{" > "}</span>} */}
            </p>
          </Link>
        ))}
      {headingAvailable && (
        <h1
          className={`${styles.headings} ${styles[`headings--${variant}`]} ${
            withParagragh
              ? styles.headingWithParagrapgh
              : styles.headingWithNoParagrapgh
          }`}
        >
          {heading}
        </h1>
      )}
      {withParagragh && (
        <p
          className={`${styles.paragraph__transform} ${
            styles[`paragraph__transform--${variant}`]
          } ${styles[`paragraph__transform--${variantMargingFix}`]}`}
        >
          {subhead}
        </p>
      )}
    </div>
  );
};

export default HeroHeading;
