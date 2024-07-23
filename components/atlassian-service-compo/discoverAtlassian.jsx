import styles from "../../styles/atlassian-services-style/atlassianlicenceservices.module.scss";
import { discoverAtlassiansServ } from "data";
const DiscoverAtlassian = () => {
  return (
    <section className={`container-fluid ${styles.atlassiandiscover}`}>
      <div className={`container ${styles.services}`}>
        <div className={`${styles.discoverfaq}`}>
          <h5>OUR SERVICES</h5>
          <h3>Discover Our Atlassian Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
            arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit
            id.
          </p>
          <button className={styles.button1}>Schedule a Call</button>
        </div>

        <div className={`${styles.discoverdropdown}`}>
          {discoverAtlassiansServ.map((item, i) => (
            <div key={item.id}>
              <div className={`${styles.questionsSection}`}>
                <p className={`${styles.idstyle}`}>0{item.id}</p>
                <div className={`${styles.questcontent}`}>
                  <h5>{item.heading}</h5>
                  <p>{item.questions}</p>
                  <hr className={` ${styles.horizon}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverAtlassian;
