import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import Image from "next/image";
import Heading from "./heading";
import { PluginData } from "data";

const MarketPlacePlugin = () => {
  return (
    <section className={styles.market__place__plugin}>
      <div className={styles.market__place}>
        <div className={styles.plugin__heading}>
          <Heading
            title="OUR MARKETPLACE PLUGINS"
            heading="Streamline Your Workflow with Our Plugins"
            subhead="Enhance your Atlassian experience with plugins designed to simplify processes and boost team productivity."
          />
        </div>

        <div className={styles.card__encap}>
          {PluginData.map((item, i) => {
            return (
              <a href={item?.url} target="_blank">
                <div key={i} className={styles.cards}>
                  <div className="d-flex justify-content-between">
                    <Image src={item?.icon1} alt="" width={64} height={64} />
                    <Image src={item?.icon2} alt="" width={40} height={40} />
                  </div>

                  <h6>{item?.title}</h6>
                  <p>{item?.content}</p>
                  <div
                    style={{
                      marginLeft: "-1rem",
                    }}
                  >
                    <Image
                      src={item?.img}
                      alt={item?.title}
                      width={341}
                      height={200}
                      layout="responsive"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketPlacePlugin;
