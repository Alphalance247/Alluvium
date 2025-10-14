import Button from "components/atlassian-service-reuse/Button";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import Link from "next/link";
import JiraService from "components/ITSM-SERVICES/jiraService";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import styles from "../../../styles/licence.module.scss";
import JiraTools from "components/ITSM-SERVICES/jiraTools";
import Head from "next/head";
import { useEffect } from "react";

const ItsmServices = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>ITSM Implementation | Alluvium | alluvium.net</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Build Smart Service Desks with Alluvium. Alluvium implements ITSM solutions using Jira Service Management to help teams manage incidents, requests, and assets efficiently."
        />
        <meta
          name="keywords"
          content="ITSM implementation, Jira Service Management, IT support automation, Atlassian ITSM, service desk setup."
        />
      </Head>
      <div
        className="calendly-inline-widget"
        data-url="https://sites.ziftsolutions.com/atlassian.ziftsolutions.com/8a9983a0941717d501942bae0d304e03"
        style={{ minWidth: "100%", height: "800px", borderRadius: "25px" }}
      ></div>
    </Layout>
  );
};

export default ItsmServices;
