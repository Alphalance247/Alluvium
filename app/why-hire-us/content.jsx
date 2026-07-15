"use client";
import Layout from "components/layout";
import ContentTab from "components/blog-component/contentInfo";
import Potential from "components/blog-component/unlockquote";
import HeroBlog from "components/blog-component/heroBlog";
// import Articles from "components/blog-component/article";

const Whyhire = () => {
  return (
    <Layout>
      <div>
        <HeroBlog />
        <ContentTab />
        <Potential />
        {/* <Articles /> */}
      </div>
    </Layout>
  );
};

export default Whyhire;
