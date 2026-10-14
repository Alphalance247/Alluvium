import Header from "./components/Header";
import Hero from "./components/Hero";
import FirstLook from "./components/FirstLook";
import TheLoop from "./components/TheLoop";
import Shelf from "./components/Shelf";
import Learn from "./components/Learn";
import Author from "./components/Author";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function Content() {
  return (
    <div className="font-[Inter,system-ui,-apple-system,'Segoe_UI',Roboto,sans-serif] bg-[#0b1526] text-[#f5efe6] leading-[1.6] antialiased">
      <Header />
      <main id="top">
        <Hero />
        <FirstLook />
        <TheLoop />
        <Shelf />
        <Learn />
        <Author />
        {/* <FinalCta /> */}
      </main>
      <Footer />
    </div>
  );
}
