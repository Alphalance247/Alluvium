"use client";
import { useState } from "react";
import Layout from "components/layout";
import Container from "components/Alluvium-Redesign-2026/common/container";
import PolicyHero from "components/Alluvium-Redesign-2026/common/policyHero";
import PolicyBody from "components/Alluvium-Redesign-2026/common/policyBody";
import PolicySidebar from "components/Alluvium-Redesign-2026/common/policySidebar";
import CookieSettingsModal from "components/Alluvium-Redesign-2026/common/cookieSettingsModal";
import { savePreferences } from "components/Alluvium-Redesign-2026/common/cookiePreferences";
import RichText from "components/Alluvium-Redesign-2026/whitepaper/richText";
import { policySections } from "./policySections";

const CookiePolicy = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <Layout heroTheme="light">
      <PolicyHero
        title="Cookie Policy"
        effectiveDate="August 31, 2026"
        note="This Notice supersedes all prior versions as of the effective date above."
      />
      <section className="w-full bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_256px] gap-12 lg:!pt-10  lg:gap-20 items-start">
          <div className="min-w-0 max-w-3xl flex flex-col items-start gap-10">
            <RichText
              runs={[
                { bold: true, text: "Alluvium" },
                ' ("Alluvium," "we," "us," or "our")',
                { break: true },
                "This Cookie Policy explains how Alluvium uses cookies and similar tracking technologies on our website and related online services. It tells you what cookies we use, why we use them, and how you can control them. This policy applies to all Alluvium websites and online services.",
              ]}
            />

            <PolicyBody sections={policySections} />

            <button
              type="button"
              onClick={() => setSettingsOpen(true)}
              className="px-5 py-3 rounded-lg bg-default-100 border border-default-100 shadow-sm text-white text-base font-bold font-sans"
            >
              Cookie settings
            </button>
          </div>
          <PolicySidebar sections={policySections} />
        </Container>
      </section>

      {settingsOpen && (
        <CookieSettingsModal
          onClose={() => setSettingsOpen(false)}
          onSave={(preferences) => {
            savePreferences(preferences);
            setSettingsOpen(false);
          }}
        />
      )}
    </Layout>
  );
};

export default CookiePolicy;
