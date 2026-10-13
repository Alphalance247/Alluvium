import Container from "components/Alluvium-Redesign-2026/common/container";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

const CHECKS = [
  "One simple test for any task",
  "Real wins in your first hour",
  "AI drafts, humans decide",
];

export default function FirstLook() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col gap-20">
        <div className="flex items-center gap-16 max-[900px]:flex-col">
          <Image
            src="https://d38rkvi67t4lhi.cloudfront.net/assets/1790777800549-BOOK-BRANDING_4-1.png"
            alt="Compound Intelligence: Atlassian and claude e-book cover"
            width={512}
            height={614}
            loading="lazy"
            className="h-[614px] w-full flex-1 rounded-lg object-cover max-[900px]:h-auto"
          />

          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="h-0 w-5 border-t-4 border-default-100" />
                <span className="font-sans text-sm font-bold uppercase tracking-[1px] leading-4 text-grey-900">
                  First look - Book 1: ATLASSIAN
                </span>
              </div>
              <h2 className="max-w-[30rem] font-serif text-4xl font-bold leading-10 text-grey-900 tracking-[-0.5px]">
                Your Atlassian just hired an army of AI.
              </h2>
              <p className="max-w-[35rem] font-serif text-xl font-semibold leading-8 text-default-100">
                So who does the thinking?
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {CHECKS.map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <CiCircleCheck color="#E37915" size={24} />
                  <span className="font-sans text-base font-medium leading-6 text-grey-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <p className="max-w-[35rem] font-sans text-base font-medium leading-6 text-grey-500">
              Rovo agents in your Jira project, Claude in every chat, and your
              leadership keeps asking which AI to use. This is the book for the
              person who runs work in Jira and Confluence and is not an AI
              expert. Rovo remembers. Claude reasons. The power is in the loop
              between them. Every platform book in the series follows the same
              shape.
            </p>

            <a
              href="#signup"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-default-100 px-6 py-2.5 font-sans text-base font-bold text-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] outline outline-1 -outline-offset-1 outline-default-200 transition-colors duration-150 hover:bg-default-200"
            >
              Buy on Amazon
            </a>
          </div>
        </div>

        <div
          id="trailer"
          className="relative w-full overflow-hidden rounded-lg bg-black"
        >
          <video
            controls
            preload="metadata"
            // poster="/book/trailer-poster.jpg"
            playsInline
            className="block aspect-video h-auto w-full"
          >
            <source src="/book/trailer.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>
    </section>
  );
}
