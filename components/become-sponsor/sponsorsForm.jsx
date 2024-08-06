import BecomeReuse from "components/cloud-connect-common/becomeReuse";
import Input from "components/licence-component/inputP";
import styles from "../../styles/cloud2.4/sponsor.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Country } from "country-state-city";
import { useToasts } from "react-toast-notifications";
import { FaChevronDown } from "react-icons/fa";

const SponsorsForm = () => {
  const [country] = useState(Country.getAllCountries());
  const [form, setForm] = useState({
    phoneNumber: "",
  });
  //   const { addToast } = useToasts();
  const [formError, setFormError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleNumber = (value) => {
    setForm((prev) => ({ ...prev, phoneNumber: value }));
  };

  return (
    <section className={`container-fluid ${styles.sponsorshipform}`}>
      <div className="container">
        <BecomeReuse
          heading=" BECOME A CLOUD CONNECT SPONSOR"
          paragraph=" Lorem ipsum dolor sit amet consectetur. Aliquet amet massa lorem diam
        feugiat. Tristique velit velit proin amet cras diam mi. Vel nunc ut
        feugiat quis dolor"
        />
        <div className={styles.formdetails}>
          <form action="" className={styles.formlogic}>
            <p>Your Details</p>
            <div className={styles.input1style}>
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
                  text="Company/organization "
                  name="jobFunction"
                  type="text"
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
                  text="Job title "
                  name="jobFunction"
                  type="text"
                  value={form.jobFunction || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.jobFunction}
                />
              </div>
            </div>

            <div className={styles.input2style}>
              <div>
                <Input
                  id="current_technical_email"
                  label="current_technical_email"
                  text="Email "
                  name="current_technical_email"
                  type="email"
                  value={form.current_technical_email || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.current_technical_email}
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className={styles.labelStyle}>
                  Phone number
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

              <div className=" position-relative">
                <label htmlFor="Country" className={styles.labelStyle}>
                  Country <span>*</span>
                </label>

                <select
                  name="country"
                  id="Country"
                  className={`${styles.countrySelect} ${
                    formError.country ? styles.error : ""
                  }`}
                  value={form.country}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {country.map((el, i) => (
                    <option key={i} value={el.name}>
                      {el.name}
                    </option>
                  ))}
                </select>
                <FaChevronDown className={styles.iconic} />
                {formError.country && (
                  <p style={{ color: "red" }}>Country is Required</p>
                )}
              </div>
              <div>
                <Input
                  id="current_technical_email"
                  label="current_technical_email"
                  text="Website URL"
                  name="current_technical_email"
                  type="text"
                  value={form.current_technical_email || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.current_technical_email}
                />
              </div>
            </div>

            <div className={styles.packageForm}>
              <p>Sponsorship Packages</p>

              <div className={styles.input3style}>
                <div className=" position-relative">
                  <label
                    htmlFor="Country"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    What is your budget for partnership *
                  </label>

                  <select
                    name="country"
                    id="Country"
                    className={`${styles.countrySelect} ${
                      formError.country ? styles.error : ""
                    }`}
                    value={form.country}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                  <FaChevronDown className={styles.iconic} />
                  {formError.country && (
                    <p style={{ color: "red" }}>Country is Required</p>
                  )}
                </div>

                <div className=" position-relative">
                  <label
                    htmlFor="Country"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Preferred sponsorship tier
                  </label>

                  <select
                    name="country"
                    id="Country"
                    className={`${styles.countrySelect} ${
                      formError.country ? styles.error : ""
                    }`}
                    value={form.country}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                  <FaChevronDown className={styles.iconic} />
                  {formError.country && (
                    <p style={{ color: "red" }}>Country is Required</p>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.additionalDetails}>
              <p>Additional Information</p>

              <div className={styles.input4style}>
                <div className=" position-relative">
                  <label
                    htmlFor="Country"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    How did you hear about us? *
                  </label>
                  <select
                    name="country"
                    id="Country"
                    className={`${styles.countrySelect} ${
                      formError.country ? styles.error : ""
                    }`}
                    value={form.country}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                  <FaChevronDown className={styles.iconic} />
                  {formError.country && (
                    <p style={{ color: "red" }}>Country is Required</p>
                  )}
                </div>

                <div className=" position-relative">
                  <label
                    htmlFor="Country"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    What are your primary objectives? *
                  </label>

                  <select
                    name="country"
                    id="Country"
                    className={`${styles.countrySelect} ${
                      formError.country ? styles.error : ""
                    }`}
                    value={form.country}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                  <FaChevronDown className={styles.iconic} />
                  {formError.country && (
                    <p style={{ color: "red" }}>Country is Required</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="relevant_info"
                  className={styles.labelStyle}
                  style={{ marginBottom: "10px" }}
                >
                  Please provide additional information or context about your
                  objectives for a potential partnership with us *
                </label>
                <textarea
                  id="relevant_info"
                  name="relevant_info"
                  rows="10"
                  cols="100"
                  required
                  value={form.relevant_info || ""}
                  onChange={handleChange}
                  className={styles.textareastyle}
                ></textarea>
              </div>
            </div>

            <div>
              <button className={styles.button1}>Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SponsorsForm;
