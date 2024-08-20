import Layout from "components/layout";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Link from "next/link";

const AwsConsulting = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading=""
        contentsheading1="Accelerate Innovation with Seamless DevOps Solutions"
        contentsheading2="Lorem ipsum dolor sit amet consectetur. Auctor placerat est fusce vestibulum ac at augue diam malesuada. Dui at semper eget dolor cras ipsum viverra. "
        withSlide={false}
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large">Get in Touch</Button>
          </Link>
        }
      />

      <section></section>
    </Layout>
  );
};

export default AwsConsulting;
