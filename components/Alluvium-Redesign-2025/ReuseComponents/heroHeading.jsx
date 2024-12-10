import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/hero-heading.module.scss";
import Link from "next/link";
import Image from "next/image";

const HeroHeading = ({
  update,
  heading,
  subhead,
  updateSub,
  updateSign = false,
  variant,
  withLink = true,
}) => {
  return (
    <div className={styles.hero__heading}>
      {withLink && (
        <Link href="/">
          <p className={styles.new__update}>
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
            {updateSign && <span className={styles.span2}>{" > "}</span>}
          </p>
        </Link>
      )}

      <h1 className={`${styles.headings} ${styles[`headings--${variant}`]}`}>
        {heading}
      </h1>
      <p
        className={`${styles.paragraph__transform} ${
          styles[`paragraph__transform--${variant}`]
        }`}
      >
        {subhead}
      </p>
    </div>
  );
};

export default HeroHeading;
