import HeroBlog from "components/blog-component/heroblog";
import Layout from "components/layout";
import ContentTab from "components/blog-component/contenTab";
import Potential from "components/blog-component/unlockPotential";
import Articles from "components/blog-component/articles";

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
