import BecomeReuse from "components/cloud-connect-common/becomeReuse";
import { Country } from "country-state-city";
import { useState } from "react";
import styles from "../../styles/cloud2.4/volunteering.module.scss";
import Input from "components/licence-component/inputP";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FaChevronDown } from "react-icons/fa";

const VolunterForm = () => {
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
    <section className={`container-fluid ${styles.volunteeringForm}`}>
      <div className="container">
        <BecomeReuse
          heading="REGISTER AS A VOLUNTEER"
          paragraph="Lorem ipsum dolor sit amet consectetur. Aliquet amet massa lorem diam feugiat. Tristique velit velit proin amet cras diam mi. Vel nunc ut feugiat quis dolor"
        />
        <div className={styles.formdetailsvolunteer}>
          <form action="" className={styles.formlogic}>
            <p>Your Details</p>
            <div className={styles.volunteerstyleform1}>
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
                  text="Job function"
                  name="jobFunction"
                  type="text"
                  value={form.jobFunction || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.jobFunction}
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className={styles.labelStyle}>
                  Phone number
                </label>
                <PhoneInput
                  placeholder=""
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
                  Country *
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

              <div className=" position-relative">
                <label htmlFor="Country" className={styles.labelStyle}>
                  State *
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
                  id="Address"
                  label="Address"
                  text="Address"
                  name="current_technical_email"
                  type="text"
                  value={form.current_technical_email || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.current_technical_email}
                />
              </div>
            </div>

            <div className={styles.volunteerinfo}>
              <p>VOLUNTEER INFORMATION</p>

              <div className={styles.volunteerstyleform2}>
                <div className=" position-relative">
                  <label htmlFor="Country" className={styles.labelStyle}>
                    Which of these best describes your experience?
                  </label>
                  <select
                    name="nill"
                    id="Country"
                    className={`${styles.countrySelect} ${
                      formError.country ? styles.error : ""
                    }`}
                    value={form.nill}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="To gain experience in event management or organization">
                      To gain experience in event management or organization
                    </option>
                    <option
                      value="To contribute to the success of the IT and service
                      management community."
                    >
                      To contribute to the success of the IT and service
                      management community.
                    </option>
                    <option
                      value="To network with industry professionals and expand my
                      network."
                    >
                      To network with industry professionals and expand my
                      network.
                    </option>
                    <option
                      value="To learn more about service management and its impact on
                      businesses."
                    >
                      To learn more about service management and its impact on
                      businesses.
                    </option>
                    <option value="">
                      To give back to the community and support a worthwhile
                      cause.
                    </option>
                    <option value="">
                      To enhance my resume and gain valuable skills.
                    </option>
                  </select>
                  <FaChevronDown className={styles.iconic} />
                  {formError.country && (
                    <p style={{ color: "red" }}>Country is Required</p>
                  )}
                </div>

                <div className=" position-relative">
                  <label htmlFor="Country" className={styles.labelStyle}>
                    Why do you want to volunteer at Cloud Connect?
                  </label>
                  <select
                    name="nil"
                    id="Country"
                    className={`${styles.countrySelect} ${
                      formError.country ? styles.error : ""
                    }`}
                    value={form.nil}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="">Event Management</option>
                    <option value="Social media">Social media</option>
                    <option value="Customer service">Customer service</option>
                    <option value="Marketing and communications">
                      Marketing and communications
                    </option>
                    <option value="IT support">Tech aspirant</option>
                    <option value="Student">Student</option>
                  </select>
                  <FaChevronDown className={styles.iconic} />
                  {formError.country && (
                    <p style={{ color: "red" }}>Country is Required</p>
                  )}
                </div>

                <div>
                  <label htmlFor="relevant_info" className={styles.labelStyle}>
                    If yes, can you describe your experience
                  </label>
                  <div>
                    <input type="radio" name="" id="" />
                    <text className={styles.radioP}>Yes</text>
                  </div>
                  <div>
                    <input type="radio" name="" id="" />
                    <text className={styles.radioP}>No</text>
                  </div>
                </div>

                <div>
                  <label htmlFor="relevant_info" className={styles.labelStyle}>
                    If yes, can you describe your experience
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
            </div>

            <div className={styles.additionalDetails}>
              <p>Additional Information</p>

              <div>
                <Input
                  id="first_name"
                  label="first_name"
                  text="Do you have any other questions or comments?"
                  name="first_name"
                  type="text"
                  value={form.first_name || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.first_name}
                />
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

export default VolunterForm;
