import { useState } from "react";
import styles from "../../styles/team.module.scss";
import Input from "./Input";
import { Country } from "country-state-city";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Image from "next/image";
import IncentiveData from "./IncentiveData";

const Register = () => {
  const [country] = useState(Country.getAllCountries());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [checkbox, setCheckbox] = useState("");

  const phonePattern = /^\+\d{1,13}$/;

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    receiveMail: "no",
  });

  const [formError, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    country: false,
    phoneNumberError: false,
  });

  const { receiveMail } = form;

  console.log(form);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    let hasErrors = false;

    // Check each field for errors
    for (const field in form) {
      if (!form[field]) {
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
    if (!phonePattern.test(phoneNumber)) setPhoneError(true);
    else setPhoneError(false);

    if (hasErrors) {
      setFormErrors(errors);
    } else {
      alert("Thank you, your response has been recorded...");
      setForm({
        ...form,
        email: "",
        firstname: "",
        lastname: "",
        country: "",
        receiveMail: "no",
      });
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormErrors({ ...formError, [name]: false });
  };

  const handleNumber = (value) => {
    setPhoneNumber(value);
    setPhoneError(false);
  };

  const handleIncentives = (e) => {
    setCheckbox(e.target.value);
  };

  return (
    <section className={styles.section3} id="register-section">
      <h4>Register Now</h4>
      <p className={styles.secure}>
        Secure your souvenir now and get the chance to experience the love from
        Africa and the Alluvium difference.
      </p>

      <form action="" onSubmit={handleFormSubmit}>
        <p className={styles.basic}>BASIC INFORMATION</p>
        <div className={styles.action}>
          <div>
            <label htmlFor="FirstName">First Name</label>
            <br />
            <Input
              type="text"
              name="firstname"
              id="FirstName"
              placeholder="John"
              value={form.firstname}
              formError={formError.firstname}
              onChange={handleChange}
            />

            {formError.firstname && (
              <p style={{ color: "red" }}>First Name is Required</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <br />

            <Input
              type="text"
              name="lastname"
              id="lastName"
              placeholder="Doe"
              value={form.lastname}
              formError={formError.lastname}
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
              value={phoneNumber}
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
            I agree to receive emails updates from Alluvium about future events,
            news and announcement
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
              checked={receiveMail === "yes"}
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
              checked={receiveMail === "no"}
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
                  height={60}
                  src="/assets/team2024/giftw.svg"
                  alt="gift"
                />
              </div>

              <p className={styles.chooseSourvenir}>Choose Your Souvenir!</p>
            </div>
            <p className={styles.appreciate}>
              Congratulations on taking the first step towards securing your
              spot at Booth 53! As a token of our appreciation for your interest
              and participation, we're excited to offer you the opportunity to
              select an incentive of your choice.
            </p>
          </div>

          <div className={styles.incentiveStyle}>
            {IncentiveData.map((data) => (
              <div className={styles.encap} key={data.id}>
                <img width={442} height={430} src={data.image} alt={data.alt} />
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
                    required={!checkbox}
                    checked={checkbox === `${data.inputValue}`}
                    value={data.inputValue}
                    style={{ transform: "scale(2)" }}
                    onChange={handleIncentives}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.button}>
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
