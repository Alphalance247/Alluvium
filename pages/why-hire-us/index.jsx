import HeroBlog from "components/blog-component/heroBlog";
import Layout from "components/layout";
import ContentTab from "components/blog-component/contentInfo";
import Potential from "components/blog-component/unlockPotential";
import Articles from "components/blog-component/article";

const Blog = () => {
  return (
    <Layout>
      <div>
        <HeroBlog />
        <ContentTab />
        <Potential />
        <Articles />
      </div>
    </Layout>
  );
};

export default Blog;
