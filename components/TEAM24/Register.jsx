import { useState } from "react";
import styles from "../../styles/team.module.scss";
import Input from "./Input";
import { Country } from "country-state-city";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Image from "next/image";
import IncentiveData from "./IncentiveData";
import axios from "axios";
import { ToastProvider, useToasts } from "react-toast-notifications";

const Register = ({ setRegistrationLimitExceeded }) => {
  const [country] = useState(Country.getAllCountries());
  const [phoneError, setPhoneError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const phonePattern = /^\+\d{1,13}$/;

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: country[0].name,
    email_sub: false,
    phone_number: "",
  });

  const [formError, setFormErrors] = useState({
    first_name: false,
    last_name: false,
    email: false,
    country: false,
    phoneNumberError: false,
  });

  const { email_sub } = form;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    let hasErrors = false;

    // Check each field for errors
    for (const field in form) {
      if (!form[field] && field !== "email_sub") {
        errors[field] = true;
        hasErrors = true;
      }

      // Check email format
      if (field === "email" && form.email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(form.email)) {
          errors[field] = true;
          hasErrors = true;
        }
      }
    }
    if (!phonePattern.test(form.phone_number)) setPhoneError(true);
    else setPhoneError(false);

    if (hasErrors) {
      setFormErrors(errors);
    } else {
      setLoading(true);
      await axios
        .post("https://vast.ec2.alluvium.net/teams24/addrecord/", { ...form })
        .then((res) => {
          setLoading(false);
          if (res.status !== 201) {
            addToast(
              res.data.error ||
                "Error occured, please try again or contact Admin",
              { appearance: "error" }
            );
            return;
          }
          addToast("Registration successful. Thank you, we'll be in touch.", {
            appearance: "success",
          });
          setForm({
            ...form,
            email: "",
            first_name: "",
            last_name: "",
            country: "",
            email_sub: false,
            phone_number: "",
            souvenir: "",
          });
          setRegistrationLimitExceeded(res.data.max_count_reached);
        })
        .catch((err) => {
          setLoading(false);
          let errMessage =
            "Oops something went wrong. Please try again or contact Admin";
          if (err.response.status < 500) {
            errMessage =
              err?.response?.data?.error ||
              "Oops something went wrong. Please try again or contact Admin";
            if (err?.response?.data?.max_count_reached) {
              errMessage =
                "Oops. Seems we are not allowed to accept anymore registrations at this time.";
            }
          }
          addToast(errMessage, { appearance: "error" });
          return;
        });
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "radio" ? Boolean(value) : value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleNumber = (value) => {
    setForm((prev) => ({ ...prev, phone_number: value }));
    setPhoneError(false);
  };

  return (
    <ToastProvider>
      <section className={styles.section3} id="register-section">
        <div className="container mx-auto">
          <h4>Register Now</h4>
          <p className={styles.secure}>
            Secure your souvenir now and get the chance to experience the love
            from Africa and the Alluvium difference.
          </p>

          <form action="" onSubmit={handleFormSubmit}>
            <p className={styles.basic}>BASIC INFORMATION</p>
            <div className={styles.action}>
              <div>
                <label htmlFor="FirstName">First Name</label>
                <br />
                <Input
                  type="text"
                  name="first_name"
                  id="FirstName"
                  placeholder="John"
                  value={form.first_name}
                  formError={formError.first_name}
                  onChange={handleChange}
                />

                {formError.first_name && (
                  <p style={{ color: "red" }}>First Name is Required</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <br />

                <Input
                  type="text"
                  name="last_name"
                  id="lastName"
                  placeholder="Doe"
                  value={form.last_name}
                  formError={formError.last_name}
                  onChange={handleChange}
                />
                {formError.lastname && (
                  <p style={{ color: "red" }}>Last Name is Required</p>
                )}
              </div>

              <div>
                <label htmlFor="number">Phone Number</label>

                <br />

                <PhoneInput
                  placeholder="8140686688"
                  international
                  defaultCountry="NG"
                  value={form.phone_number ?? ""}
                  onChange={handleNumber}
                  className={`${styles.PhoneInput} ${styles.PhoneInputCountry}`}
                  numberInputProps={{
                    className: phoneError ? styles.error : "",
                  }}
                  countrySelectProps={{
                    className: phoneError ? styles.error : "",
                  }}
                />

                <p style={{ color: "red" }}>
                  {phoneError ? "Please Enter a Valid Number" : ""}
                </p>
              </div>

              <div>
                <label htmlFor="Country">Country of Residence</label>
                <br />
                <select
                  name="country"
                  id="Country"
                  className={`${styles.countrySelect} ${
                    formError.country ? styles.error : ""
                  }`}
                  value={form.country}
                  onChange={handleChange}
                >
                  {country.map((el, i) => (
                    <option key={i} value={el.name}>
                      {el.name}
                    </option>
                  ))}
                </select>
                {formError.country && (
                  <p style={{ color: "red" }}>Country is Required</p>
                )}
              </div>

              <div>
                <label htmlFor="Email">Email</label>
                <br />

                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Yourname@example.com"
                  value={form.email}
                  formError={formError.email}
                  onChange={handleChange}
                />
                {formError.email && (
                  <p style={{ color: "red" }}>Please Input a valid mail</p>
                )}
              </div>
            </div>
            <div>
              <p style={{ color: "white", marginBottom: ".5rem" }}>
                I agree to receive emails updates from Alluvium about future
                events, news and announcement
              </p>
              <div>
                <input
                  type="radio"
                  name="receiveMail"
                  id="Yes"
                  value="yes"
                  style={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    marginRight: ".3rem",
                  }}
                  // checked={receiveMail === "yes"}
                  onChange={handleChange}
                />
                <label htmlFor="Yes" style={{ color: "#666666" }}>
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="receiveMail"
                  id="No"
                  value="no"
                  // checked={receiveMail === "no"}
                  style={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    marginRight: ".3rem",
                  }}
                  onChange={handleChange}
                />
                <label htmlFor="No" style={{ color: "#666666" }}>
                  No
                </label>
              </div>
            </div>
            <div className={styles.incentives}>
              <div className={styles.forwardtext}>
                <div className={styles.souvenirHead}>
                  <div>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/team2024/giftw.svg"
                      alt="gift"
                    />
                  </div>
                  <div>
                    <p className={styles.chooseSourvenir}>
                      Choose Your Souvenir!
                    </p>
                  </div>
                </div>
                <p className={styles.appreciate}>
                  Congratulations on taking the first step towards securing your
                  spot at Booth 53! As a token of our appreciation for your
                  interest and participation, we're excited to offer you the
                  opportunity to select an incentive of your choice.
                </p>
              </div>

              <div className={styles.incentiveStyle}>
                {IncentiveData.map((data) => (
                  <div className={styles.encap} key={data.id}>
                    <div className="w-100" height={430}>
                      <Image
                        width={442}
                        height={430}
                        layout="responsive"
                        src={data.image}
                        alt={data.alt}
                      />
                    </div>
                    <div className={styles.incentiveContent}>
                      <div className={styles.content}>
                        <p className={styles.firtsP}>{data.incentiveType}</p>
                        <p className={styles.secondP}>
                          {data.incentiveDescription}
                        </p>
                      </div>

                      <input
                        type="checkbox"
                        name={data.inputName}
                        id="checkbox"
                        // required={!checkbox}
                        checked={form[data.inputName] === data.inputValue}
                        value={data.inputValue}
                        style={{ transform: "scale(2)" }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.button}>
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </ToastProvider>
  );
};

export default Register;
