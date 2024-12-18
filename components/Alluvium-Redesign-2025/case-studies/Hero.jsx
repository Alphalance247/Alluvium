import HeroSection from "../ReuseComponents/HeroSection";
import { Lines } from "../ReuseComponents/Lines";
import SubSectionCard from "../ReuseComponents/subSectionCard";
import ArrowDownLoad from "../icons/ArrowDownLoad";

const Hero = () => {
  const gridArray = [
    {
      icon: <ArrowDownLoad />,
      paragraph: "Successfully Trained In-house Administrator",
    },
    {
      icon: <ArrowDownLoad />,
      paragraph: "Cloud Instance setup",
    },
    {
      icon: <ArrowDownLoad />,
      paragraph: "Ticket tracking with Jira Service Management",
    },
  ];
  return (
    <section className="">
      <HeroSection />
      <SubSectionCard
        gridArray={gridArray}
        variant="secondary"
        border="default"
        heading={false}
      />
      <div style={{ maxWidth: "1272px", margin: "auto" }}>
        <Lines variant={"primary"} />
      </div>
    </section>
  );
};

export default Hero;
