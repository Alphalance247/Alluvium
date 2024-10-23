import Button from "components/cloud-connect-2/Button";
import styles from "../../styles/cloud2.4/general.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const OrderSummary = ({
  ticketNumbers,
  calculateTotal,
  contBtn = false,
  newButton = false,
  onClick,
  loading,
  sectionRef,
}) => {
  const router = useRouter();
  const [isFixed, setIsFixed] = useState(false); // Track if OrderSummary is fixed

  const handleClick = () => {
    router.push("/cloud-connect/book-a-ticket/contact-details");
  };

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      // const summaryPosition = window.scrollY;
      // const headerHeight = 330; // Height of the fixed navbar
      // if (summaryPosition >= window.innerHeight - headerHeight) {
      //   setIsFixed(true);
      // } else {
      //   setIsFixed(false);
      // }
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const headerHeight = 100; // Adjust based on your fixed navbar height
      const lowerHeight = 650;

      // Set OrderSummary as fixed when it reaches the top and before scrolling past the section
      if (
        scrollY >= sectionTop - headerHeight &&
        scrollY <= sectionTop + sectionHeight - lowerHeight
      ) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.orderSummary} ${
        isFixed ? styles.fixed__section : ""
      }`}
    >
      <p className={`${styles.summaryHeading}`}>Order Summary</p>
      {ticketNumbers[0] >= 1 && (
        <div className={`${styles.firstTicket}`}>
          <p className={`${styles.tag}`}>
            {ticketNumbers[0]} x General admission
          </p>
          <p className={`${styles.priceTag}`}>{`₦ ${(
            5000 * ticketNumbers[0]
          ).toLocaleString()}`}</p>
        </div>
      )}

      {ticketNumbers[1] >= 1 && (
        <div className={`${styles.firstTicket}`}>
          <p className={`${styles.tag}`}>{ticketNumbers[1]} x VIP </p>
          <p className={`${styles.priceTag}`}>{`₦ ${(
            15000 * ticketNumbers[1]
          ).toLocaleString()}`}</p>
        </div>
      )}

      {ticketNumbers[2] >= 1 && (
        <div className={`${styles.firstTicket}`}>
          <p className={`${styles.tag}`}>{ticketNumbers[2]} x Platinum</p>
          <p className={`${styles.priceTag}`}>{`₦ ${(
            70000 * ticketNumbers[2]
          ).toLocaleString()}`}</p>
        </div>
      )}

      {(ticketNumbers[0] || ticketNumbers[1] || ticketNumbers[2] >= 1) && (
        <section>
          <div className={`${styles.summaryTotal}`}>
            <p>Total</p>
            <p>{`₦ ${calculateTotal()}`}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {contBtn && <Button onClick={handleClick}>Continue</Button>}

            {newButton && (
              <Button onClick={onClick}>
                {loading ? "Submitting.." : "Checkout"}
              </Button>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default OrderSummary;
