import Button from "components/atlassian-service-reuse/Button";
import Image from "next/legacy/image";
import styles from "../../../styles/AlluviumRedesign2025/help-center/help-center.module.scss";
import Link from "next/link";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__encap}>
        <div className={styles.content}>
          <h4>
            <span>Big or small</span> We solve every challenge{" "}
          </h4>
          <p>
            Every challenge has a solution. Share yours with us, and let’s turn
            it into an opportunity
          </p>
          <Link href={"/help-center"}>
            <Button>Share your Challenge</Button>
          </Link>
        </div>
        <Image
          src="/assets/help-center/nil.png"
          width={450}
          height={250}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default Banner;
