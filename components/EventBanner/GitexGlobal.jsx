import styles from "../../styles/EventBanners/gitextglobal.module.scss";
import Image from "next/image";
import Link from "next/link";

const GitexGlobal24 = () => {
  return (
    <section className={` container-fluid ${styles.Gitex__Global}`}>
      <div className={`container mx-auto ${styles.Gitex__Global__content}`}>
        <div className="text-center">
          <Image
            src="/assets/events/global__logo.png"
            alt="gitex_global__logo"
            width={400}
            height={118}
            className="mx-auto"
          />
        </div>
        <div className={`${styles.reg__content}`}>
          <h1>
            Global Collaboration to Forge a <span>Future AI</span> Economy
          </h1>
          <p>Registration for the best tech event is now live</p>
          <a
            href="https://www.gitex.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Secure your pass</button>
          </a>
        </div>

        <div className="text-center">
          <Image
            src="/assets/events/north__star.png"
            alt="gitex_global__logo"
            width={470}
            height={114}
          />
          <Image
            src="/assets/events/north__star.png"
            alt="gitex_global__logo"
            width={470}
            height={114}
            className=" "
          />
        </div>
      </div>
    </section>
  );
};

export default GitexGlobal24;
