import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import styles from "../../styles/licence.module.scss";
import FeatureCard from "components/atlassian-service-reuse/FeatureCard";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import { FaSlash } from "react-icons/fa";

const WhyMigrate = ({
  data,
  heading,
  description,
  largeGap = false,
  threeColumn = false,
  freeconsult = false,
}) => {
  return (
    <div className={`container-fluid ${styles.migration}`}>
      <div className={`container mx-auto ${styles.atlassianCloud}`}>
        <AtlassianSubHead headings={heading} strategy={description} />
        <div
          className={`${styles.cloudcontent} ${
            largeGap ? styles["cloudcontent--largeGap"] : ""
          }
          ${threeColumn ? styles["cloudcontent--threeColumn"] : ""}
          `}
        >
          {data &&
            data.map((el) => {
              return (
                <FeatureCard
                  key={el.id}
                  number={el.showNumber ? el.id : null}
                  icon={el.icon}
                  heading={el.headings}
                  description={el.paragraphs}
                  link={el.link}
                  buttonText={el.buttonText}
                  buttonVariant={el.buttonVariant}
                  buttonSize={el.buttonSize}
                  variant={el.variant}
                  listItems={el.listItems}
                />
              );
            })}
        </div>
        {freeconsult && (
          <div className=" text-center my-5">
            <Link
              className={styles.link}
              href="/support/contact#schedule-a-call"
            >
              <Button size="large">Book a Free Consult</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyMigrate;
