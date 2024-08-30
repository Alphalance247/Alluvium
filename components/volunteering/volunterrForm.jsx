import BecomeReuse from "components/cloud-connect-common/becomeReuse";
import { Country, State } from "country-state-city";
import { useState } from "react";
import styles from "../../styles/cloud2.4/volunteering.module.scss";
import Input from "components/licence-component/inputP";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FaChevronDown } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import LoadingScreen from "components/loading";
import { useEffect } from "react";

const VolunterForm = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const [form, setForm] = useState({
    phone_number_4: "",
    volunteer_before_10: "No",
  });

  const { addToast } = useToasts();
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "country_5") {
      const selectedCountry = countries.find(
        (country) => country.isoCode === value
      );
      setForm((prevForm) => ({
        ...prevForm,
        country_5: selectedCountry.isoCode,
        countryName: selectedCountry.name,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
    setFormError((prev) => ({ ...prev, [name]: false }));
  };

  const handleNumber = (value) => {
    setForm((prev) => ({ ...prev, phone_number_4: value }));
    setFormError((prev) => ({ ...prev, phone_number_4: false }));
  };

  useEffect(() => {
    // Fetch countries when component mounts
    const countryOptions = Country.getAllCountries()?.map((country) => ({
      name: country?.name,
      isoCode: country?.isoCode,
    }));

    console.log(countryOptions);
    setCountries(countryOptions);
  }, []);

  useEffect(() => {
    // Fetch cities when a country is selected
    if (form?.country_5) {
      const stateOptions =
        State.getStatesOfCountry(form?.country_5)?.map((state) => ({
          name: state?.name,
          isoCode: state?.isoCode,
        })) ?? [];
      setStates(stateOptions);
    } else {
      setStates([]);
    }
  }, [form?.country_5]);

  const handleVolunteerForm = async (e) => {
    e.preventDefault();

    if (
      form.country_5 &&
      form.phone_number_4 &&
      form.state_6 &&
      form.volunteer_reason_9 &&
      form.which_experience_8
    ) {
      setLoading(true);
      await axios
        .post("https://vast.ec2.alluvium.net/cloud-connect/vounteer-form", {
          ...form,
          country_5: form.countryName, // Send country name instead of isoCode
        })
        .then((res) => {
          setLoading(false);

          if (res.status >= 200 && res.status < 300) {
            addToast(
              "Your request has been submitted successfully. Thank you, we'll be in touch.",
              {
                appearance: "success",
              }
            );
            setForm({
              ...form,
              first_name_1: "",
              last_name_2: "",
              email_3: "",
              phone_number_4: "",
              country_5: "",
              state_6: "",
              address_7: "",
              which_experience_8: "",
              volunteer_reason_9: "",
              volunteer_before_10: "No",
              experience_desc_11: "",
              question_comment_info_12: "",
            });
          } else {
            addToast("Error occured, please try again or contact Admin", {
              appearance: "error",
            });
            return;
          }
        })
        .catch((err) => {
          setLoading(false);
          let errMessage =
            "Oops something went wrong. Please try again or contact Admin";
          if (err?.response?.status < 500) {
            errMessage =
              err?.response?.data?.error ||
              "Oops something went wrong. Please try again or contact Admin";
          }
          addToast(errMessage, { appearance: "error" });
          return;
        });
    } else {
      setFormError({
        ...formError,
        phone_number_4: !form.phone_number_4,
        country_5: !form.country_5,
        state_6: !form.state_6,
        which_experience_8: !form.which_experience_8,
        volunteer_reason_9: !form.volunteer_reason_9,
      });
    }
  };

  console.log(form);

  return (
    <section className={`container-fluid ${styles.volunteeringForm}`}>
      <div className="container">
        {loading && (
          <LoadingScreen message="Your request is being processed......" />
        )}
        <BecomeReuse
          heading="REGISTER AS A VOLUNTEER"
          paragraph="Join our dynamic team and be part of something bigger. Help make Cloud Connect '24 a resounding success by joining the Cloud Connect volunteer force."
        />
        <div className={styles.formdetailsvolunteer}>
          <form
            action=""
            className={styles.formlogic}
            onSubmit={handleVolunteerForm}
          >
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
                  id="email"
                  label="email"
                  text="Email"
                  name="email_3"
                  type="email"
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
                  className={`${styles.PhoneInput} ${
                    styles.PhoneInputCountry
                  } ${formError.phone_number_4 ? styles.error : ""}`}
                />

                {formError.phone_number_4 && (
                  <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                    This field is required
                  </h6>
                )}
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
                  {countries.map((el, i) => (
                    <option key={el.isoCode} value={el.isoCode}>
                      {el.name}
                    </option>
                  ))}
                </select>
                {/* <FaChevronDown className={styles.iconic} /> */}
                {formError.country_5 && (
                  <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                    This field is required
                  </h6>
                )}
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
                  {states.map((el, i) => (
                    <option key={i} value={el?.name}>
                      {el?.name}
                    </option>
                  ))}
                </select>
                {/* <FaChevronDown className={styles.iconic} /> */}

                {formError.state_6 && (
                  <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                    This field is required
                  </h6>
                )}
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
                    <option value="To gain experience in event management or organization">
                      To gain experience in event management or organization.
                    </option>
                    <option value="To contribute to the success of the IT and service management community">
                      To contribute to the success of the IT and service
                      management community.
                    </option>
                    <option value="To network with industry professionals and expand my network">
                      To network with industry professionals and expand my
                      network.
                    </option>
                    <option
                      value="To learn more about service management and its impact on
                    businesses"
                    >
                      To learn more about service management and its impact on
                      businesses.
                    </option>
                    <option value="To give back to the community and support a worthwhile cause">
                      To give back to the community and support a worthwhile
                      cause.
                    </option>
                    <option value="To enhance my resume and gain valuable skills">
                      To enhance my resume and gain valuable skills.
                    </option>
                  </select>
                  {/* <FaChevronDown className={styles.iconic} /> */}
                  {formError.volunteer_reason_9 && (
                    <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                      This field is required
                    </h6>
                  )}
                </div>

                <div className=" position-relative">
                  <label
                    htmlFor="which_experience_8"
                    className={styles.labelStyle}
                  >
                    Which of these best describes your experience?
                  </label>
                  <select
                    name="which_experience_8"
                    id="which_experience_8"
                    className={`${styles.countrySelect} ${
                      formError.which_experience_8 ? styles.error : ""
                    }`}
                    value={form.which_experience_8}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="">Event Management</option>
                    <option value="Social media">Social media</option>
                    <option value="Customer service">Customer service</option>
                    <option value="Marketing and communications">
                      Marketing and communications
                    </option>
                    <option value="IT support">IT support</option>
                    <option value="Tech aspirant">Tech aspirant</option>
                    <option value="Student">Student</option>
                  </select>
                  {/* <FaChevronDown className={styles.iconic} /> */}
                  {formError.which_experience_8 && (
                    <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                      This field is required
                    </h6>
                  )}
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
                  <label
                    htmlFor="experience_desc_11"
                    className={styles.labelStyle}
                  >
                    If yes, can you describe your experience
                  </label>
                  <textarea
                    id="experience_desc_11"
                    name="experience_desc_11"
                    rows="10"
                    cols="100"
                    value={form.experience_desc_11 || ""}
                    onChange={handleChange}
                    className={`${styles.textareastyle} ${
                      formError.volunteer_reason_9 ? styles.error : ""
                    }`}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className={styles.additionalDetails}>
              <p>Additional Information</p>

              <div>
                <label
                  htmlFor="question_comment_info_12"
                  className={styles.labelStyle}
                  style={{ marginBottom: "10px" }}
                >
                  Do you have any other questions or comments?
                </label>
                <input
                  id="question_comment_info_12"
                  name="question_comment_info_12"
                  type="text"
                  placeholder=""
                  className={styles.textareastyle}
                  value={form.question_comment_info_12 || ""}
                  onChange={handleChange}
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
