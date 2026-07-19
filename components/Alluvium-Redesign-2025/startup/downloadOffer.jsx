import Button from "components/atlassian-service-reuse/Button";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../../../styles/AlluviumRedesign2025/startup/SupportPackage.module.scss";

const DownLoadOffer = () => {
  return (
    <section className={styles.download__offfer}>
      <div className={styles.download}>
        <h3>Download Our Full Offer Details</h3>
        <p>
          Get a comprehensive overview of our $31,000 Atlassian AI license and
          support package. Click the button below to download the detailed PDF
        </p>
        <Link href={"/files/startup.pdf"}>
          <Button size="large">Download PDF</Button>
        </Link>
      </div>
      <div>
        <Image
          height={281}
          width={285}
          src="/assets/redesign-2025/startup/pdfoffer.png"
          alt="pdfoffer"
        />
      </div>
    </section>
  );
};

export default DownLoadOffer;
