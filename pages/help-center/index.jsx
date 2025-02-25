import Layout from "components/layout";
import styles from "../../styles/AlluviumRedesign2025/help-center/help-center.module.scss";
import Input from "components/licence-component/inputP";
import Button from "components/atlassian-service-reuse/Button";

const HelpCenter = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <h1>Got a challenge? Let’s help solve it!</h1>
      </section>

      <form className={styles.feedback__section}>
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
              type={"text"}
            />
          </div>

          <div className={styles.problem__statement}>
            <label htmlFor="">Problem statement</label>
            <br />
            <textarea
              style={{ width: "100%" }}
              id="relevant_info"
              name="relevant_info"
              rows="10"
              required
              placeholder=""
              //   value={form.relevant_info || ""}
              //   onChange={handleChange}
            ></textarea>
          </div>

          <div className={styles.btn}>
            <Button>Submit Now</Button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default HelpCenter;
