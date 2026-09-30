import Container from "components/Alluvium-Redesign-2026/common/container";

const TILES = [
  {
    title: "Tell, in one line, which AI to reach for on any task",
    desc: "Work in the record, or judgment across systems. One rule, no debates.",
    icon: <path d="M4 12h16M14 6l6 6-6 6" />,
  },
  {
    title: "Get three real wins with Claude in your first hour",
    desc: "No setup, no new software, nothing your IT team will object to.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Connect Claude to your platform safely",
    desc: "Every legitimate path, through the vendor's own front door - and exactly what it can and cannot touch.",
    icon: (
      <>
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Put AI to work on the jobs that matter",
    desc: "The close, the CMDB, the pipeline, the comp cycle, the inbox - the sprawl problem, solved.",
    icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  },
  {
    title: "Set up AI governance you can defend",
    desc: "To a regulator, an auditor, or the most conservative buyer in the building.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 15h4M3 10h18" />
      </>
    ),
  },
  {
    title: "Read the AI meter before it reads your budget",
    desc: "Seats, credits, units and tokens - what agentic AI really costs on your platform, before the invoice explains it to you.",
    icon: <path d="M12 3v18M7 8h7a3 3 0 010 6H8a3 3 0 000 6h9" />,
  },
];

export default function Learn() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="h-0 w-5 border-t-4 border-default-100" />
            <span className="font-sans text-sm font-bold uppercase tracking-wide leading-4 text-grey-900">
              Inside every platform book
            </span>
          </div>
          <h2 className="font-serif text-4xl font-bold leading-10 text-grey-900">
            What you will be able to do by Monday
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {TILES.map((tile) => (
              <div key={tile.title} className="flex flex-col gap-4 overflow-hidden rounded-2xl bg-secondary-100 p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white outline outline-1 -outline-offset-1 outline-tertiary-100">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1D2939"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {tile.icon}
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-sans text-lg font-bold leading-7 text-grey-700">{tile.title}</div>
                  <div className="font-sans text-base font-medium leading-6 text-grey-700">{tile.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-primary-25 px-4 py-3 outline outline-1 -outline-offset-1 outline-primary-200">
            <span className="font-sans text-lg font-bold leading-7 text-grey-700">AI drafts. </span>
            <span className="font-sans text-lg font-bold leading-7 text-primary-500">Humans decide.</span>
            <span className="font-sans text-lg font-bold leading-7 text-grey-700">
              {" "}
              Written for the person who runs the platform, not the person who builds the models.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
