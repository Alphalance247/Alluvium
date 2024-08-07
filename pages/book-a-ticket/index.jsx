import { useState } from "react";
import styles from "../../styles/cloud2.4/general.module.scss";
import { eventTicket } from "data";

const BookTicket = () => {
  //   const [ticketNumber, setTicketNumber] = useState(0);
  const [ticketNumbers, setTicketNumbers] = useState(eventTicket.map(() => 0));
  const ticketPrices = [1000, 3000, 5000];

  const handlePlusTicket = (index) => {
    setTicketNumbers((prev) =>
      prev.map((number, i) => (i === index ? number + 1 : number))
    );
  };

  const handleMinusTicket = (index) => {
    setTicketNumbers((prev) =>
      prev.map((number, i) => (i === index && number > 0 ? number - 1 : number))
    );
  };

  //   const handlePlusTicket = () => {
  //     setTicketNumber((prev) => prev + 1);
  //   };

  //   const handleMinusTicket = () => {
  //     if (ticketNumber > 0) {
  //       setTicketNumber((prev) => prev - 1);
  //     } else return;
  //   };

  const calculateTotal = () => {
    // return ticketNumbers.reduce((total, num) => total + num * 5000, 0);
    const total = ticketNumbers.reduce(
      (total, num, index) => total + num * ticketPrices[index],
      0
    );

    return total.toLocaleString();
  };

  return (
    <section className={`container-fluid ${styles.ticketBooking}`}>
      <div className={styles.ticketBookings}>
        <div className={`${styles.chooseTicket} container`}>
          <p className={`${styles.eventTicket}`}>CHOOSE YOUR event TICKET</p>

          <div className={`${styles.ticketTitle}`}>
            <p>TICKET</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
          </div>

          {eventTicket.map((item, index) => (
            <div
              className={`${styles.ticketCategory} ${
                index === eventTicket.length - 1 ? styles.lastTicket : ""
              }`}
              key={item.id}
            >
              <div className={styles.contentTicket}>
                <p>General admission</p>
                <ul>
                  <li>Access to all Cloud Connect sessions</li>
                  <li>Networking opportunities with industry peers</li>
                  <li>Event swag bag</li>
                  <li>Coffee & refreshments throughout the event</li>
                </ul>
              </div>

              <p className={styles.ticketPrice}>₦5,000</p>

              <div className={styles.ticketUpdate}>
                <div>
                  <button
                    className={styles.minus}
                    onClick={() => handleMinusTicket(index)}
                  >
                    -
                  </button>
                </div>
                <p>{ticketNumbers[index]}</p>
                <div>
                  <button
                    className={styles.plus}
                    onClick={() => handlePlusTicket(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
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
            <p>
              {`₦ ${calculateTotal()}`}
              {/* {`₦ ${
                3000 * ticketNumbers[0] +
                1000 * ticketNumbers[1] +
                5000 * ticketNumbers[2]
              }`} */}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <button className={styles.button1}>Continue</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTicket;
