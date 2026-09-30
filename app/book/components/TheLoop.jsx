import Container from "components/Alluvium-Redesign-2026/common/container";
import Image from "next/image";

const STEPS = [
  {
    n: "01",
    text: "Rovo, Now Assist, Copilot, Agentforce, Joule, Illuminate, Fusion agents, Gemini - each one lives inside its own walls, with the records and the permissions.",
  },
  {
    n: "02",
    text: "Claude is the judgment layer that travels across all of them - the email thread, the ticket, the spreadsheet and the contract at once.",
  },
  {
    n: "03",
    text: "Every book shows you, in one line, which to reach for on any task - then how to connect them safely and govern the bill.",
  },
];

export default function TheLoop() {
  return (
    <section className="bg-secondary-100">
      <Container className="flex items-center gap-16 max-[900px]:flex-col">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="h-0 w-5 border-t-4 border-default-100" />
              <span className="font-sans text-sm font-bold uppercase tracking-wide leading-4 text-grey-900">
                The one idea
              </span>
            </div>
            <h2 className="max-w-[29rem] font-serif text-4xl font-bold leading-10 text-grey-900">
              Stop asking which AI to use
            </h2>
            <p className="max-w-[35rem] font-serif text-xl font-semibold leading-8 text-grey-700">
              Your platform&apos;s AI{" "}
              <span className="text-default-100">
                remembers and acts inside the system.
              </span>{" "}
              Claude{" "}
              <span className="text-default-100">
                reasons across everything.
              </span>{" "}
              The power is in the loop between them.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {STEPS.map((step) => (
              <div key={step.n} className="flex items-start gap-4">
                <span className="font-sans text-base font-bold leading-6 text-default-100">
                  {step.n}
                </span>
                <span className="flex-1 font-sans text-base font-medium leading-6 text-grey-700">
                  {step.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex h-[534px] w-full flex-1 items-center max-[900px]:hidden"
          aria-hidden="true"
        >
          <Image
            src="https://d38rkvi67t4lhi.cloudfront.net/assets/1790778147868-Image-1.png"
            alt=""
            width={592}
            height={534}
            loading="lazy"
            className="h-[534px] w-full flex-1 rounded-lg object-cover max-[900px]:h-auto"
          />
        </div>
      </Container>
    </section>
  );
}
