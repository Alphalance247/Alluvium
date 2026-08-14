"use client";
import Layout from "components/layout";
import SwpHero from "./components/hero";
import GetInTouch from "./components/getInTouch";

const SWP = () => {
  return (
    <div>
      <Layout>

        <main>
          <SwpHero />
          <GetInTouch />
        </main>
      </Layout>
    </div>
  );
};

export default SWP;
