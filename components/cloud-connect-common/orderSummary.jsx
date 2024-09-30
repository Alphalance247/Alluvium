import Button from "components/cloud-connect-2/Button";
import styles from "../../styles/cloud2.4/general.module.scss";
import { useRouter } from "next/router";

const OrderSummary = ({
  ticketNumbers,
  calculateTotal,
  contBtn = false,
  newButton = false,
  onClick,
  loading,
  // setShowInput,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/cloud-connect/book-a-ticket/contact-details");
  };

  // if (ticketNumbers[0] || ticketNumbers[1] || ticketNumbers[2] >= 1) {
  //   setShowInput(true);
  // }

  return (
    <div className={`${styles.orderSummary}`}>
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
