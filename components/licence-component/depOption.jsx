import styles from "../../styles/licence.module.scss";

const DepOption = () => {
  return (
    <div className={`container mx-auto ${styles.devoptional}`}>
      <div>
        <h5>Atlassian License Deployment Options</h5>
        <p>
          With the end of Server licenses in February 2024, we are here to guide
          you in choosing the right path for your organization and help you set
          up your new Cloud or Data Center environment.
        </p>
      </div>
      <div className={`${styles.optionwrap}`}>
        <div className={`${styles.divop}`}>
          <h6>Data Center</h6>
          <p>
            For larger organizations (20.000+ users) or those with specific
            regulatory requirements, Data Center licenses are the way to go.
            With Data Center, you can deploy your Atlassian instance
            on-premises, giving you complete control over your environments and
            data. <br />
            <br /> Alluvium can also host your environments through our managed
            services solution. This means you won’t have to worry about
            maintaining and scaling your environments—we’ll handle it all for
            you. <br />
            <br /> Data Center licenses are only available on an annual basis,
            but you can lock in your pricing by purchasing multiple years
            upfront. Request your quote here(link to form).
          </p>
        </div>
        <div className={`${styles.divop}`}>
          <h6>Atlassian Cloud</h6>
          <p>
            If you're new to Atlassian, Atlassian Cloud is probably the best
            choice for you. By choosing Atlassian Cloud, you're letting
            Atlassian take care of hosting and maintaining your environments and
            data. This means your environments will always be up-to-date and you
            will benefit directly from the latest features. <br />
            <br /> With our help, you can opt for either annual or monthly Cloud
            subscriptions. We’ll guide you in selecting the perfect Cloud plan
            (Basic, Premium, or Enterprise) that best fits your organization’s
            unique needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepOption;
