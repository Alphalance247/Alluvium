import Container from "components/Alluvium-Redesign-2026/common/container";
import Image from "next/image";

const BOOKS = [
  {
    badge: "Book 1",
    badgeClass: "bg-[#0C66E4]",
    pairClass: "text-[#6DA9FE]",
    platform: "Atlassian",
    pair: "Claude + Rovo",
    desc: "For Jira and Confluence teams. If you can write a Jira ticket, you can do everything in this book.",
  },
  {
    badge: "Book 2",
    badgeClass: "bg-[#E37915]",
    pairClass: "text-[#E99444]",
    platform: "ServiceNow",
    pair: "Claude + Now Assist",
    desc: "For ITSM, HR and service teams. If you can raise a change request, you can do this.",
  },
  {
    badge: "Book 3",
    badgeClass: "bg-[#D5A400]",
    pairClass: "text-[#F5CD47]",
    platform: "Microsoft 365",
    pair: "Claude + Copilot",
    desc: "For Outlook, Teams, Word and Excel users. If you can write a decent email, you can do this.",
  },
  {
    badge: "Book 4",
    badgeClass: "bg-[#009BC0]",
    pairClass: "text-[#54BCD5]",
    platform: "Salesforce",
    pair: "Claude + Agentforce",
    desc: "For sales, service and RevOps. If you can run a pipeline review, you can do this.",
  },
  {
    badge: "Book 5",
    badgeClass: "bg-[#4585DE]",
    pairClass: "text-[#C5DDFF]",
    platform: "SAP",
    pair: "Claude + Joule",
    desc: "For S/4HANA, finance and supply chain teams. If you can run an SAP report, you can do this.",
  },
  {
    badge: "Book 6",
    badgeClass: "bg-[#A1560F]",
    pairClass: "text-[#E37915]",
    platform: "Workday",
    pair: "Claude + Illuminate + Sana",
    desc: "For HR and finance on Workday. If you can run a comp cycle, you can do this.",
  },
  {
    badge: "Book 7",
    badgeClass: "bg-[#A78209]",
    pairClass: "text-[#C3B178]",
    platform: "Oracle",
    pair: "Claude + Fusion AI Agents",
    desc: "For ERP, HCM and database teams. If you can survive a quarter-end close, you can do this.",
  },
  {
    badge: "Book 8",
    badgeClass: "bg-[#006E88]",
    pairClass: "text-[#33AFCD]",
    platform: "Google Workspace",
    pair: "Claude + Gemini",
    desc: "For Gmail, Docs and Drive users. If you can write an email, you can do this.",
  },
];

function BookCard({ badge, badgeClass, pairClass, platform, pair, desc }) {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-hidden rounded-lg bg-[#414D57] p-4">
      <div className="flex flex-col gap-4">
        <span
          className={`w-fit rounded-3xl px-3 py-1 font-sans text-xs font-extrabold uppercase leading-4 tracking-wide text-white ${badgeClass}`}
        >
          {badge}
        </span>
        <div className="flex flex-col gap-1">
          <div className="font-sans text-xs font-extrabold uppercase leading-4 tracking-wide text-white/70">
            Compound Intelligence
          </div>
          <div className="font-serif text-2xl font-bold leading-8 text-white">
            {platform}
          </div>
          <div className={`font-sans text-sm font-bold leading-5 ${pairClass}`}>
            {pair}
          </div>
        </div>
      </div>
      <p className="font-sans text-base font-medium leading-6 text-white/80">
        {desc}
      </p>
    </div>
  );
}

export default function Shelf() {
  return (
    <section className="bg-secondary-900">
      <Container className="flex flex-col gap-20">
        <div className="flex items-center gap-16 max-[900px]:flex-col">
          <div className="flex flex-1 flex-col gap-6 ">
            <div className="flex items-center gap-2">
              <span className="h-0 w-5 border-t-4 border-default-100" />
              <span className="font-sans text-sm font-bold uppercase tracking-wide leading-4 text-white">
                The series
              </span>
            </div>
            <h2 className="max-w-[30rem] font-serif text-4xl font-bold leading-10 text-white">
              One idea. Nine books. Your platform is on the shelf.
            </h2>
            <p className="max-w-[35rem] font-sans text-lg font-medium leading-7 text-white">
              Each book is written for the person who runs the system, not the
              person who builds the models - as a friendly back-and-forth
              between Ray, who asks the questions you are actually thinking, and
              Maya, who answers without a single buzzword.
            </p>
          </div>
          <Image
            src="https://d38rkvi67t4lhi.cloudfront.net/assets/1790778147868-BOOK-BRANDING_1-1.png"
            alt="Maya and Ray, the two guides in every Compound Intelligence book"
            width={592}
            height={341}
            loading="lazy"
            className="h-[341px] w-full flex-1 rounded-lg object-cover max-[900px]:h-auto"
          />
        </div>

        <div className="flex w-full flex-col gap-6">
          <div className="grid grid-cols-4 gap-6 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
            {BOOKS.map((book) => (
              <BookCard key={book.badge} {...book} />
            ))}
          </div>

          <div className="flex flex-1 flex-col gap-4 overflow-hidden rounded-lg bg-tertiary-400 p-4">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-3xl bg-[#195DBD] px-3 py-1 font-sans text-xs font-extrabold uppercase leading-4 tracking-wide text-white">
                Book 9
              </span>
              <div className="flex flex-col gap-1">
                <div className="font-sans text-xs font-extrabold uppercase leading-4 tracking-wide text-white/70">
                  the capstone, for the people who approve the spend
                </div>
                <div className="font-serif text-2xl font-bold leading-8 text-white">
                  The Agent Tollbooth
                </div>
                <div className="font-sans text-sm font-bold leading-5 text-[#C5DDFF]">
                  What AI really costs in the enterprise
                </div>
              </div>
            </div>
            <p className="max-w-[53rem] font-sans text-base font-medium leading-6 text-white/80">
              Eight platforms, eight meters, eight bills - and no vendor will
              ever show you the combined picture. This book assembles it:
              assists, credits, AI units, tokens, and the toll every system of
              record now charges for the agents that cross it. Written for CIO
              and CFO offices, FinOps, procurement and platform leads.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
