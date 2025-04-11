import Layout from "components/layout";
import styles from "../../styles/AlluviumRedesign2025/help-center/help-center.module.scss";
import Input from "components/licence-component/inputP";
import Button from "components/atlassian-service-reuse/Button";
import { useState } from "react";
import { postRequest } from "pages/api/helpers/postRequest";
import { useToasts } from "react-toast-notifications";
import { environment } from "env/env.local";

const HelpCenter = () => {
  const [form, setForm] = useState({ email: "", description: "" });
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await postRequest(
        `${environment?.baseUrl}utilities/challenge/request/`,
        { ...form },
        { timeout: 10000 }
      );
      if (res.status >= 200 && res.status < 300) {
        addToast(
          "Your request has been submitted successfully. Thank you, we'll be in touch.",
          {
            appearance: "success",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          }
        );

        setForm({ ...form, email: "", description: "" });
      } else {
        addToast(
          "Unexpected response from server. Please try again or contact Admin",
          {
            appearance: "error",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          }
        );
        return;
      }
    } catch (err) {
      let errMessage;
      if (err.response) {
        if (err?.response?.status < 500) {
          errMessage =
            err?.response?.data?.error ||
            "Request failed. Please check the form and try again.";
        } else {
          errMessage = "Server error. Please try again later.";
        }
      }

      addToast(
        errMessage || "Request failed. Please check the form and try again.",
        {
          appearance: "error",
          autoDismiss: true, // Enable auto dismiss
          autoDismissTimeout: 5000, // Dismiss after 5 seconds
        }
      );
    } finally {
      setLoading(false);
    }
  };

  console.log(form);
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <h1>Got a challenge? Let’s help solve it!</h1>
      </section>

      <form className={styles.feedback__section} onSubmit={handleSubmit}>
        <div className={styles.feedback__encap}>
          <h3>Let Us Know What You Need</h3>
          <p>
            Provide your details below, Our team will carefully review your
            submission and provide you with solutions
          </p>

          <div>
            {/* <label htmlFor="">Email</label> */}
            <Input
              id={"email"}
              label={"email"}
              placeholder={""}
              text={"Email"}
              type={"email"}
              name={"email"}
              value={form?.email || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.problem__statement}>
            <label htmlFor="">Problem statement</label>
            <br />
            <textarea
              style={{ width: "100%" }}
              id="description"
              name="description"
              rows="10"
              required
              placeholder=""
              value={form?.description || ""}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={styles.btn}>
            <Button> {loading ? "Submitting....." : "Submit Now"}</Button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default HelpCenter;
