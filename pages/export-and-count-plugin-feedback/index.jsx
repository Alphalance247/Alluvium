import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/appForm.module.scss";
import SideMenuLogo from "components/icons/SideMenuLogo";
import Image from "next/image";
import LeadForm from "pages/event/itsm-solutions/form/leadform";

const AppForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.organization)
      newErrors.organization = "Organization is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      form: "contact",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      organization: formData.organization,
      role: formData.role || "Not specified",
    };

    try {
      const response = await axios.post(
        process.env.REACT_APP_FORM_URL,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          role: "",
        });
        setErrors({});
      } else {
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please check your internet connection.");
    }
  };

  return (
    <section className={styles.mainContainer}>
      <main>
        <div className={styles.app_form_container}>
          <div className={styles.left_panel}>
            <div className={styles.logo_wrapper}>
              <SideMenuLogo />
            </div>
            <div className={styles.form_wrapper}>
              <h1 className={styles.heading}>Help Us Improve the Plugin</h1>
              <p className={styles.description}>
                Try out the redesigned interface and share your feedback. Your{" "}
                <br />
                insights will help us refine the experience and make it even
                better!
              </p>
              <div className={styles.form_container}>
                <div>
                  {/* <form onSubmit={handleSubmit}>
                                <div className={styles.form_group}>
                                    <label>First Name*</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
                                </div>

                                <div className={styles.form_group}>
                                    <label>Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                                </div>

                                <div className={styles.form_group}>
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                                </div>

                                <div className={styles.form_group}>
                                    <label>Organization *</label>
                                    <input
                                        type="text"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                    />
                                    {errors.organization && (
                                        <p className={styles.error}>{errors.organization}</p>
                                    )}
                                </div>

                                <div className={styles.form_group}>
                                    <label>Your Role</label>
                                    <select name="role" value={formData.role} onChange={handleChange}>
                                        <option value="">Select a role</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <p className={styles.privacy_text}>
                                    By submitting this form, you agree to receive communications from
                                    Alluvium. See our <a href="#">Privacy Policy</a> for details.
                                </p>

                                <button type="submit" className={styles.submit_button}>
                                    Submit
                                </button>
                            </form> */}
                  <LeadForm
                    dataUrl={
                      "https://api.leadconnectorhq.com/widget/form/hZ3CEusuKujqL3edrG7E"
                    }
                  />
                </div>

                <div className={styles.footer}>
                  <p>© 2022 Alluvium Corporation.</p>
                  <p>
                    <span className={styles.underline}>Terms & Conditions</span>
                    <span
                      className={styles.underline}
                      style={{ marginLeft: "1rem" }}
                    >
                      Privacy Policy
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right_panel}>
            <Image
              src="/assets/SidebarImg.webp"
              height={1008}
              width={712}
              alt="webpp"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default AppForm;
