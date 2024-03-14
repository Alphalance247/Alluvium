import { useRef, useState } from "react";
import styles from "../../styles/team.module.scss";
import Input from "./Input";

const Register = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    number: "",
  });

  const [formError, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    country: false,
    number: false,
  });
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

    if (hasErrors) {
      setFormErrors(errors);
    } else {
      alert("successfully submitted");
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormErrors({ ...formError, [name]: false });
  };

  return (
    <section className={styles.section3} id="register-section">
      <h4>Register Now</h4>
      <p className={styles.secure}>
        Secure your spot and join us for an unforgettable learning experience:
        register for the Atlassian partner event to connect with industry
        experts and gain Insights into the latest trends and developments."
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
            <div className={styles.selectDiv}>
              <select
                name="select"
                id="select"
                value=""
                className={styles.selectOption}
                onChange={handleChange}
              >
                <option value="+234" className="text-[#313131]">
                  (+234)
                </option>
                <option value="+237" className="text-[#313131]">
                  (+237)
                </option>
              </select>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="08145686888"
                value={form.number}
                className={`${styles.selectInput} ${
                  formError.number ? styles.error : ""
                }`}
                onChange={handleChange}
              />
            </div>
            {formError.number && (
              <p style={{ color: "red" }}>Number is Required</p>
            )}
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
              <option>Nigeria</option>
              <option value="China">China</option>
              <option value="Brazil">Brazil</option>
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
              name="yes"
              id="Yes"
              style={{
                fontSize: "16px",
                lineHeight: "20px",
                marginRight: ".3rem",
              }}
            />
            <label htmlFor="Yes" style={{ color: "#666666" }}>
              Yes
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="no"
              id="No"
              style={{
                fontSize: "16px",
                lineHeight: "20px",
                marginRight: ".3rem",
              }}
            />
            <label htmlFor="No" style={{ color: "#666666" }}>
              No
            </label>
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
