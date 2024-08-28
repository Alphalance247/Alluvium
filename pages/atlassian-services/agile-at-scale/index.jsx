import Layout from "components/layout";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import { AgileCard } from "data";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import styles from "../../../styles/atlassian-services-style/generalstyle.module.scss";

const AgileAtScale = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading1="Empower Your Enterprise with Agile at Scale"
        contentsheading2="Starting out with Agile or seeking assistance in scaling it throughout your enterprise? We are here to guide you every step of the way."
        button1={
          <Link href="/support/contact#schedule-a-call" passHref>
            <Button size="large">Schedule a Call</Button>
          </Link>
        }
      />

      <ServerToCloud
        image2={true}
        heading="Understanding Agile at Scale"
        paragraph="In today's fast-paced business landscape, agility is essential for success. Our experts can help you overcome the challenges of adopting agile practices and accelerate your digital transformation, that way, your software teams get to deliver digital products and services faster."
        image2Url="/assets/licence-image/Agile.svg"
        alt2="agilepic"
      />

      <WhyMigrate
        heading="Our Comprehensive Agile at Scale Services"
        description="Our Agile at Scale services are designed to help organizations implement and optimize agile practices across large teams and departments. We offer a range of services."
        data={AgileCard}
      />

      <ServerToCloud
        image1={true}
        heading="Our Agile At Scale Solution with SAFe Framework"
        paragraph="As your trusted guide to agile transformation, we're here to help you scale agile across your enterprise."
        paragraphs={true}
        para1="We specialize in implementing the Scaled Agile Framework (SAFe), a proven methodology for aligning teams, optimizing workflows, and delivering value at scale."
        para2="Our SAFe solutions are tailored to meet your organization's unique needs, ensuring a seamless transition to agile at scale. Our team of experienced agile coaches and consultants will guide you through the implementation process, providing training, support, and ongoing guidance."
        image1Url="/assets/licence-image/agilesafe.svg"
        alt2="agilepic"
      />

      <ServerToCloud
        image2={true}
        heading="Agile At Scale solutions with Jira Align"
        paragraph="IIn the dynamic world of modern business, adaptability is paramount for achieving success. To truly embody agility at scale, reliance on more than mere sticky notes is crucial. Essential components include enhanced work visibility, precise reporting, a collective grasp of customer value, and seamless vertical alignment among teams, all pivotal for success."
        image2Url="/assets/licence-image/agilestat.svg"
        alt2="agilepic"
        variant="primary"
        imageContent={true}
      />

      <div className={`container mx-auto text-center ${styles.agilestyle}`}>
        <h2>Why Agile at Scale Matters to Your Organization</h2>
      </div>
      <ServerToCloud
        image2={true}
        paragraph="By streamlining workflows and eliminating bottlenecks, Agile at Scale enables your teams to work more efficiently and productively. Automation of tasks, improved collaboration, and optimized resource allocation lead to significant time and cost savings."
        heading="Increase Efficiency and Productivity"
        image2Url="/assets/licence-image/agilesettin.svg"
        alt2="cloudpic"
        display="primary"
        variant="secondary"
      />
      <ServerToCloud
        image1={true}
        paragraph="Agile fosters a culture of experimentation and continuous improvement, empowering your teams to innovate and adapt to changing market conditions. By breaking down silos and encouraging collaboration, you can identify new opportunities and develop innovative solutions."
        heading="Enhance Innovation"
        image1Url="/assets/licence-image/agileguru.svg"
        alt2="cloudpic"
        variant="secondary"
      />

      <ServerToCloud
        image2={true}
        paragraph="Agile at Scale helps you deliver products and services faster and with higher quality, meeting the evolving needs and expectations of your customers. By focusing on customer feedback and delivering value incrementally, you can build stronger relationships and loyalty."
        heading="Improve Customer Satisfaction"
        image2Url="/assets/licence-image/agileguru.svg"
        alt2="cloudpic"
        display="primary"
        variant="secondary"
      />
    </Layout>
  );
};

export default AgileAtScale;
