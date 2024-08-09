import { useState, useEffect } from "react";
import styles from "../../styles/cloud2.4/general.module.scss";
import { eventTicket } from "data";
import DetailsContact from "components/cloud-connect-common/details";
import OrderSummary from "components/cloud-connect-common/orderSummary";

const TicketDetails = () => {
  const [ticketNumbers, setTicketNumbers] = useState(eventTicket.map(() => 0));
  const ticketPrices = [1000, 3000, 5000];

  // const [ticketNumbers, setTicketNumbers] = useState(() => {
  //   const savedTickets = localStorage.getItem("ticketNumbers");
  //   return savedTickets ? JSON.parse(savedTickets) : eventTicket.map(() => 0);
  // });
  // const ticketPrices = [1000, 3000, 5000];

  // useEffect(() => {
  //   localStorage.setItem("ticketNumbers", JSON.stringify(ticketNumbers));
  // }, [ticketNumbers]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTickets = localStorage.getItem("ticketNumbers");
      if (savedTickets) {
        setTicketNumbers(JSON.parse(savedTickets));
      }

      // Add event listener for beforeunload to clear localStorage and state
      const handleBeforeUnload = () => {
        localStorage.removeItem("ticketNumbers");
        setTicketNumbers(eventTicket.map(() => 0));
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ticketNumbers", JSON.stringify(ticketNumbers));
    }
  }, [ticketNumbers]);

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

  const calculateTotal = () => {
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
          <DetailsContact content="CHOOSE YOUR event TICKET" />
          {/* <p className={`${styles.eventTicket}`}>CHOOSE YOUR event TICKET</p> */}

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
              style={{
                borderBottom:
                  index === eventTicket.length - 1
                    ? "none"
                    : "1px solid #e5e7eb",
              }}
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

      <OrderSummary
        ticketNumbers={ticketNumbers}
        calculateTotal={calculateTotal}
      />

      {/* <div>
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
            <button className={styles.button1}>Continue</button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default TicketDetails;
