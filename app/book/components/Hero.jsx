import Image from "next/image";
import SignupForm from "./SignupForm";
import Container from "components/Alluvium-Redesign-2026/common/container";

const CREDS = [
  "8 platform books + 1 capstone",
  "Kindle, paperback and audiobook",
  "From Alluvium",
];

export default function Hero() {
  return (
    <section className="bg-secondary-900 relative">
      {/* <Image
        src="/book/shape.png"
        width={700}
        height={700}
        className="absolute right-0 z-0"
        alt="display shape"
      /> */}
      <Container className="relative z-100 grid grid-cols-[1.15fr_0.85fr] gap-[3rem] items-center max-[900px]:grid-cols-1">
        <div className="grid gap-6">
          <div className="inline-flex items-center gap-2.5 w-fit self-start rounded-3xl py-2 pl-4 pr-2 outline outline-1 -outline-offset-1 outline-[#2f6fe4]/90">
            <span className="font-sans text-xs font-extrabold uppercase tracking-wide leading-4 text-white">
              The book series
            </span>
            <span className="rounded-3xl bg-[#2f6fe4] px-3 py-1 font-sans text-xs font-extrabold uppercase tracking-wide leading-4 text-white">
              Launching soon
            </span>
          </div>

          <h1 className="font-serif tracking-[-0.5px] text-3xl leading-[3rem] lg:text-[3.2rem] font-bold lg:leading-[68px] text-white max-w-[38rem]">
            Your platform has AI.
            <br />
            You have Claude.
            <br />
            <span className="text-default-100">The power is in the loop.</span>
          </h1>

          <p className="font-sans text-lg font-medium leading-7 text-white/90 max-w-[35rem]">
            Nine plain-English books for people who run their work on Atlassian,
            ServiceNow, Microsoft 365, Salesforce, SAP, Workday, Oracle or
            Google Workspace - and who are not AI experts. No hype. Just what to
            do on Monday morning.
          </p>

          <div className="flex flex-wrap items-start gap-2">
            {CREDS.map((cred) => (
              <span
                key={cred}
                className="rounded-3xl px-4 py-2 font-sans text-sm font-semibold leading-5 text-[#E7E9EA] outline outline-1 -outline-offset-1 outline-[#606A72]"
              >
                {cred}
              </span>
            ))}
          </div>
        </div>

        <SignupForm
          idPrefix="h"
          anchorId="signup"
          source="hero"
          heading="Get early access"
          subtext="Be first to know when the series goes live, and get the launch-week price on every book."
          namePlaceholder="Maya"
          fineprint={
            "One email when the books launch, one with the launch price.\nUnsubscribe any time."
          }
        />
      </Container>
    </section>
  );
}
