import { useState, useEffect } from "react";
import styles from "../../styles/cloud2.4/general.module.scss";
import { eventTicket } from "data";
import DetailsContact from "components/cloud-connect-common/details";
import OrderSummary from "components/cloud-connect-common/orderSummary";

const TicketDetails = () => {
  const [ticketNumbers, setTicketNumbers] = useState(eventTicket.map(() => 0));
  const ticketPrices = [5000, 15000, 70000];

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
          <p className={styles.early__birds__chance}>
            <span>Early Bird Special:</span> Save 30% on Cloud Connect '24 VIP
            and Platinum Tickets!
          </p>

          <p className={styles.early__birds__ends}>
            Early bird ends on October 23, 2024
          </p>
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
                <p>{item.ticketTitle}</p>
                <ul>
                  <li>{item.list1}</li>
                  <li>{item.list2}</li>
                  <li>{item.list3}</li>
                  <li>{item.list4}</li>
                </ul>
              </div>
              <div>
                <p
                  className={styles.ticketPrice}
                  style={{
                    textDecoration:
                      index === eventTicket.length - 3 ? "none" : null,
                  }}
                >
                  {item?.price}
                </p>
                <p className={styles.early__birds__price}>{item?.earlybirds}</p>
              </div>

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
        contBtn={true}
      />
    </section>
  );
};

export default TicketDetails;
