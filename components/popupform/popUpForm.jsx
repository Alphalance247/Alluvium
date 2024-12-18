import Image from "next/image";
import styles from "../../styles/popupform/popup.module.scss";
import { useState } from "react";
import axios from "axios";
import { environment } from "env/env.local";
import { useToasts } from "react-toast-notifications";

const PopUpForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(
        `${environment?.baseUrl}${environment?.casestudyUrl}`,
        { email },
        { timeout: 40000 }
      )
      .then((res) => {
        setLoading(true);

        if (res?.status >= 200 && res?.status < 300) {
          addToast(
            "Thanks for sharing your email! We're glad to have you here.",
            {
              appearance: "success",
              autoDismiss: true, // Enable auto dismiss
              autoDismissTimeout: 5000, // Dismiss after 5 seconds
            }
          );
          onSubmit(email);
          setEmail("");
        } else {
          addToast(
            "Unexpected response from server. Please try again or contact Admin",
            {
              appearance: "error",
              autoDismiss: true, // Enable auto dismiss
              autoDismissTimeout: 5000, // Dismiss after 5 seconds
            }
          );
          onSubmit(email);
          setLoading(false);
          return;
        }
      })
      .catch((err) => {
        setLoading(false);
        let errMessage;

        addToast(
          "Unexpected response from server. Please try again or contact Admin",
          {
            appearance: "error",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          }
        );
      });
  };

  return (
    <section className={styles.popup__form}>
      <div className={styles.popup}>
        <div>
          <Image
            src="/assets/popupimage.png"
            width={422}
            height={340}
            alt="badges"
          />
        </div>
        <div className={styles.form__section}>
          <h3>Real Success Stories Powered by Atlassian</h3>
          <p>
            Explore detailed success stories and learn how we’ve made an impact.
            Provide your email to gain instant access to these insights
          </p>

          <form action="" onSubmit={handleSubmit}>
            <div className={styles.form__input}>
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                placeholder="Your Email"
                required
                className={styles.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button>{loading ? "Loading.." : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PopUpForm;
