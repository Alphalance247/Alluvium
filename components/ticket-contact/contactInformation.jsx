import Input from "components/licence-component/inputP";
import styles from "../../styles/cloud2.4/general.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DetailsContact from "components/cloud-connect-common/details";
import { useState, useEffect } from "react";
import OrderSummary from "components/cloud-connect-common/orderSummary";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import { environment } from "env/env.local";

const ContactInformation = () => {
  const [form, setForm] = useState({});
  const [formError, setFormError] = useState({});
  const [ticketNumbers, setTicketNumbers] = useState([0, 0, 0]);
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIschecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  const router = useRouter();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(form);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setFormError((prev) => ({ ...prev, [name]: false }));
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
    const ticketPrices = [5000, 15000, 70000];
    const total = ticketNumbers.reduce(
      (total, num, index) => total + num * ticketPrices[index],
      0
    );

    return total.toLocaleString();
  };

  const ticket1 = ticketNumbers[0];
  const ticket2 = ticketNumbers[1];
  const ticket3 = ticketNumbers[2];

  const bronze = ticket1.toString();
  const silver = ticket2.toString();
  const gold = ticket3.toString();

  const total = calculateTotal();

  const handleNumber = (value) => {
    setForm((prev) => ({ ...prev, phone_number_5: value }));
    setForm((prev) => ({ ...prev, recipient_phone_number_9: value }));
    setFormError((prev) => ({ ...prev, phone_number_5: false }));
  };

  if (!isMounted) {
    return <p>Loading.....</p>; // or a loading spinner
  }

  const handleSubmitTicket = async (e) => {
    e.preventDefault();

    if (
      form.first_name_1 &&
      form.last_name_2 &&
      emailRegex.test(form.email_3) &&
      form.phone_number_5 &&
      hear_about_us_27
    ) {
      setLoading(true);
      await axios
        .post(
          `${environment.baseUrl}${environment.TicketUrl}`,
          {
            ...form,
            bronze_ticket_10: bronze,
            siver_ticket_11: silver,
            gold_ticket_12: gold,
          },
          { timeout: 40000 }
        )
        .then((res) => {
          setLoading(false);

          if (res.status >= 200 && res.status < 300) {
            router.push(res?.data?.data?.paystack_auth_url);
            addToast("Details submitted successfully. Redirecting...", {
              appearance: "success",
              autoDismiss: true, // Enable auto dismiss
              autoDismissTimeout: 5000, // Dismiss after 5 seconds
            });

            setForm({
              ...form,
              first_name_1: "",
              last_name_2: "",
              phone_number_5: "",
              email_3: "",
              recipient_email_8: "",
              recipient_first_name_6: "",
              recipient_last_name_7: "",
              recipient_phone_number_9: "",
              hear_about_us_27: "",
            });
          } else {
            addToast(
              res.data.error ||
                "Unexpected response from server. Please try again or contact Admin",
              {
                appearance: "error",
                autoDismiss: true, // Enable auto dismiss
                autoDismissTimeout: 5000, // Dismiss after 5 seconds
              }
            );
            return;
          }
        })
        .catch((err) => {
          setLoading(false);
          let errMessage;
          // Handle timeout error
          if (err.code === "ECONNABORTED") {
            errMessage =
              "The request took too long. Please check your internet connection and try again.";
          }

          // Handle network error
          if (!err.response) {
            errMessage =
              "Unexpected response from server. Please check your details and try again";
          }

          // Handle server-side error (response error)
          if (err.response) {
            if (err.response.status < 500) {
              errMessage =
                err?.response?.data?.error ||
                "Request failed. Please check the form and try again.";
            } else {
              errMessage = "Server error. Please try again later.";
            }
          }

          addToast(errMessage, {
            appearance: "error",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          });
        });
    } else {
      setFormError({
        ...formError,
        first_name_1: !form.first_name_1,
        last_name_2: !form.last_name_2,
        email_3: !emailRegex.test(form.email_3),
        phone_number_5: !form.phone_number_5,
        hear_about_us_27: !form.hear_about_us_27,
      });
    }
  };

  return (
    <section className={`container-fluid ${styles.details__contact}`}>
      <div className={`${styles.details__encap} container`}>
        <DetailsContact content="Enter your Contact Details" pad={false} />
        <div className={styles.input__details}>
          <div>
            <Input
              id="first_name"
              label="first_name"
              text="First Name"
              name="first_name_1"
              type="text"
              value={form.first_name_1 || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.first_name_1}
            />
            {formError.first_name_1 && (
              <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                This field is required
              </h6>
            )}
          </div>

          <div>
            <Input
              id="last_name"
              label="last_name"
              text="Last Name"
              name="last_name_2"
              type="text"
              value={form.last_name_2 || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.last_name_2}
            />

            {formError.last_name_2 && (
              <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                This field is required
              </h6>
            )}
          </div>

          <div>
            <Input
              id="email_3"
              label="email_3"
              text="Email"
              name="email_3"
              type="email"
              value={form.email_3 || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.email_3}
            />

            {formError.email_3 && (
              <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                Please enter a valid email
              </h6>
            )}
          </div>

          <div>
            <Input
              id="email_4"
              label="email_4"
              text="Confirm Email"
              name="email_4"
              type="email"
              value={form.email_4 || ""}
              placeholder=""
              onChange={handleChange}
              errorF={formError.email_4}
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
              value={form.phone_number_5 ?? ""}
              onChange={handleNumber}
              className={`${styles.PhoneInput} ${styles.PhoneInputCountry} ${
                formError.phone_number_5 ? styles.error : ""
              }`}
            />
            {formError.phone_number_5 && (
              <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                This field is required
              </h6>
            )}
          </div>

          <div className=" position-relative">
            <label
              htmlFor="hear_about_us_27"
              className={styles.labelStyle}
              style={{ marginBottom: "8px" }}
            >
              How did you hear about us? *
            </label>
            <select
              name="hear_about_us_27"
              id="hear_about_us_27"
              className={`${styles.countrySelect} ${
                formError.hear_about_us_27 ? styles.error : ""
              }`}
              value={form.hear_about_us_27}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Atlassian Facebook Promotion">
                Atlassian Facebook Promotion
              </option>
              <option value="Google">Google</option>
              <option value="Social media">Social media</option>
              <option value="Referral from a Friend or Colleague">
                Referral from a Friend or Colleague
              </option>
              <option value="Event Website">Event Website</option>
              <option value="Company Website">Company Website</option>
              <option value="Email Newsletter">Email Newsletter</option>
              <option value="Previous Attendance">Previous Attendance</option>
            </select>
            {/* <FaChevronDown className={styles.iconic} /> */}

            {formError.hear_about_us_27 && (
              <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                This field is required
              </h6>
            )}
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
            {/* <p className={styles.receive__mail}>
              Lorem ipsum dolor sit amet consectetur. Habitasse in lectus tortor
              purus{" "}
            </p> */}
          </div>
        </div>
        {isChecked && (
          <div className={styles.input__details}>
            <div>
              <Input
                id="first_name"
                label="first_name"
                text="Recipient First Name "
                name="recipient_first_name_6"
                type="text"
                value={form.recipient_first_name_6 || ""}
                placeholder=""
                onChange={handleChange}
                errorF={formError.recipient_first_name_6}
              />
            </div>

            <div>
              <Input
                id="last_name"
                label="last_name"
                text="Recipient Last Name "
                name="recipient_last_name_7"
                type="text"
                value={form.recipient_last_name_7 || ""}
                placeholder=""
                onChange={handleChange}
                errorF={formError.recipient_last_name_7}
              />
            </div>

            <div>
              <Input
                id="jobFunction"
                label="jobFunction"
                text="Recipient Email address"
                name="recipient_email_8"
                type="email"
                value={form.recipient_email_8 || ""}
                placeholder=""
                onChange={handleChange}
                errorF={formError.recipient_email_8}
              />
            </div>

            <div>
              <Input
                id="recipient_email_8"
                label="recipient_email_8"
                text="Confirm Recipient Email address "
                name="recipient_email_8"
                type="email"
                value={form.recipient_email_8 || ""}
                placeholder=""
                onChange={handleChange}
                errorF={formError.recipient_email_8}
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
                value={form.recipient_phone_number_9 ?? ""}
                onChange={handleNumber}
                className={`${styles.PhoneInput} ${styles.PhoneInputCountry}`}
                numberInputProps={{
                  className: formError.recipient_phone_number_9
                    ? styles.error
                    : "",
                }}
                countrySelectProps={{
                  className: formError.recipient_phone_number_9
                    ? styles.error
                    : "",
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <OrderSummary
          ticketNumbers={ticketNumbers}
          calculateTotal={calculateTotal}
          newButton={true}
          onClick={handleSubmitTicket}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default ContactInformation;
