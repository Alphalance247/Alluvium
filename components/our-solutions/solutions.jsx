import styles from "../../styles/solution.module.scss";
import Image from "next/legacy/image";
import { atlassianTraining } from "data";

const Solutions = () => {
  return (
    <section className={`container-fluid ${styles.solutionContainer}`}>
      <div className="container m-auto">
        <h3 className=" text-white text-center fw-semibold fs-1">
          Our Atlassian Solution
        </h3>

        <div className={`container ${styles.atlassian}`}>
          <div className={`${styles.atlassianProduct} rounded-3`}>
            <div className={`px-4 pt-5 position-relative`}>
              <Image
                src="/assets/solution/rocket.png"
                height={56}
                width={56}
                alt="rocket"
              />
              <h5>Atlassian Product Implementation</h5>
              <p className=" text-white">
                Whether you’re new to Atlassian or not, we offer full
                implementations and health checks for Atlassian products such as
                Jira Software, Jira Service Management and Confluence.
              </p>

              <div>
                <div className={`${styles.img1}`}>
                  <Image
                    src="/assets/solution/logo3.png"
                    height={88}
                    width={88}
                    alt="rocket"
                  />
                </div>
                <div className={`${styles.img2}`}>
                  <Image
                    src="/assets/solution/logo2.png"
                    height={88}
                    width={88}
                    alt="rocket"
                  />
                </div>
                <div className={`${styles.img3}`}>
                  <Image
                    src="/assets/solution/logo1.png"
                    height={88}
                    width={88}
                    alt="rocket"
                  />
                </div>
              </div>
            </div>

            <Image
              src="/assets/solution/pattern.png"
              height={320}
              width={700}
              alt="rocket"
            />
          </div>
          <div className=" d-grid row-gap-4">
            <div className=" d-flex column-gap-4">
              {atlassianTraining.map((data) => {
                return (
                  <div
                    className={`px-4 py-5 ${styles.atlassianDiscovery} rounded-3`}
                    key={data.id}
                  >
                    <Image
                      src={data.image}
                      height={56}
                      width={56}
                      alt={data.heading}
                    />
                    <h5 className="text-white">{data.heading}</h5>
                    <p className="text-white">{data.paragraph}</p>
                  </div>
                );
              })}
            </div>
            <div className={`${styles.atlassianMigration} rounded-3`}>
              <div>
                <Image
                  src="/assets/solution/migration.png"
                  height={56}
                  width={56}
                  alt="migrationIcon"
                />
                <h5>Atlassian Product Implementation</h5>
                <p className=" text-white">
                  Whether you’re new to Atlassian or not, we offer full
                  implementations and health checks for Atlassian products such
                  as Jira Software, Jira Service Management and Confluence.
                </p>
              </div>

              <div className={`${styles.cloudImg} `}>
                <Image
                  src="/assets/solution/cloud.png"
                  height={338}
                  width={402}
                  alt="cloudText"
                  className="rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
