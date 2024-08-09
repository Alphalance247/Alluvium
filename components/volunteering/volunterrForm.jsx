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
    phone_number_4: "",
    volunteer_before_10: "No",
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

  console.log(form);

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
                  name="first_name_1"
                  type="text"
                  value={form?.first_name_1 || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.first_name_1}
                />
              </div>

              <div>
                <Input
                  id="last_name"
                  label="last_name"
                  text="Last Name"
                  name="last_name_2"
                  type="text"
                  value={form?.last_name_2 || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.last_name_2}
                />
              </div>

              <div>
                <Input
                  id="jobFunction"
                  label="jobFunction"
                  text="Job function"
                  name="email_3"
                  type="text"
                  value={form?.email_3 || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.email_3}
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
                  value={form.phone_number_4 ?? ""}
                  onChange={handleNumber}
                  className={`${styles.PhoneInput} ${styles.PhoneInputCountry}`}
                  numberInputProps={{
                    className: formError.phone_number_4 ? styles.error : "",
                  }}
                  countrySelectProps={{
                    className: formError.phone_number_4 ? styles.error : "",
                  }}
                />
              </div>

              <div className=" position-relative">
                <label htmlFor="Country" className={styles.labelStyle}>
                  Country *
                </label>
                <select
                  name="country_5"
                  id="Country"
                  className={`${styles.countrySelect} ${
                    formError.country_5 ? styles.error : ""
                  }`}
                  value={form?.country_5 || ""}
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
              </div>

              <div className=" position-relative">
                <label htmlFor="Country" className={styles.labelStyle}>
                  State *
                </label>
                <select
                  name="state_6"
                  id="Country"
                  className={`${styles.countrySelect} ${
                    formError.state_6 ? styles.error : ""
                  }`}
                  value={form?.state_6 || ""}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {country.map((el, i) => (
                    <option key={i} value={el?.name}>
                      {el?.name}
                    </option>
                  ))}
                </select>
                <FaChevronDown className={styles.iconic} />
              </div>

              <div>
                <Input
                  id="address"
                  label="address"
                  text="Address"
                  name="address_7"
                  type="text"
                  value={form?.address_7 || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.address_7}
                />
              </div>
            </div>

            <div className={styles.volunteerinfo}>
              <p>VOLUNTEER INFORMATION</p>

              <div className={styles.volunteerstyleform2}>
                <div className=" position-relative">
                  <label
                    htmlFor="experience_desc_11"
                    className={styles.labelStyle}
                  >
                    Which of these best describes your experience?
                  </label>
                  <select
                    name="experience_desc_11"
                    id="experience_desc_11"
                    className={`${styles.countrySelect} ${
                      formError.experience_desc_11 ? styles.error : ""
                    }`}
                    value={form.experience_desc_11}
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
                </div>

                <div className=" position-relative">
                  <label
                    htmlFor="volunteer_reason_9"
                    className={styles.labelStyle}
                  >
                    Why do you want to volunteer at Cloud Connect?
                  </label>
                  <select
                    name="volunteer_reason_9"
                    id="volunteer_reason_9"
                    className={`${styles.countrySelect} ${
                      formError.volunteer_reason_9 ? styles.error : ""
                    }`}
                    value={form.volunteer_reason_9}
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
                </div>

                <div>
                  <label htmlFor="relevant_info" className={styles.labelStyle}>
                    Have you volunteered at events before?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="volunteer_before_10"
                      value="Yes"
                      id=""
                      checked={form?.volunteer_before_10 === "Yes"}
                      onChange={handleChange}
                    />
                    <text className={styles.radioP}>Yes</text>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="volunteer_before_10"
                      id=""
                      value="No"
                      checked={form?.volunteer_before_10 === "No"}
                      onChange={handleChange}
                    />
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
