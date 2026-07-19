"use client";
import Layout from "components/layout";
import LeadForm from "components/leadform";
const StrategicAI = () => {
  return (
    <Layout>
      <LeadForm
        dataUrl={"https://pest.ec2.alluvium.net/api/blog/embeded/strategy"}
      />
    </Layout>
  );
};

export default StrategicAI;
