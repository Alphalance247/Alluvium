import Container from "components/Alluvium-Redesign-2026/common/container";
import { AMAZON_URL } from "./shared";

const CREDS = [
  "8 platform books + 1 capstone",
  "Kindle, paperback and audiobook",
  "From Alluvium",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary-900">
      {/* <div className="pointer-events-none absolute left-[20rem] top-[-242px] h-[1052px] w-[1052px] rounded-full bg-tertiary-200 mix-blend-color-dodge" /> */}
      <Container className="relative flex flex-col items-center gap-7 text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-serif text-3xl font-bold leading-[3rem] text-white lg:text-5xl lg:leading-[68px]">
            Your platform has AI.
            <br />
            You have Claude.
            <br />
            <span className="text-default-100">The power is in the loop.</span>
          </h1>
          <p className="max-w-[769px] font-sans text-lg font-medium leading-7 text-white">
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

        <div className="flex flex-wrap justify-center gap-2">
          {CREDS.map((cred) => (
            <span
              key={cred}
              className="rounded-3xl px-4 py-2 font-sans text-sm font-semibold leading-5 text-white/80 outline outline-1 -outline-offset-1 outline-tertiary-300"
            >
              {cred}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
