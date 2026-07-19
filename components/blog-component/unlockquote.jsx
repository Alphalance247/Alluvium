import styles from "../../styles/blogpost.module.scss";
import Image from "next/legacy/image";
import Link from "next/link";

const Potential = () => {
  return (
    <section className={`container m-auto ${styles.atlassianPotential}`}>
      <div className={`${styles.potentialContent}`}>
        <div>
          <Image
            src="/assets/blogImages/potentials.svg"
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
          <Link href="/contact-us">
            <button>Schedule a Meeting</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Potential;
