import styles from "../../styles/atlassian-services-style/atlassianlicenceservices.module.scss";
import Image from "next/image";

const MarketPlace = () => {
  return (
    <section className={`container-fluid ${styles.partners}`}>
      <div className={`${styles.trusted}`}>
        <p>YOUR TRUSTED ATLASSIAN PARTNERS</p>
        <div
          className="text-center align-items-center"
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "1.3rem",
          }}
        >
          <div className="">
            <Image
              src="/assets/licence-image/solution.svg"
              width={220}
              height={109}
              alt=""
            />
          </div>

          <div className="">
            <Image
              src="/assets/licence-image/market.svg"
              width={293}
              height={112}
              alt=""
            />
          </div>

          <div className="">
            <Image
              src="/assets/licence-image/partner.svg"
              width={309}
              height={96}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
