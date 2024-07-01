import styles from "../../styles/blogpost.module.scss";
import Image from "next/image";

const Potential = () => {
  return (
    <section className={`container m-auto ${styles.atlassianPotential}`}>
      <div className={`${styles.potentialContent}`}>
        <div>
          <Image
            src="/assets/blog-images/potentials.svg"
            width={365}
            height={278}
            alt="atlassianpotential"
          />
        </div>
        <div>
          <h4>
            Unlock the Full Potential of Your Atlassian Tools with Alluvium
          </h4>
          <p>
            Boost your business productivity with expert Atlassian solutions
            from Alluvium.
          </p>
          <button>Schedule a Meeting</button>
        </div>
      </div>
    </section>
  );
};

export default Potential;
