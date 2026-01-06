import Featured from "components/Featured";
import styles from "../../../styles/AlluviumRedesign2025/redesign.module.scss";
import Heading from "components/Alluvium-Redesign-2025/heading";

const AlluviumCESShowCaseStudy = () => {
  const data = [
    {
      img: "/assets/ces/lloyds.png",
      title:
        "How Lloyd Banking Group transformed enterprise strategy with focus and AI powered insight",
      subtitle:
        "Meeting student expectations by standardizing on a single platform",
      btn: "",
      alt: "atlassian-licence",
      url: "/atlassian-cloud-migration-case-studies/how-lloyd-banking-group-transformed-enterprise-strategy-with-focus-and-ai-powered-insight/",
    },
    {
      img: "/assets/Cloud-Migration-Case-Study/bhcs.png",
      title:
        "California’s Health Department Saves Millions with Atlassian Cloud Enterprise",
      subtitle:
        "California’s Health Department saved millions with Atlassian Cloud Enterprise",
      btn: "",
      alt: "atlassian-cloud-migration-case-studies image",
      url: "/atlassian-cloud-migration-case-studies",
    },
    {
      img: "/assets/ces/frame.png",
      title:
        "How Home Depot brought strategic clarity to enterprise planning with Atlassian focus",
      subtitle:
        "Meeting student expectations by standardizing on a single platform",
      btn: "",
      alt: "cloud-services",
      url: "/atlassian-cloud-migration-case-studies/how-home-depot-brought-strategic-clarity-to-enterprise-planning-with-atlassian-focus/",
    },
  ];
  return (
    <section
      className={styles.expertise__section}
      style={{ borderTop: "1px solid #f0f0f0" }}
    >
      <div className={styles.expertise__encap}>
        <div className={styles.expertise__heading}>
          <Heading
            title="ALLUVIUM"
            heading="Proven at Enterprise Scale"
            subhead="Real deployments. Measurable outcomes. Autonomous service in production."
            variant="primary"
          />
        </div>
        <Featured cardList={data} />
      </div>
    </section>
  );
};

export default AlluviumCESShowCaseStudy;
