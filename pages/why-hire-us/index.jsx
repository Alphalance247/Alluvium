import HeroBlog from "components/blog-component/heroblog";
import Layout from "components/layout";
import ContentTab from "components/blog-component/contentinfo";
import Potential from "components/blog-component/unlockquote";
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
