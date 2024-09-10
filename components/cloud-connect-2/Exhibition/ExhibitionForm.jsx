import BecomeReuse from "components/cloud-connect-common/becomeReuse";
import Input from "components/licence-component/inputP";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Country } from "country-state-city";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import LoadingScreen from "components/loading";
import styles from "../../../styles/cloud2.4/sponsor.module.scss";

const ExhibitionForm = () => {
  const [country] = useState(Country.getAllCountries());
  const [form, setForm] = useState({
    phone_number_6: "",
  });
  const { addToast } = useToasts();
  const [formError, setFormError] = useState({
    phone_number_6: false,
  });
  const [loading, setLoading] = useState(false);

  console.log(form);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    setFormError((prev) => ({ ...prev, [name]: false }));
  };

  const handleNumber = (value) => {
    setForm((prev) => ({ ...prev, phone_number_6: value }));
    setFormError((prev) => ({ ...prev, phone_number_6: false }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (
      form.country_7 &&
      form.phone_number_6 &&
      form.What_are_your_primary_objectives_12 &&
      form.preferred_sponsorship_tier_10 &&
      form.budget_9 &&
      form.hear_about_us_11
    ) {
      setLoading(true);
      await axios
        .post("https://vast.ec2.alluvium.net/cloud-connect/sponsorship-form", {
          ...form,
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
              first_name_20: "",
              last_name_2: "",
              job_title_4: "",
              company_organization_3: "",
              phone_number_6: "",
              additional_info_14: "",
              email_5: "",
              country_7: "",
              website_url_8: "",
              hear_about_us_11: "",
              What_are_your_primary_objectives_12: "",
              preferred_sponsorship_tier_10: "",
              budget_9: "",
            });
          } else {
            addToast(
              res.data.error ||
                "Error occured, please try again or contact Admin",
              { appearance: "error" }
            );
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
        phone_number_6: !form.phone_number_6,
        hear_about_us_11: !form.hear_about_us_11,
        budget_9: !form.budget_9,
        What_are_your_primary_objectives_12:
          !form.What_are_your_primary_objectives_12,
        preferred_sponsorship_tier_10: !form.preferred_sponsorship_tier_10,
        country_7: !form.country_7,
      });
    }
  };

  return (
    <section
      className={`container-fluid ${styles.sponsorshipform}`}
      id="sponsor-form-section"
    >
      <div className="container">
        {loading && (
          <LoadingScreen message="Your request is being processed......" />
        )}
        <BecomeReuse
          heading="BECOME AN EXHIBITOR"
          paragraph="Explore our sponsorship packages and join us in making a significant impact."
        />
        <div className={styles.formdetails}>
          <form
            action=""
            className={styles.formlogic}
            onSubmit={handleSubmitForm}
          >
            <p>BASIC INFORMATION</p>
            <div className={styles.input1style}>
              <div>
                <Input
                  id="first_name"
                  label="first_name"
                  text="First Name"
                  name="first_name_20"
                  type="text"
                  value={form.first_name_20 || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.first_name_20}
                />
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
              </div>

              <div>
                <Input
                  id="Job title"
                  label="Job title"
                  text="Job title "
                  name="company_organization_3"
                  type="text"
                  value={form.company_organization_3 || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.company_organization_3}
                />
              </div>

              <div>
                <Input
                  id="Email"
                  label="Email"
                  text="Email"
                  name="job_title_4"
                  type="email"
                  value={form.job_title_4 || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.job_title_4}
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
                  value={form.phone_number_6 ?? ""}
                  onChange={handleNumber}
                  className={`${styles.PhoneInput} ${
                    styles.PhoneInputCountry
                  } ${formError.phone_number_6 ? styles.error : ""}`}
                />

                {formError.phone_number_6 && (
                  <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                    Please enter your phone number
                  </h6>
                )}
              </div>

              <div className=" position-relative">
                <label htmlFor="Country" className={styles.labelStyle}>
                  Country <span>*</span>
                </label>

                <select
                  name="country_7"
                  id="Country"
                  className={`${styles.countrySelect} ${
                    formError.country_7 ? styles.error : ""
                  }`}
                  value={form.country_7}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {country.map((el, i) => (
                    <option key={i} value={el.name}>
                      {el.name}
                    </option>
                  ))}
                </select>
                {/* <FaChevronDown className={styles.iconic} /> */}
                {formError.country_7 && (
                  <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                    Please enter your country
                  </h6>
                )}
              </div>
            </div>

            <div className={styles.packageForm}>
              <p>Company details</p>

              <div className={styles.input3style}>
                <div>
                  <Input
                    id="Job title"
                    label="Job title"
                    text="Company name"
                    name="company_organization_3"
                    type="text"
                    value={form.company_organization_3 || ""}
                    placeholder=""
                    onChange={handleChange}
                    errorF={formError.company_organization_3}
                  />
                </div>

                <div className=" position-relative">
                  <label
                    htmlFor="Country"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Industry
                  </label>

                  <select
                    name="preferred_sponsorship_tier_10"
                    id="preferred_sponsorship_tier_10"
                    className={`${styles.countrySelect} ${
                      formError.preferred_sponsorship_tier_10
                        ? styles.error
                        : ""
                    }`}
                    value={form.preferred_sponsorship_tier_10}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                  </select>
                  {/* <FaChevronDown className={styles.iconic} /> */}
                  {/* {formError.preferred_sponsorship_tier_10 && (
                    <p style={{ color: "red" }}>This field is Required</p>
                  )} */}
                  {formError.preferred_sponsorship_tier_10 && (
                    <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                      Please select your preferred tier
                    </h6>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="additional_info_14"
                  className={styles.labelStyle}
                  style={{ marginBottom: "10px" }}
                >
                  Provide a brief description of your company (150 words or
                  less).
                </label>
                <textarea
                  id="additional_info_14"
                  name="additional_info_14"
                  rows="10"
                  cols="100"
                  value={form.additional_info_14 || ""}
                  onChange={handleChange}
                  className={styles.textareastyle}
                ></textarea>
              </div>
            </div>

            <div className={styles.packageForm}>
              <p>EXHIBITORS Packages</p>

              <div className={styles.input3style}>
                <div className=" position-relative">
                  <label
                    htmlFor="Country"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    What is your budget for booth *
                  </label>

                  <select
                    name="budget_9"
                    id="budget_9"
                    className={`${styles.countrySelect} ${
                      formError.budget_9 ? styles.error : ""
                    }`}
                    value={form.budget_9}
                    onChange={handleChange}
                  >
                    <option value="">Select budget</option>
                    <option value="Below NGN 2,000,000">
                      Below NGN 2,000,000
                    </option>
                    <option value="NGN 2,000,000 - 5,000,000">
                      NGN 2,000,000 - 5,000,000
                    </option>
                    <option value="NGN 5,000,000 - 10,000,000">
                      NGN 5,000,000 - 10,000,000
                    </option>
                    <option value="NGN 10,000,000 - 15,000,000">
                      NGN 10,000,000 - 15,000,000
                    </option>
                    <option value="NGN 15,000,000 - 20,000,000">
                      NGN 15,000,000 - 20,000,000
                    </option>
                    <option value="NGN 20,000,000 - 25,000,000">
                      NGN 20,000,000 - 25,000,000
                    </option>
                  </select>
                  {/* <FaChevronDown className={styles.iconic} /> */}
                  {/* {formError. && (
                    <p style={{ color: "red" }}>This field is Required</p>
                  )} */}
                  {formError.budget_9 && (
                    <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                      Please select your budget
                    </h6>
                  )}
                </div>

                <div className=" position-relative">
                  <label
                    htmlFor="Country"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Exhibitor package
                  </label>

                  <select
                    name="preferred_sponsorship_tier_10"
                    id="preferred_sponsorship_tier_10"
                    className={`${styles.countrySelect} ${
                      formError.preferred_sponsorship_tier_10
                        ? styles.error
                        : ""
                    }`}
                    value={form.preferred_sponsorship_tier_10}
                    onChange={handleChange}
                  >
                    <option value="">Select tier</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                  </select>
                  {/* <FaChevronDown className={styles.iconic} /> */}
                  {/* {formError.preferred_sponsorship_tier_10 && (
                    <p style={{ color: "red" }}>This field is Required</p>
                  )} */}
                  {formError.preferred_sponsorship_tier_10 && (
                    <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                      Please select your preferred tier
                    </h6>
                  )}
                </div>
              </div>
              <div className=" d-grid gap-3">
                <div>
                  <label
                    htmlFor="additional_info_14"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Describe the products or services you plan to showcase
                  </label>
                  <textarea
                    id="additional_info_14"
                    name="additional_info_14"
                    rows="10"
                    cols="100"
                    value={form.additional_info_14 || ""}
                    onChange={handleChange}
                    className={styles.textareastyle}
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="additional_info_14"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Who is your target audience at the event
                  </label>
                  <textarea
                    id="additional_info_14"
                    name="additional_info_14"
                    rows="10"
                    cols="100"
                    value={form.additional_info_14 || ""}
                    onChange={handleChange}
                    className={styles.textareastyle}
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="additional_info_14"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Do you have any special requirements for your booth
                  </label>
                  <textarea
                    id="additional_info_14"
                    name="additional_info_14"
                    rows="10"
                    cols="100"
                    value={form.additional_info_14 || ""}
                    onChange={handleChange}
                    className={styles.textareastyle}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className={styles.additionalDetails}>
              <p>Additional Information</p>
              <div className=" d-grid gap-3">
                <div className=" position-relative">
                  <label
                    htmlFor="hear_about_us_11"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    How did you hear about us? *
                  </label>
                  <select
                    name="hear_about_us_11"
                    id="hear_about_us_11"
                    className={`${styles.countrySelect} ${
                      formError.hear_about_us_11 ? styles.error : ""
                    }`}
                    value={form.hear_about_us_11}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Social media">Google</option>
                    <option value="Social media">Social media</option>
                    <option value="Social media">
                      Referral from a Friend or Colleague
                    </option>
                    <option value="Event Website">Event Website</option>
                    <option value="Company Website">Company Website</option>
                    <option value="Email Newsletter">Email Newsletter</option>
                    <option value="Previous Attendance">
                      Previous Attendance
                    </option>
                  </select>
                  {/* <FaChevronDown className={styles.iconic} /> */}

                  {formError.hear_about_us_11 && (
                    <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                      This field is required
                    </h6>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="additional_info_14"
                    className={`${styles.labelStyle}`}
                    style={{ marginBottom: "10px" }}
                  >
                    Please provide additional information or context about your
                    objectives for a potential partnership with us
                  </label>
                  <textarea
                    id="additional_info_14"
                    name="additional_info_14"
                    rows="10"
                    cols="100"
                    value={form.additional_info_14 || ""}
                    onChange={handleChange}
                    className={styles.textareastyle}
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="relevant_info"
                    className={styles.labelStyle}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    Would you like to explore sponsorship opportunities to
                    enhance your presence
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
                    <h6
                      className="d-inline-block mx-2"
                      style={{ color: "#374151" }}
                    >
                      Yes
                    </h6>
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
                    <h6
                      className="d-inline-block mx-2"
                      style={{ color: "#374151" }}
                    >
                      No
                    </h6>
                  </div>
                </div>

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
            </div>

            <div>
              <button className={styles.button1}>Submit Applicationt</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionForm;
