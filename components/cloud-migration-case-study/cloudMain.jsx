import styles from "../../styles/cloud-migration-case-study/migartionmain.module.scss";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const CloudMain = () => {
  return (
    <section className={`${styles.cloud__main__hero} container-fluid `}>
      <div className="container mx-auto">
        <h1>
          See How Organizations Thrive Through Cloud Migration with Atlassian
          Case Studies.
        </h1>

        <div className={styles.dhcs__main}>
          <div>
            <Image
              src="/assets/Cloud-Migration-Case-Study/bhcs.png"
              width={556}
              height={332}
              alt="dhcs"
            />
          </div>

          <div>
            <p className={styles.dhcs__head}>HEALTH</p>
            <h4>
              California’s Health Department saved millions with Atlassian Cloud
              Enterprise
            </h4>
            <p className={styles.dhcs__content}>
              DHCS centralized with Atlassian and upgraded to an Enterprise
              Cloud plan. With more than 1,000 active users and counting, DHCS
              is targeting 4000 users by the end of 2024 as the largest
              California state agency on Atlassian Cloud Enterprise.
            </p>
            <button>
              Read now
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudMain;
