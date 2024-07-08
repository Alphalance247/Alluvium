import Layout from "components/layout";
import styles from "../../../styles/licence.module.scss";
import { useState } from "react";
import Input from "components/licence-component/inputP";
import { useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { ToastProvider, useToasts } from "react-toast-notifications";
import LoadingScreen from "components/loading";

const RequestForm = () => {
  const [dropDown, setDropDown] = useState("");
  const [dropDownForm, setDropDownForm] = useState("");
  const [cloudDrop, setCloudDrop] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    phoneNumber: "",
  });
  const { addToast } = useToasts();

  const [formError, setFormError] = useState({});

  console.log(form);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    setFormError({ ...formError, [name]: false });
  };

  const handleDropDown = (e) => {
    setDropDown(e.target.value);
    setDropDownForm(e.target.value);
  };

  const handleDropDownForm = (e) => {
    setDropDownForm(e.target.value);
  };

  const handleNumber = (value) => {
    setForm((prev) => ({ ...prev, phoneNumber: value }));
    // setPhoneError(false);
  };

  useEffect(() => {
    // Reset the form state when dropDownForm changes
    setForm({});
    setCloudDrop("");
  }, [dropDownForm]);

  const hadleSubmitDataLicence = async (e) => {
    e.preventDefault();

    if (
      form.first_name &&
      form.last_name &&
      form.jobFunction &&
      form.company &&
      form.current_technical_name &&
      form.current_technical_email &&
      form.data_center_plan &&
      form.cloud_sub_mode &&
      form.have_data_center_license &&
      form.phoneNumber &&
      form.relevant_info
    ) {
      setLoading(true);
      await axios
        .post("https://vast.ec2.alluvium.net/support/data-center-license/", {
          ...form,
        })
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
          addToast(
            "Your request has been submitted successfully. Thank you, we'll be in touch.",
            {
              appearance: "success",
            }
          );
          setForm({
            ...form,
            first_name: "",
            last_name: "",
            jobFunction: "",
            company: "",
            current_technical_name: "",
            current_technical_email: "",
            data_center_plan: "",
            cloud_sub_mode: "",
            have_data_center_license: "",
            phoneNumber: "",
            relevant_info: "",
          });
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
        first_name: !form.first_name,
        last_name: !form.last_name,
        jobFunction: !form.jobFunction,
        company: !form.company,
        current_technical_name: !form.current_technical_name,
        current_technical_email: !form.current_technical_email,
        data_center_plan: !form.data_center_plan,
        cloud_sub_mode: !form.cloud_sub_mode,
        apps_desired_user: !form.apps_desired_user,
        have_data_center_license: !form.have_data_center_license,
        phoneNumber: !form.phoneNumber,
        relevant_info: !form.relevant_info,
      });
    }
  };

  const hadleSubmitCloudLicence = async (e) => {
    e.preventDefault();

    if (form.have_cloud_env) {
      setLoading(true);
      await axios
        .post("https://vast.ec2.alluvium.net/support/cloud-license/", {
          ...form,
        })
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
          addToast(
            "Your request has been submitted successfully. Thank you, we'll be in touch.",
            {
              appearance: "success",
            }
          );
          setForm({
            ...form,
            first_name: "",
            last_name: "",
            jobFunction: "",
            company: "",
            current_technical_name: "",
            current_technical_email: "",
            have_cloud_env: "",
            phoneNumber: "",
            relevant_info: "",
          });
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
        have_cloud_env: !form.have_cloud_env,
      });
    }
  };

  const hadleSubmitAtlassianmigration = async (e) => {
    e.preventDefault();

    if (form.instance_size && form.instances_to_migrate_to) {
      setLoading(true);
      await axios
        .post("https://vast.ec2.alluvium.net/support/consultancy/", {
          ...form,
        })
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
          addToast(
            "Your request has been submitted successfully. Thank you, we'll be in touch.",
            {
              appearance: "success",
            }
          );
          setForm({
            ...form,
            first_name: "",
            last_name: "",
            jobFunction: "",
            company: "",
            phoneNumber: "",
            proj_description: "",
            instance_size: "",
            instances_to_migrate_to: "",
            others: "",
          });
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
        instance_size: !form.instance_size,
        instances_to_migrate_to: !form.instances_to_migrate_to,
      });
    }
  };
  const hadleSubmitConsultancyRequest = async (e) => {
    e.preventDefault();

    if (form.instance_size) {
      setLoading(true);
      await axios
        .post("https://vast.ec2.alluvium.net/support/consultancy/", {
          ...form,
        })
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
          addToast(
            "Your request has been submitted successfully. Thank you, we'll be in touch.",
            {
              appearance: "success",
            }
          );
          setForm({
            ...form,
            first_name: "",
            last_name: "",
            jobFunction: "",
            company: "",
            phoneNumber: "",
            proj_description: "",
            instance_size: "",
          });
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
        instance_size: !form.instance_size,
      });
    }
  };

  const hadleTrainingRequest = async (e) => {
    e.preventDefault();

    if (form.type_of_training) {
      setLoading(true);
      await axios
        .post("https://vast.ec2.alluvium.net/support/training/", {
          ...form,
        })
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
          addToast(
            "Your request has been submitted successfully. Thank you, we'll be in touch.",
            {
              appearance: "success",
            }
          );

          setForm({
            ...form,
            first_name: "",
            last_name: "",
            jobFunction: "",
            company: "",
            phoneNumber: "",
            kind_of_training: "",
            type_of_training: "",
          });
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
        type_of_training: !form.type_of_training,
      });
    }
  };

  return (
    <Layout>
      {loading && (
        <LoadingScreen message="Your request is being processed......" />
      )}
      <div className={`container mx-auto ${styles.contactForm}`}>
        <h3>JSM requests for incoming sales requests</h3>
        <p>
          Need assistance with a sale, your account, the Partner Program or
          more? Submit a request below and we will get to work! A Guide to
          Partner Support Ticket Categorizations
        </p>
        <div className={` ${styles.portalGroup}`}>
          <label htmlFor="Licenses">What can we help you with?</label> <br />
          <br />
          <select name="" id="" value={dropDown} onChange={handleDropDown}>
            <option value="" disabled></option>
            <option value="Atlassianlicenses">Atlassian licenses</option>
            <option value="AtlassianConsultancy">Atlassian Consultancy</option>
            <option value="AtlassianTraining">Atlassian Training</option>
          </select>
        </div>

        {dropDown === "Atlassianlicenses" && (
          <div className={` ${styles.portalGroup}`}>
            <select name="" id="" onChange={handleDropDownForm}>
              <option value=""></option>
              <option value="DataCenterLicenserequest">
                Data Center License request
              </option>
              <option value="CloudLicenserequest">Cloud License request</option>
            </select>
          </div>
        )}

        {dropDown === "AtlassianConsultancy" && (
          <div className={` ${styles.portalGroup}`}>
            <select name="" id="" onChange={handleDropDownForm}>
              <option value=""></option>
              <option value="Consultancyrequest">Consultancy request</option>
              <option value="Atlassianmigrationrequest">
                Atlassian migration request
              </option>
            </select>
          </div>
        )}

        {dropDown === "AtlassianTraining" && (
          <div className={` ${styles.portalGroup}`}>
            <select name="" id="" onChange={handleDropDownForm}>
              <option value=""></option>
              <option value="Training Request">
                Atlassian Training Request
              </option>
            </select>
          </div>
        )}

        {dropDownForm === "DataCenterLicenserequest" && (
          <ToastProvider>
            <div className={`${styles.formStyle}`}>
              <form action="submit" onSubmit={hadleSubmitDataLicence}>
                <div>
                  <Input
                    id="first_name"
                    label="first_name"
                    text="First Name"
                    name="first_name"
                    type="text"
                    value={form.first_name || ""}
                    placeholder="firstname"
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
                    placeholder="Last Name"
                    onChange={handleChange}
                    errorF={formError.last_name}
                  />

                  {/* {formError.lastname && (
                  <h1 className=" text-[#EC6401]">Last Name cannot be empty</h1>
                )} */}
                </div>

                <div>
                  <Input
                    id="jobFunction"
                    label="jobFunction"
                    text="Job function"
                    name="jobFunction"
                    type="text"
                    value={form.jobFunction || ""}
                    placeholder="Job function"
                    onChange={handleChange}
                    errorF={formError.jobFunction}
                  />
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label htmlFor="phoneNumber">
                    Phone number <span style={{ color: "#FF1616" }}>*</span>
                  </label>{" "}
                  <br /> <br />
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

                <div>
                  <Input
                    id="company"
                    label="company"
                    text="Company name"
                    name="company"
                    type="text"
                    value={form.company || ""}
                    placeholder="Company name"
                    onChange={handleChange}
                    errorF={formError.company}
                  />
                </div>

                <div>
                  <Input
                    id="current_technical_name"
                    label="current_technical_name"
                    text="Name of current technical contact"
                    name="current_technical_name"
                    type="text"
                    value={form.current_technical_name || ""}
                    placeholder="Name of current technical contact"
                    onChange={handleChange}
                    errorF={formError.current_technical_name}
                  />
                </div>

                <div>
                  <Input
                    id="current_technical_email"
                    label="current_technical_email"
                    text="Email address of technical contact "
                    name="current_technical_email"
                    type="email"
                    value={form.current_technical_email || ""}
                    placeholder="Email address of technical contact"
                    onChange={handleChange}
                    errorF={formError.current_technical_email}
                  />
                </div>

                <div className={` ${styles.portalGroupForm}`}>
                  <label htmlFor="have_data_center_license">
                    Do you already have Atlassian Data Center licenses?
                  </label>
                  <br /> <br />
                  <select
                    name="have_data_center_license"
                    value={form.have_data_center_license}
                    id="have_data_center_license"
                    onChange={handleChange}
                    className={`${
                      formError.have_data_center_license
                        ? styles.errorSelect
                        : styles.selectStyle
                    }`}
                  >
                    <option value=""></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  {form.have_data_center_license === "Yes" && (
                    <div>
                      <Input
                        id="sen_desired_user"
                        label="sen_desired_user"
                        text="Please list the SEN-numbers of your current Atlassian and Marketplace apps and desired user "
                        name="sen_desired_user"
                        type="text"
                        value={form.sen_desired_user || ""}
                        errorF={formError.sen_desired_user}
                        placeholder="Please list the SEN-numbers of your current..."
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>

                <div style={{ marginTop: "2rem" }}>
                  {form.have_data_center_license === "No" && (
                    <div>
                      <Input
                        label="apps_desired_user"
                        text="Please list the Atlassian and/or Marketplace apps and user tiers you’d like to get a quote for"
                        name="apps_desired_user"
                        type="text"
                        errorF={formError.apps_desired_user}
                        value={form.apps_desired_user || ""}
                        onChange={handleChange}
                        placeholder="Please list the Atlassian and/or Marketplace apps and user..."
                      />
                    </div>
                  )}
                </div>

                <div className={` ${styles.portalGroupForm}`}>
                  <label htmlFor="cloud_sub_mode">
                    Would you like a monthly or annual Cloud subscription?
                  </label>
                  <br /> <br />
                  <select
                    name="cloud_sub_mode"
                    value={form.cloud_sub_mode || ""}
                    id="cloud_sub_mode"
                    onChange={handleChange}
                    className={`${
                      formError.have_data_center_license
                        ? styles.errorSelect
                        : styles.selectStyle
                    }`}
                  >
                    <option value=""></option>
                    <option value="Annual subscription">
                      Annual subscription
                    </option>
                    <option value="Monthly subscription">
                      Monthly subscription
                    </option>
                    <option value="I’m not sure">I’m not sure</option>
                  </select>
                </div>

                <div
                  className={` ${styles.portalGroupForm}`}
                  style={{ marginTop: "2rem" }}
                >
                  <label htmlFor="data_center_plan">
                    What Atlassian Cloud plan would you like?
                  </label>
                  <br /> <br />
                  <select
                    name="data_center_plan"
                    value={form.data_center_plan || ""}
                    id="data_center_plan"
                    onChange={handleChange}
                    className={`${
                      formError.data_center_plan
                        ? styles.errorSelect
                        : styles.selectStyle
                    }`}
                  >
                    <option value=""></option>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="I’m not sure">I’m not sure</option>
                  </select>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <label htmlFor="relevant_info">
                    Add any other relevant information below:
                  </label>
                  <br /> <br />
                  <textarea
                    id="relevant_info"
                    name="relevant_info"
                    rows="10"
                    cols="50"
                    required
                    placeholder="Enter your feedback here"
                    value={form.relevant_info || ""}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <button>Submit Request</button>
                </div>
              </form>
            </div>
          </ToastProvider>
        )}

        {dropDownForm === "CloudLicenserequest" && (
          <ToastProvider>
            <div className={`${styles.formStyle}`}>
              <form action="" onSubmit={hadleSubmitCloudLicence}>
                <div>
                  <Input
                    label="first_name"
                    id="first_name"
                    text="First Name"
                    name="first_name"
                    type="text"
                    value={form.first_name || ""}
                    placeholder="firstname"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Input
                    label="last_name"
                    id="last_name"
                    text="Last Name"
                    name="last_name"
                    type="text"
                    value={form.last_name || ""}
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Input
                    label="jobFunction"
                    text="Job function"
                    name="jobFunction"
                    id="jobFunction"
                    type="text"
                    value={form.jobFunction || ""}
                    placeholder="Job function"
                    onChange={handleChange}
                  />
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label htmlFor="phoneNumber">
                    Phone number <span style={{ color: "#FF1616" }}>*</span>
                  </label>{" "}
                  <br /> <br />
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

                <div>
                  <Input
                    label="company"
                    id="company"
                    text="Company name"
                    name="company"
                    type="text"
                    value={form.company || ""}
                    placeholder="Company name"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Input
                    label="current_technical_name"
                    id="current_technical_name"
                    text="Name of current technical contact"
                    name="current_technical_name"
                    type="text"
                    value={form.current_technical_name || ""}
                    placeholder="Name of current technical contact"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Input
                    label="current_technical_email"
                    id="current_technical_email"
                    text="Email address of technical contact"
                    name="current_technical_email"
                    type="email"
                    value={form.current_technical_email || ""}
                    placeholder="Email address of technical contact"
                    onChange={handleChange}
                  />
                </div>

                <div className={` ${styles.portalGroupForm}`}>
                  <label htmlFor="have_cloud_env">
                    Do you already have an Atlassian Cloud environment?
                  </label>
                  <br /> <br />
                  <select
                    name="have_cloud_env"
                    value={form.have_cloud_env}
                    id="have_cloud_env"
                    onChange={handleChange}
                    className={`${
                      formError.have_cloud_env
                        ? styles.errorSelect
                        : styles.selectStyle
                    }`}
                  >
                    <option value=""></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  {form.have_cloud_env === "Yes" && (
                    <div>
                      <Input
                        id="cloud_url"
                        label="cloud_url"
                        text="Please share the Cloud URL of your current Atlassian Cloud environment and desired user tiers"
                        name="cloud_url"
                        type="text"
                        value={form.cloud_url || ""}
                        errorF={formError.cloud_url}
                        placeholder="Please share the Cloud URL of your current Atlassian..."
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>

                <div style={{ marginTop: "2rem" }}>
                  {form.have_cloud_env === "No" && (
                    <div>
                      <Input
                        label="apps_desired_user"
                        text="Please list the Atlassian and/or Marketplace apps and user tiers you’d like to get a quote for"
                        name="apps_desired_user"
                        type="text"
                        errorF={formError.apps_desired_user}
                        value={form.apps_desired_user || ""}
                        onChange={handleChange}
                        placeholder="Please list the Atlassian and/or Marketplace apps and user..."
                      />
                    </div>
                  )}
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <label htmlFor="feedback">
                    Add any other relevant information below:
                  </label>
                  <br /> <br />
                  <textarea
                    id="relevant_info"
                    name="relevant_info"
                    rows="10"
                    cols="50"
                    required
                    placeholder="Enter your feedback here"
                    value={form.relevant_info || ""}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <button> {loading ? "LOADING..." : "Submit Request"}</button>
                </div>
              </form>
            </div>
          </ToastProvider>
        )}

        {dropDownForm === "Consultancyrequest" && (
          <div className={`${styles.formStyle}`}>
            <form action="submit" onSubmit={hadleSubmitConsultancyRequest}>
              <div>
                <Input
                  label="first_name"
                  id="first_name"
                  text="First Name"
                  name="first_name"
                  type="text"
                  value={form.first_name || ""}
                  placeholder="firstname"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Input
                  label="last_name"
                  id="last_name"
                  text="Last Name"
                  name="last_name"
                  type="text"
                  value={form.last_name || ""}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Input
                  label="jobFunction"
                  text="Job function"
                  name="jobFunction"
                  id="jobFunction"
                  type="text"
                  value={form.jobFunction || ""}
                  placeholder="Job function"
                  onChange={handleChange}
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label htmlFor="phoneNumber">
                  Phone number <span style={{ color: "#FF1616" }}>*</span>
                </label>{" "}
                <br /> <br />
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

              <div>
                <Input
                  label="company"
                  id="company"
                  text="Company name"
                  name="company"
                  type="text"
                  value={form.company || ""}
                  placeholder="Company name"
                  onChange={handleChange}
                />
              </div>

              <div className={` ${styles.portalGroupForm}`}>
                <label htmlFor="instance_size">
                  Size of current Atlassian instances
                </label>
                <br /> <br />
                <select
                  name="instance_size"
                  value={form.instance_size || ""}
                  id="instance_size"
                  onChange={handleChange}
                  className={`${
                    formError.instance_size
                      ? styles.errorSelect
                      : styles.selectStyle
                  }`}
                >
                  <option value=""></option>
                  <option value="0-100">0-100 users</option>
                  <option value="101-250">101-250 users</option>
                  <option value="251-500">251-500 users</option>
                  <option value="501+">501+ users</option>
                </select>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <label htmlFor="feedback">
                  Describe your project or any other relevant information
                </label>
                <br /> <br />
                <textarea
                  id="proj_description"
                  name="proj_description"
                  rows="10"
                  cols="50"
                  placeholder="Enter your feedback here"
                  value={form.proj_description || ""}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button> {loading ? "LOADING..." : "Submit Request"}</button>
              </div>
            </form>
          </div>
        )}

        {dropDownForm === "Atlassianmigrationrequest" && (
          <div className={`${styles.formStyle}`}>
            <form action="submit" onSubmit={hadleSubmitAtlassianmigration}>
              <div>
                <Input
                  label="first_name"
                  id="first_name"
                  text="First Name"
                  name="first_name"
                  type="text"
                  value={form.first_name || ""}
                  placeholder="firstname"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Input
                  label="last_name"
                  id="last_name"
                  text="Last Name"
                  name="last_name"
                  type="text"
                  value={form.last_name || ""}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Input
                  label="jobFunction"
                  text="Job function"
                  name="jobFunction"
                  id="jobFunction"
                  type="text"
                  value={form.jobFunction || ""}
                  placeholder="Job function"
                  onChange={handleChange}
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label htmlFor="phoneNumber">
                  Phone number <span style={{ color: "#FF1616" }}>*</span>
                </label>{" "}
                <br /> <br />
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

              <div>
                <Input
                  label="company"
                  id="company"
                  text="Company name"
                  name="company"
                  type="text"
                  value={form.company || ""}
                  placeholder="Company name"
                  onChange={handleChange}
                />
              </div>

              <div className={` ${styles.portalGroupForm}`}>
                <label htmlFor="instance_size">
                  Size of current Atlassian instances
                </label>
                <br /> <br />
                <select
                  name="instance_size"
                  value={form.instance_size || ""}
                  id="instance_size"
                  onChange={handleChange}
                  className={`${
                    formError.instance_size
                      ? styles.errorSelect
                      : styles.selectStyle
                  }`}
                >
                  <option value=""></option>
                  <option value="0-100">0-100 users</option>
                  <option value="101-250">101-250 users</option>
                  <option value="251-500">251-500 users</option>
                  <option value="501+">501+ users</option>
                </select>
              </div>

              <div
                className={` ${styles.portalGroupForm}`}
                style={{ marginTop: "2rem" }}
              >
                <label htmlFor="instances_to_migrate_to">
                  Which Atlassian instances would you like to migrate?
                </label>
                <br /> <br />
                <select
                  name="instances_to_migrate_to"
                  value={form.instances_to_migrate_to || ""}
                  id="instances_to_migrate_to"
                  onChange={handleChange}
                  className={`${
                    formError.instances_to_migrate_to
                      ? styles.errorSelect
                      : styles.selectStyle
                  }`}
                >
                  <option value=""></option>
                  <option value="Jira">Jira</option>
                  <option value="JSM">JSM</option>
                  <option value="Confluence">Confluence</option>
                  <option value="Bitbucket">Bitbucket</option>
                  <option value="others">others</option>
                </select>
                {form.instances_to_migrate_to === "others" && (
                  <div style={{ marginTop: "2rem" }}>
                    <Input
                      label="others"
                      text="Others"
                      name="others"
                      type="text"
                      value={form.others || ""}
                      placeholder="Fill in"
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>

              <div style={{ marginTop: "2rem" }}>
                <label htmlFor="feedback">
                  Describe your project or any other relevant information
                </label>
                <br /> <br />
                <textarea
                  id="proj_description"
                  name="proj_description"
                  rows="10"
                  cols="50"
                  required
                  placeholder="Enter your feedback here"
                  value={form.proj_description || ""}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button> {loading ? "LOADING..." : "Submit Request"}</button>
              </div>
            </form>
          </div>
        )}

        {dropDownForm === "Training Request" && (
          <div className={`${styles.formStyle}`}>
            <form action="" onSubmit={hadleTrainingRequest}>
              <div>
                <Input
                  label="first_name"
                  id="first_name"
                  text="First Name"
                  name="first_name"
                  type="text"
                  value={form.first_name || ""}
                  placeholder="firstname"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Input
                  label="last_name"
                  id="last_name"
                  text="Last Name"
                  name="last_name"
                  type="text"
                  value={form.last_name || ""}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Input
                  label="jobFunction"
                  text="Job function"
                  name="jobFunction"
                  id="jobFunction"
                  type="text"
                  value={form.jobFunction || ""}
                  placeholder="Job function"
                  onChange={handleChange}
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label htmlFor="phoneNumber">
                  Phone number <span style={{ color: "#FF1616" }}>*</span>
                </label>{" "}
                <br /> <br />
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

              <div>
                <Input
                  label="company"
                  id="company"
                  text="Company name"
                  name="company"
                  type="text"
                  value={form.company || ""}
                  placeholder="Company name"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Input
                  label="kind_of_training"
                  text="What kind of Atlassian training(s) are you looking for?"
                  name="kind_of_training"
                  id="kind_of_training"
                  type="text"
                  value={form.kind_of_training || ""}
                  placeholder="What kind of Atlassian training(s) are you looking for?"
                  onChange={handleChange}
                />
              </div>

              <div
                className={` ${styles.portalGroupForm}`}
                style={{ marginBottom: "2rem" }}
              >
                <label htmlFor="type_of_training">
                  Do you want remote training or on-site training?
                </label>
                <br /> <br />
                <select
                  name="type_of_training"
                  id="type_of_training"
                  value={form.type_of_training || ""}
                  onChange={handleChange}
                  className={`${
                    formError.type_of_training
                      ? styles.errorSelect
                      : styles.selectStyle
                  }`}
                >
                  <option value=""></option>
                  <option value="Remote Training">Remote Training</option>
                  <option value="On-site Training">Onsite Training</option>
                </select>
              </div>

              <div>
                <button> {loading ? "LOADING..." : "Submit Request"}</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RequestForm;
