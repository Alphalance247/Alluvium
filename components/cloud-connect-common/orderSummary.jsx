// const
import styles from "../../styles/cloud2.4/general.module.scss";
// import Router from "next/router";
import { useRouter } from "next/router";

const OrderSummary = ({ ticketNumbers, calculateTotal }) => {
  // const [ticketNumbers, setTicketNumbers] = useState(eventTicket.map(() => 0));
  //   const ticketPrices = [1000, 3000, 5000];

  //   const calculateTotal = () => {
  //     const total = ticketNumbers.reduce(
  //       (total, num, index) => total + num * ticketPrices[index],
  //       0
  //     );

  //     return total.toLocaleString();
  //   };
  const router = useRouter();

  const handleClick = () => {
    router.push("/book-a-ticket/contact-details");
  };

  return (
    // <div>
    <div className={`${styles.orderSummary}`}>
      <p className={`${styles.summaryHeading}`}>Order Summary</p>
      <div className={`${styles.firstTicket}`}>
        <p className={`${styles.tag}`}>
          {ticketNumbers[0]} x General admission
        </p>
        <p className={`${styles.priceTag}`}>{`₦ ${(
          1000 * ticketNumbers[0]
        ).toLocaleString()}`}</p>
      </div>

      <div className={`${styles.firstTicket}`}>
        <p className={`${styles.tag}`}>{ticketNumbers[1]} x VP </p>
        <p className={`${styles.priceTag}`}>{`₦ ${(
          3000 * ticketNumbers[1]
        ).toLocaleString()}`}</p>
      </div>

      <div className={`${styles.firstTicket}`}>
        <p className={`${styles.tag}`}>{ticketNumbers[2]} x VVIP</p>
        <p className={`${styles.priceTag}`}>{`₦ ${(
          5000 * ticketNumbers[2]
        ).toLocaleString()}`}</p>
      </div>

      <div className={`${styles.summaryTotal}`}>
        <p>Total</p>
        <p>{`₦ ${calculateTotal()}`}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <button className={styles.button1} onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
    // </div>
  );
};

export default OrderSummary;
