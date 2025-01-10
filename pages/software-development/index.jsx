import Layout from "components/layout";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Link from "next/link";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import { SoftwareDeveloplemtCard } from "data";
import Button from "components/atlassian-service-reuse/Button";
import styles from "../../styles/atlassian-services-style/generalstyle.module.scss";

const SoftwareDevelopment = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading1="Innovative Software Development & Design Services"
        contentsheading2="Our team of experts go beyond traditional software development to provide comprehensive solutions that drive efficiency, enhance customer experiences, and propel your business forward."
        button1={
          <Link href="/contact-us" passHref>
            <Button size="large">Schedule a Call</Button>
          </Link>
        }
      />

      <ServerToCloud
        image2={true}
        heading="Software That Evolves with Your Business Growth"
        paragraph="At Alluvium, we understand that one-size-fits-all solutions don't work for every business. That's why we specialize in crafting custom software solutions that perfectly align with your unique needs and goals. we specialize in crafting custom software solutions that perfectly align with your unique needs. Our team of skilled developers and designers will work closely with you to create innovative solutions that streamline your operations, enhance efficiency, and provide a competitive edge."
        image2Url="/assets/licence-image/softwarepic.svg"
        alt2="sofware"
      />

      <WhyMigrate
        heading="How We Can Help You"
        description="Beyond our diverse software development and design solutions, what sets Alluvium apart is our deep understanding of your unique needs and our commitment to delivering exceptional results."
        data={SoftwareDeveloplemtCard}
      />

      <div className="container-fluid">
        <div className={`container mx-auto text-center ${styles.agilestyle}`}>
          <h2>Our Comprehensive Service Offerings</h2>
        </div>
        <ServerToCloud
          image1={true}
          paragraph="We create bespoke software tailored to your specific business needs. Whether you need a new application from scratch or enhancements to existing systems, we ensure the solution aligns perfectly with your objectives. "
          heading="Custom Software Development"
          image1Url="/assets/licence-image/customdevelopment.svg"
          alt1="softwarepic"
          listItem={true}
          softwareList={[
            "We conduct in-depth analysis to understand your business goals and challenges.",
            "We design and develop software solutions tailored to your specific needs.",
            "We follow agile methodologies for flexibility and efficiency.",
            "We rigorously test our software to ensure high quality and performance.",
          ]}
        />

        <ServerToCloud
          image2={true}
          paragraph="UI/UX design services focus on creating intuitive and aesthetically pleasing user interfaces. We prioritize user experience by designing interfaces that are not only visually appealing but also easy to navigate."
          heading="UI/UX Design"
          image2Url="/assets/licence-image/uiux.svg"
          alt2="ui/ux"
          listItem={true}
          softwareList={[
            "We create intuitive and visually appealing interfaces that enhance the user experience.",
            "We conduct user research to understand your target audience and their needs.",
            "We focus on usability, accessibility, and aesthetics in our designs.",
            "We iterate and refine our designs based on user feedback.",
          ]}
          display="primary"
        />

        <ServerToCloud
          image1={true}
          paragraph="We specialize in developing mobile applications for iOS and Android platforms. Our mobile app development services cover the entire lifecycle, from concept and design to development, testing, and deployment."
          heading="Mobile App Development"
          image1Url="/assets/licence-image/websitecoding.svg"
          alt1="frontend"
          listItem={true}
          softwareList={[
            "We develop high-quality mobile apps for iOS and Android platforms.",
            "We specialize in both native and hybrid app development.",
            "We optimize our apps for performance and user experience.",
            "We ensure compatibility across different devices and operating systems.",
          ]}
        />

        <ServerToCloud
          image2={true}
          paragraph="Our web application development services involve creating robust and scalable web-based solutions. We use modern frameworks and technologies to build applications that are responsive, secure, and capable of handling high traffic."
          heading="Web Application Development"
          image2Url="/assets/licence-image/coding.svg"
          alt2="softwareconcept"
          listItem={true}
          softwareList={[
            "We create responsive websites that look great on all devices.",
            "We specialize in e-commerce solutions, content management systems, and other web-based applications.",
            "We optimize websites for search engines to improve visibility.",
            "We ensure accessibility and compliance with web standards.",
          ]}
          display="primary"
        />

        <ServerToCloud
          image1={true}
          paragraph="We offer API integration services to enhance the functionality and connectivity of your software products. By integrating third-party APIs or creating custom APIs, we enable seamless communication between different systems, improving efficiency and expanding the capabilities of your software."
          heading="API Integration"
          image1Url="/assets/licence-image/api.svg"
          alt1="apiintegrationframe"
          listItem={true}
          softwareList={[
            "We seamlessly integrate your software with third-party applications and services.",
            "We develop custom APIs to meet your specific requirements.",
            "We ensure secure and efficient data exchange between systems.",
            "We provide ongoing support and maintenance for API integrations.",
          ]}
        />
      </div>
    </Layout>
  );
};

export default SoftwareDevelopment;
