import styles from "../../styles/atlassian-services-style/getstarted.module.scss";

const GetStarted = ({
  heading,
  text,
  button1,
  button2,
  showText = true,
  variant = "default",
}) => {
  return (
    <div className={`container-fluid ${styles.platinumPlan}`}>
      <div className={`container mx-auto`}>
        <div
          className={` ${styles.partnerPlan} ${
            styles[`partnerPlan--${variant}`]
          }`}
          style={{
            rowGap: showText === false && "3.5rem",
          }}
        >
          <h2>{heading}</h2>
          {showText && <p>{text}</p>}

          {(button1 || button2) && (
            <div>
              {button1}
              {button2}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
