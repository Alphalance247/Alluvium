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
import { environment } from "env/env.local";

const ExhibitionForm = () => {
  const [country] = useState(Country.getAllCountries());
  const [form, setForm] = useState({
    phone_number_5: "",
    explore_sponsorship_16: "Yes",
  });
  const { addToast } = useToasts();
  const [formError, setFormError] = useState({
    phone_number_5: false,
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
    setForm((prev) => ({ ...prev, phone_number_5: value }));
    setFormError((prev) => ({ ...prev, phone_number_5: false }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (
      form.phone_number_5 &&
      form.industry_8 &&
      form.country_6 &&
      form.hear_about_us_15
    ) {
      setLoading(true);
      await axios
        .post(
          `${environment.baseUrl}${environment.ExhibitionUrl}`,
          {
            ...form,
          },
          { timeout: 40000 }
        )
        .then((res) => {
          setLoading(false);

          if (res.status >= 200 && res.status < 300) {
            addToast(
              "Your request has been submitted successfully. Thank you, we'll be in touch.",
              {
                appearance: "success",
                autoDismiss: true, // Enable auto dismiss
                autoDismissTimeout: 5000, // Dismiss after 5 seconds
              }
            );
            setForm({
              ...form,
              first_name_1: "",
              last_name_2: "",
              job_title_3: "",
              company_desc_9: "",
              phone_number_5: "",
              email_4: "",
              country_6: "",
              describe_product_service_12: "",
              booth_req_14: "",
              other_questsion_17: "",
              hear_about_us_15: "",
              company_name_7: "",
              explore_sponsorship_16: "Yes",
              target_audience_13: "",
              industry_8: "",
            });
          } else {
            addToast(
              res.data.error ||
                "Error occured, please try again or contact Admin",
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
              "Network error. Please check your internet connection and try again.";
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
        industry_8: !form.industry_8,
        hear_about_us_15: !form.hear_about_us_15,
        country_6: !form.country_6,
        phone_number_5: !form.phone_number_5,
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
                  id="first_name_1"
                  label="first_name_1"
                  text="First Name"
                  name="first_name_1"
                  type="text"
                  value={form.first_name_1 || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.first_name_1}
                />
              </div>

              <div>
                <Input
                  id="last_name_2"
                  label="last_name_2"
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
                  name="job_title_3"
                  type="text"
                  value={form.job_title_3 || ""}
                  placeholder=""
                  onChange={handleChange}
                  errorF={formError.job_title_3}
                />
              </div>

              <div>
                <Input
                  id="Email"
                  label="Email"
                  text="Email"
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
                  Phone number
                </label>
                <PhoneInput
                  placeholder="8140686688"
                  international
                  required
                  defaultCountry="NG"
                  value={form.phone_number_5 ?? ""}
                  onChange={handleNumber}
                  className={`${styles.PhoneInput} ${
                    styles.PhoneInputCountry
                  } ${formError.phone_number_5 ? styles.error : ""}`}
                />

                {formError.phone_number_5 && (
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
                  name="country_6"
                  id="Country"
                  className={`${styles.countrySelect} ${
                    formError.country_6 ? styles.error : ""
                  }`}
                  value={form.country_6}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {country.map((el, i) => (
                    <option key={i} value={el.name}>
                      {el.name}
                    </option>
                  ))}
                </select>
                {formError.country_6 && (
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
                    id="company_name_7"
                    label="company_name_7"
                    text="Company name"
                    name="company_name_7"
                    type="text"
                    value={form.company_name_7 || ""}
                    placeholder=""
                    onChange={handleChange}
                    errorF={formError.company_name_7}
                  />
                </div>

                <div>
                  <label
                    htmlFor="industry_8"
                    className={styles.labelStyle}
                    style={{ marginBottom: "7px" }}
                  >
                    Industry
                  </label>

                  <select
                    name="industry_8"
                    id="industry_8"
                    className={`${styles.countrySelect} ${
                      formError.industry_8 ? styles.error : ""
                    }`}
                    value={form?.industry_8}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="Finance">Finance</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Education">Education</option>
                    <option value="Government">Government</option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                    <option value="Ecommerce+">Ecommerce+</option>
                  </select>

                  {formError?.industry_8 && (
                    <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                      This field is required
                    </h6>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="company_desc_9"
                  className={styles.labelStyle}
                  style={{ marginBottom: "10px" }}
                >
                  Provide a brief description of your company (150 words or
                  less). *
                </label>
                <textarea
                  id="company_desc_9"
                  name="company_desc_9"
                  rows="10"
                  cols="100"
                  required
                  value={form?.company_desc_9 || ""}
                  onChange={handleChange}
                  className={styles.textareastyle}
                ></textarea>
              </div>
            </div>

            <div className={styles.packageForm}>
              <p>EXHIBITORS Packages</p>
              <div className=" d-grid gap-3">
                <div>
                  <label
                    htmlFor="describe_product_service_12"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Describe the products or services you plan to showcase *
                  </label>
                  <textarea
                    id="describe_product_service_12"
                    name="describe_product_service_12"
                    rows="10"
                    cols="100"
                    required
                    value={form?.describe_product_service_12 || ""}
                    onChange={handleChange}
                    className={styles.textareastyle}
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="target_audience_13"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Who is your target audience at the event *
                  </label>
                  <textarea
                    id="target_audience_13"
                    name="target_audience_13"
                    rows="10"
                    cols="100"
                    required
                    value={form?.target_audience_13 || ""}
                    onChange={handleChange}
                    className={styles.textareastyle}
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="booth_req_14"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Do you have any special requirements for your booth *
                  </label>
                  <textarea
                    id="booth_req_14"
                    name="booth_req_14"
                    rows="10"
                    cols="100"
                    value={form?.booth_req_14 || ""}
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
                    htmlFor="hear_about_us_15"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    How did you hear about us? *
                  </label>
                  <select
                    name="hear_about_us_15"
                    id="hear_about_us_15"
                    className={`${styles.countrySelect} ${
                      formError?.hear_about_us_15 ? styles.error : ""
                    }`}
                    value={form?.hear_about_us_15}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
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
                    <option value="Previous Attendance">
                      Previous Attendance
                    </option>
                  </select>
                  {/* <FaChevronDown className={styles.iconic} /> */}

                  {formError?.hear_about_us_15 && (
                    <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                      This field is required
                    </h6>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="explore_sponsorship_16"
                    className={styles.labelStyle}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    Would you like to explore sponsorship opportunities to
                    enhance your presence
                  </label>

                  <div>
                    <input
                      type="radio"
                      name="explore_sponsorship_16"
                      value="Yes"
                      id=""
                      checked={form?.explore_sponsorship_16 === "Yes"}
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
                      name="explore_sponsorship_16"
                      id=""
                      value="No"
                      checked={form?.explore_sponsorship_16 === "No"}
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
                    htmlFor="other_questsion_17"
                    className={styles.labelStyle}
                    style={{ marginBottom: "10px" }}
                  >
                    Do you have any other questions or comments?
                  </label>
                  <input
                    id="other_questsion_17"
                    name="other_questsion_17"
                    type="text"
                    placeholder=""
                    className={styles.textareastyle}
                    value={form.other_questsion_17 || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <button className={styles.button1}>Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionForm;
