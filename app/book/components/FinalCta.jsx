import Container from "components/Alluvium-Redesign-2026/common/container";
import SignupForm from "./SignupForm";
import Image from "next/image";

export default function FinalCta() {
  return (
    <section className="overflow-hidden relative bg-secondary-900">
      {/* <Image
        src="/book/shape.png"
        width={700}
        height={700}
        className="absolute top-0 right-0 z-0"
        alt="display shape"
      /> */}
      <Container className="flex items-center gap-16 max-[900px]:flex-col">
        <div className="flex flex-1 flex-col gap-7">
          <div className="flex items-center gap-2">
            <span className="h-0 w-5 border-t-4 border-default-100" />
            <span className="font-sans text-sm font-bold uppercase tracking-wide leading-4 text-white">
              Launching soon
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="max-w-[38rem] font-serif text-4xl font-bold leading-10 text-white">
              Be the first to read the loop
            </h2>
            <p className="max-w-[35rem] font-sans text-lg font-medium leading-7 text-white">
              Join the early-access list and you will get one email when the
              series goes live, with the launch-week price on the book for your
              platform. That is it. No drip sequence, no webinar.
            </p>
          </div>
        </div>

        <div className="relative">
          <SignupForm
            idPrefix="f"
            source="footer"
            heading="Reserve your launch price"
            subtext="Kindle, paperback and audiobook - you choose at launch."
            namePlaceholder="Ray"
            fineprint="We only use your email to tell you about the Compound Intelligence series."
          />
        </div>
      </Container>
    </section>
  );
}
