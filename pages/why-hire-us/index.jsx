import Layout from "components/layout";
import ContentTab from "components/blog-component/contentinfo";
import Potential from "components/blog-component/unlockquote";
import Articles from "components/blog-component/article";
import HeroBlog from "components/blog-component/heroblog";

const Whyhire = () => {
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

export default Whyhire;
