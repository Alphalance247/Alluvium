import styles from "../../styles/cloud2.4/sponsor.module.scss";
import Button from "components/cloud-connect-2/Button";

const Packages = ({
  sponsorPackage,
  showButton = true,
  heading,
  subText = false,
}) => {
  const handleScrollToView = () => {
    document
      .getElementById("sponsor-form-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`container ${styles.sponspackages}`}>
      <h3>{heading}</h3>

      <div className={styles.packdivs}>
        {sponsorPackage.map((item) => {
          return (
            <div key={item.id} className={styles.packagesItem}>
              <p className={styles.packagesP}>{item?.title}</p>
              <h6>{item?.price}</h6>
              {subText && <p>{item?.paragraphs}</p>}

              <ul className={styles.package__list}>
                <li>{item?.list1}</li>
                <li>{item?.list2}</li>
                <li>{item?.list3}</li>
                <li>{item?.list4}</li>
                {item.list5 && <li>{item?.list5}</li>}
                {item.list6 && <li>{item?.list6}</li>}
                {item.list7 && <li>{item?.list7}</li>}
              </ul>
              {showButton && (
                <Button variant="outline" onClick={handleScrollToView}>
                  Get Started
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;
