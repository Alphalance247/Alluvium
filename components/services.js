import { ourServicesData } from "data";
import Link from 'next/link';
import styles from '../styles/services.module.scss';

const Services = () => {
    const ourServices = ourServicesData;
    return(
        <section className={styles.ourServices} id="services">
          <div className={styles.ourServicesHeader}>
            <h1 className={styles.ourServicesTitle}>Our Services</h1>
            {/* <p className={styles.ourServicesSubtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p> */}
          </div>
          <div className={styles.ourServicesList}>
            {
              ourServices.map((service) => {
                const { id, title, icon, subtitle } = service;

                return (
                  <div className={styles.service} key={id}>
                    <div className={styles.serviceIcon}>
                      <img src={icon} alt={title} />
                    </div>
                    <div className={styles.serviceInfo}>
                      <h3 className={styles.serviceTitle}>{title}</h3>
                      <p className={styles.serviceSubtitle}>{subtitle}</p>
                    </div>
                    <div className={styles.serviceLink}>

                    </div>
                  </div>
                )
              })
            }
            <div className={styles.service} >
              <div className={styles.serviceIcon}>
                <img src={"/assets/service3.svg"} alt="Plugins" />
              </div>
              <div className={styles.serviceInfo}>
                <h3 className={styles.serviceTitle}>Atlassian Marketplace Plugins</h3>
                <p className={styles.serviceSubtitle}><span>We engineer and support migration and implementation plugins like </span>
                  <span className={styles.serviceProductLink}><a href="https://marketplace.atlassian.com/apps/1224091/scrum-companion?hosting=cloud&tab=overview" target='_blank'>Scrum Companion</a></span><span>, </span> 
                  <span className={styles.serviceProductLink}><a href="https://marketplace.atlassian.com/apps/1223585/cloud-counter?hosting=cloud&tab=overview" target='_blank'>Cloud Counter</a></span><span>, </span> 
                  <span className={styles.serviceProductLink}><a href="https://marketplace.atlassian.com/apps/1223507/compare-jira-resource?tab=overview&hosting=cloud" target='_blank'>Compare Jira Resources</a></span><span>.</span>
                </p>
              </div>
              <div className={styles.serviceLink}>

              </div>
            </div>
          </div>
        </section>
    )
}

export default Services;