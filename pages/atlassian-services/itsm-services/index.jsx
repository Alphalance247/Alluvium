import Button from "components/atlassian-service-reuse/Button";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import Link from "next/link";
import JiraService from "components/ITSM-SERVICES/jiraService";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import styles from "../../../styles/licence.module.scss";
import JiraTools from "components/ITSM-SERVICES/jiraTools";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import { chooseUsAlluvium } from "data";

const ItsmServices = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading1="IT SERVICE MANAGEMENT"
        contentsheading2="Empower your service teams with industry-leading IT Service Management tool Jira Service Management to deliver exceptional service"
        button1={
          <Link href="/support/contact#schedule-a-call" passHref>
            <Button size="large">Schedule a Call</Button>
          </Link>
        }
      />

      <ServerToCloud
        image2={true}
        paragraph="Over 45,000 companies use Jira Service Management. JSM unifies all service teams on a single platform, streamlining the workflow between Development and IT Operations. It empowers teams to embrace a service-oriented approach, enabling them to deliver outstanding experiences for both employees and customers."
        heading="Deliver exceptional support with Jira Service Management"
        text="With our Atlassian-certified consultants and ITSM expertise, we tailor Jira Service Management to meet your organization’s specific needs, ensuring the tool optimizes your processes for maximum efficiency"
        image2Url="/assets/licence-image/itsmcampaign.svg"
        alt2="cloudpic"
        showWithImage={true}
      />

      <JiraService />

      <div className={`container-fluid ${styles.seamlessMigration}`}>
        <GetStarted
          heading="Ready to Implement ITSM Into Your Organization?"
          text={false}
          variant="primary"
          button1={
            <Link href="/support/contact#schedule-a-call" passHref>
              <Button size="large">Book a Free Demo With Us</Button>
            </Link>
          }
        />
      </div>

      <JiraTools />

      <ServerToCloud
        image1={true}
        paragraph="From initial setup and configuration to custom automations and workflow optimization, we tailor the implementation process to meet your unique needs."
        heading="Jira Service Management, Completely Tailored to Your Needs."
        text="By leveraging JSM’s powerful features, such as automation rules, incident management, and self-service portals, we help you enhance your service delivery, reduce response times, and improve overall customer satisfaction."
        image1Url="/assets/licence-image/itsmtools.svg"
        alt2="cloudpic"
      />

      <ServerToCloud
        paragraph="We understand that each organization has distinct requirements and challenges. That's why our approach to JSM implementation is both flexible and comprehensive. We begin with a detailed analysis of your current processes and goals, crafting a customized plan that aligns with your strategic objectives. This plan will include all expected steps, timelines and costs (also including license costs)"
        heading="Our Approach to ITSM implementation"
        display="primary"
        variant="primary"
        callToAction={
          <Link href='/atlassian-services/atlassian-licence'>
            <Button size="large">Learn More About License Management</Button>
          </Link>
        }
      />

      <ServerToCloud
        image2={true}
        paragraph="We understand that each organization has distinct requirements and challenges. That's why our approach to JSM implementation is both flexible and comprehensive. We begin with a detailed analysis of your current processes and goals, crafting a customized plan that aligns with your strategic objectives. This plan will include all expected steps, timelines and costs (also including license costs)."
        heading="Implementation"
        image2Url="/assets/licence-image/agileguru.svg"
        alt2="cloudpic"
        display="primary"
        variant="secondary"
      />
      <ServerToCloud
        image1={true}
        paragraph="Ensuring your teams are comfortable and proficient in Jira Service Management is a cornerstone of our implementation projects. Our comprehensive tool training is designed to empower your team, equipping them with the knowledge and skills needed for seamless daily operations."
        heading="Training"
        image1Url="/assets/licence-image/develop.svg"
        alt2="cloudpic"
        variant="secondary"
      />

      <ServerToCloud
        image2={true}
        paragraph="At Alluvium, our commitment to your success extends beyond implementation. We offer dedicated support packages and subscriptions to provide continuous assistance and expertise, ensuring your systems run smoothly and your team remains confident long after the initial rollout."
        heading="Post-Implementation Support"
        image2Url="/assets/licence-image/spinneratlassian.svg"
        alt2="cloudpic"
        display="primary"
        variant="secondary"
      />

      <ChooseAlluvium
        choose="Why Choose Us"
        strategy="From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey."
        chooseUsAlluvium={chooseUsAlluvium}
      />
    </Layout>
  );
};

export default ItsmServices;
