"use client";
import Layout from "components/layout";
import Container from "components/Alluvium-Redesign-2026/common/container";
import PolicyHero from "components/Alluvium-Redesign-2026/common/policyHero";
import PolicyBody from "components/Alluvium-Redesign-2026/common/policyBody";
import PolicySidebar from "components/Alluvium-Redesign-2026/common/policySidebar";
import { policySections } from "./policySections";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PolicyHero
        title="Privacy Notice"
        effectiveDate="August 31, 2026"
        note="This Notice supersedes all prior versions as of the effective date above."
      />
      <section className="w-full bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_256px] gap-12 lg:gap-20 items-start">
          <div className="min-w-0 max-w-3xl">
            <PolicyBody sections={policySections} />
          </div>
          <PolicySidebar sections={policySections} />
        </Container>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
