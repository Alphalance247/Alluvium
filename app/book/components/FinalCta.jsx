import Container from "components/Alluvium-Redesign-2026/common/container";
import { AMAZON_URL } from "./shared";

export default function FinalCta() {
  return (
    <section className="bg-secondary-900">
      <Container className="flex flex-col items-center gap-7 text-center">
        {/* <div className="flex items-center justify-center gap-2">
          <span className="h-0 w-5 border-t-4 border-default-100" />
          <span className="font-sans text-sm font-bold uppercase tracking-wide leading-4 text-white">
            Launching soon
          </span>
        </div> */}

        <div className="flex flex-col gap-8">
          <h2 className="max-w-[38rem] font-serif text-4xl font-bold leading-10 text-white">
            Be the first to read the loop
          </h2>
          <p className="max-w-[38rem] font-sans text-lg font-medium leading-7 text-white">
            Nine plain-English books for people who run their work on Atlassian,
            ServiceNow, Microsoft 365, Salesforce, SAP, Workday, Oracle or
            Google Workspace - and who are not AI experts. No hype. Just what to
            do on Monday morning.
          </p>
        </div>

        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-default-100 px-5 py-3 font-sans text-base font-bold text-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] outline outline-1 -outline-offset-1 outline-default-200 transition-colors duration-150 hover:bg-default-200"
        >
          Buy on Amazon
        </a>
      </Container>
    </section>
  );
}
