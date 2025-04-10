import Image from "next/image";
import styles from "../../../styles/atlassian-services-style/supports.module.scss";
import HeroHeading from "../ReuseComponents/heroHeading";

const AboutAtlassianSupport = () => {
  return (
    <section className={styles.about__support}>
      <div>
        <div className=" m-auto">
          <Image
            src="/assets/redesign-2025/support/Logo.png"
            width={233}
            height={146}
            alt="support"
          />
        </div>

        <div className={styles.content}>
          <HeroHeading
            heading={"About Our Atlassian Support"}
            subhead={
              "We offer dedicated Atlassian support to help you solve your Atlassian challenges. Our support is delivered by our certified Atlassian consultants who are happy to help you with functional and technical questions regarding Atlassian apps and 3rd party Marketplace apps."
            }
            withLink={false}
            variant={"secondary"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutAtlassianSupport;
