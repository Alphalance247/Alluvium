import Image from "next/legacy/image";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/authorBio.module.scss";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

const AuthorBio = () => {
  return (
    <section>
      <div className={`${styles?.about__alluvium} ${styles.rounding}`}>
        <p className={styles?.about}>About alluvium</p>

        <p className={styles?.ptag}>
          The research and insights presented in this paper are made possible
          through the technology of , a leader in team collaboration and service
          management. Atlassian’s commitment to providing a secure and reliable
          platform is demonstrated through its robust privacy program and
          adherence to widely accepted security standards and certifications.{" "}
          <span className={styles?.psubtag}>
            The company holds certifications including AICPA SOC, ISO 27001, and
            PCI DSS. It also offers compliant solutions for the public sector
            with its FedRAMP certification.
          </span>
        </p>

        <p className={styles?.ptag}>
          Alluvium is a Service Management Specialized Solution Partner of
          Atlassian. Alluvium provides strategic support that helps customers
          realize the full potential of their Atlassian investments.
        </p>

        <p className={styles?.ptag}>
          <span className={styles?.psubtag}>
            We've been doing this for a while - in fact, our team delivers well
            over 10,000 hours of Atlassian implementations every year.
          </span>
          That's given us a deep understanding of what works and, more
          importantly, how to bring real value to our clients. We believe that
          generous support shouldn't be a luxury, but a standard part of the
          service.
        </p>

        <p className={styles?.ptag}>
          We're confident that we can provide the proactive and comprehensive
          support you've been looking for, ensuring your Atlassian tools are not
          just functional, but truly driving your business forward. We'd love to
          hear more about your specific challenges and how we can help.
        </p>
      </div>

      <div className={styles.author__encap}>
        <p className={styles?.about__author__top}>About the author</p>
        <div className={styles.about__author}>
          <div className={styles.author__left}>
            <div className={""}>
              <Image
                src="/assets/redesign-2025/whitepaper/user.png"
                alt="Taiwo Ojo"
                width={117}
                height={117}
              />
            </div>
            <p className={styles.author__label}>The Author</p>
            <div className={styles.author__contact}>
              <Link
                href="mailto:taiwo@alluvium.net"
                className={styles.contact__link}
              >
                <div className={styles.contact__link}>
                  <MdOutlineEmail className={styles.contact__icon} />
                  <u>
                    <span>taiwo@alluvium.net</span>
                  </u>
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/taiwoojo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.contact__link}>
                  <FaLinkedin className={styles.contact__icon} />
                  <span>linkedin.com/in/taiwoojo</span>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.author__bio}>
            <p className={styles.ptag}>
              <span className={styles.psubtag}>Taiwo Ojo</span> is a
              distinguished technology leader with nearly two decades of
              experience and ex Big Four, specializing in IT Service Management,
              digital transformation, and AI governance.
            </p>
            <p className={styles.ptag}>
              As CEO of Alluvium, he has successfully led some of the largest
              Atlassian tool consolidations, consistently delivering agility,
              scale, and significant cost savings for enterprise companies
              globally. Passionate about responsible AI, Taiwo is dedicated to
              helping organizations innovate securely, protecting sensitive
              data, and maintaining their competitive edge in the AI-driven
              economy. He has also authored
              <span className={styles.psubtag}>
                {" "}
                "The Invisible Threat: Shadow AI",
              </span>
              providing expert insights on how unmanaged AI can pose a threat to
              data and intellectual property.
            </p>

            <p className={styles.ptag}>
              Taiwo is{" "}
              <span className={styles.psubtag}>
                {" "}
                President of the JayTee Ojo Foundation,
              </span>{" "}
              leveraging IT and sports to foster global competitiveness in young
              people. He believes in the power of human connection and is always
              happy to exchange ideas over breakfast, lunch, or dinner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AuthorBio;
