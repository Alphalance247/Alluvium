import Button from "components/atlassian-service-reuse/Button";
import Image from "next/legacy/image";
import styles from "../../styles/EventBanners/atlassian-campaign.module.scss";
import Link from "next/link";

const AtlassianCampaign = () => {
  return (
    <section className={`container-fluid ${styles.banner}`}>
      <div className={`${styles.banner__div}`}>
        <div>
          <h1 className={`${styles.bannerP}`}>SCALE YOUR SERVICE MANAGEMENT</h1>
          <Link href="/campaigns/itsm-drive-action">
            <Button size="large">Click Here</Button>
          </Link>
        </div>
        <div>
          <Image
            src="/assets/events/frame1.png"
            alt="atlassian-campaign"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default AtlassianCampaign;
