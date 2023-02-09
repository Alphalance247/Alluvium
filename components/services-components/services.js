import { ourServicesData } from "data";
import Link from 'next/link';
import styles from '../../styles/services.module.scss';
import Service from "./service";

const Services = () => {
  const ourServices = ourServicesData;
  return (
    <section className={`container-fluid p-0 ${styles.ourServices}`} id="services">
      <div className={`container mx-auto`}>
        <div className={styles.ourServicesHeader}>
          <h2>What We Do</h2>
          <h3 className={styles.ourServicesTitle}>Our Services</h3>
          <p className={styles.ourServicesSubtitle}>Unlock the full potential of your business with our comprehensive suite of services</p>
        </div>
        <div className={styles.ourServicesList}>
          {
            ourServices.map((service) => {
              const { id, icon} = service;

              return (
                !!service && <Service icon={icon} service={service} key={id} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Services;