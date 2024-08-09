import Input from "components/licence-component/inputP";
import styles from "../../styles/cloud2.4/general.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DetailsContact from "components/cloud-connect-common/details";
import { useState, useEffect } from "react";
import OrderSummary from "components/cloud-connect-common/orderSummary";

const ContactInformation = () => {
  const [form, setForm] = useState({
    phoneNumber: "",
  });
  const [formError, setFormError] = useState({});
  const [ticketNumbers, setTicketNumbers] = useState([0, 0, 0]);
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIschecked] = useState(false);

  console.log(isChecked);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCheckBox = () => {
    setIschecked(!isChecked);
  };

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const savedTickets = localStorage.getItem("ticketNumbers");
      if (savedTickets) {
        setTicketNumbers(JSON.parse(savedTickets));
      }
    }
  }, []);

  const calculateTotal = () => {
    const ticketPrices = [1000, 3000, 5000];
    const total = ticketNumbers.reduce(
      (total, num, index) => total + num * ticketPrices[index],
      0
    );

    return total.toLocaleString();
  };

  const total = calculateTotal();
  console.log(total);

  const handleNumber = (value) => {
    setForm((prev) => ({ ...prev, phoneNumber: value }));
  };

  if (!isMounted) {
    return <p>Loading.....</p>; // or a loading spinner
  }

  return (
    <section className={`container-fluid ${styles.details__contact}`}>
      {/* <div className={styles.details__filling}> */}

      <div className={`${styles.details__encap} container`}>
        <DetailsContact content="Enter your Contact Details" />
        <div className={styles.input__details}>
          <div>
            <Input
              id="first_name"
              label="first_name"
              text="First Name"
              name="first_name"
              type="text"
              value={form.first_name || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.first_name}
            />
          </div>

          <div>
            <Input
              id="last_name"
              label="last_name"
              text="Last Name"
              name="last_name"
              type="text"
              value={form.last_name || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.last_name}
            />
          </div>

          <div>
            <Input
              id="jobFunction"
              label="jobFunction"
              text="Email"
              name="jobFunction"
              type="email"
              value={form.jobFunction || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.jobFunction}
            />
          </div>

          <div>
            <Input
              id="jobFunction"
              label="jobFunction"
              text="Confirm Email"
              name="jobFunction"
              type="email"
              value={form.jobFunction || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.jobFunction}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className={styles.labelStyle}>
              Phone number *
            </label>
            <PhoneInput
              placeholder="8140686688"
              international
              required
              defaultCountry="NG"
              value={form.phoneNumber ?? ""}
              onChange={handleNumber}
              className={`${styles.PhoneInput} ${styles.PhoneInputCountry}`}
              numberInputProps={{
                className: formError.phoneNumber ? styles.error : "",
              }}
              countrySelectProps={{
                className: formError.phoneNumber ? styles.error : "",
              }}
            />
          </div>
        </div>

        <div className={styles.ticket__pickup}>
          <div>
            <input
              type="checkbox"
              name="check"
              checked={isChecked}
              id="check"
              onChange={handleCheckBox}
            />
          </div>

          <div>
            <p className={styles.send__ticket__to}>
              Send ticket(s) to a different email address?
            </p>
            <p className={styles.receive__mail}>
              Lorem ipsum dolor sit amet consectetur. Habitasse in lectus tortor
              purus{" "}
            </p>
          </div>
        </div>

        <div className={styles.input__details}>
          <div>
            <Input
              id="first_name"
              label="first_name"
              text="Recipient First Name "
              name="first_name"
              type="text"
              value={form.first_name || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.first_name}
            />
          </div>

          <div>
            <Input
              id="last_name"
              label="last_name"
              text="Recipient Last Name "
              name="last_name"
              type="text"
              value={form.last_name || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.last_name}
            />
          </div>

          <div>
            <Input
              id="jobFunction"
              label="jobFunction"
              text="Recipient Email address"
              name="jobFunction"
              type="email"
              value={form.jobFunction || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.jobFunction}
            />
          </div>

          <div>
            <Input
              id="jobFunction"
              label="jobFunction"
              text="Confirm Recipient Email address "
              name="jobFunction"
              type="email"
              value={form.jobFunction || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.jobFunction}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className={styles.labelStyle}>
              Recipient Phone number *
            </label>
            <PhoneInput
              placeholder="8140686688"
              international
              required
              defaultCountry="NG"
              value={form.phoneNumber ?? ""}
              onChange={handleNumber}
              className={`${styles.PhoneInput} ${styles.PhoneInputCountry}`}
              numberInputProps={{
                className: formError.phoneNumber ? styles.error : "",
              }}
              countrySelectProps={{
                className: formError.phoneNumber ? styles.error : "",
              }}
            />
          </div>
        </div>
      </div>
      {/* </div> */}
      <div>
        <OrderSummary
          ticketNumbers={ticketNumbers}
          calculateTotal={calculateTotal}
        />
      </div>
    </section>
  );
};

export default ContactInformation;
