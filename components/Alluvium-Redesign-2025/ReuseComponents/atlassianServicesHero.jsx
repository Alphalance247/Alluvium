import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/atlassianserviceshero.module.scss";
import HeroHeading from "./heroHeading";
import { Lines } from "./Lines";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";

const AtlassianServicesHero = ({
  variantHeading = "default",
  withLink = false,
  heading,
  subhead,
  variantLine = "default",
  withLines = true,
  buttonText,
  withBtn = true,
  showParagraph,
  subsec,
  variantMargingFix,
  url,
}) => {
  return (
    <section className={styles.atlassian__services__hero}>
      <div className={styles.sub__head__hero}>
        <div className={`${styles.hero__head} `}>
          <HeroHeading
            variant={variantHeading}
            withLink={withLink}
            heading={heading}
            subhead={subhead}
            showParagraph={showParagraph}
            subsec={subsec}
            variantMargingFix={variantMargingFix}
          />

          {withBtn && (
            <Link href={url}>
              <Button size="mediumL">{buttonText}</Button>
            </Link>
          )}
        </div>
        {withLines && (
          <div style={{ maxWidth: "1272px", margin: "auto" }}>
            <Lines variant={variantLine} />
          </div>
        )}
      </div>
    </section>
  );
};

export default AtlassianServicesHero;
