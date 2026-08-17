import React from "react";
import Link from "next/link";
import Container from "../common/container";
import Button from "../common/button";

const HeroCallToAction = () => {
  return (
    <section className="w-full bg-secondary-900 overflow-hidden">
      <Container className="flex flex-col items-start gap-7">
        <h2 className="text-default-50 text-3xl md:text-[3.25rem] tracking-[-0.5px] font-bold font-serif leading-tight max-w-4xl">
          We help organizations work smarter with Atlassian and AI
        </h2>

        <div className="flex flex-col items-start gap-7">
          <p className="text-white/90 text-2xl md:text-2xl font-medium font-sans leading-relaxed max-w-xl">
            Rovo knows where the work sits. Claude knows what to do about it.
          </p>

          <Link href="/contact-us" className="w-full md:w-fit">
            <Button
              type="button"
              size="md"
              backgroundColor="defaultLv3"
              variant="default"
              className="text-white"
            >
              Book a discovery call
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HeroCallToAction;
