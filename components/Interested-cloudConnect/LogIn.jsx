import React, { useState } from "react";
import styles from "../../styles/participant.module.scss";
import { FaEyeSlash } from "react-icons/fa";
import Table from "./table-show";
import { password } from "config";

const Login = ({setAccess}) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [submit, setSubmit] = useState(true);
  const [passwordError, setpasswordError] = useState(false);
  const [showpass, setShowpass] = useState(false);

  const handleChnage = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showPassword = () => {
    setShowpass(!showpass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      // form.username === "abdulazeez@alluvium.net" &&
      form.password === password
    ) {
      setForm({
        username: "",
        password: "",
      });
      setpasswordError(false);
      setSubmit(false);
      setAccess(true);
    } else {
      console.log("please input correct password or userbame");
      setpasswordError(true);
    }

    // if (!form.username) {
    //   setmailError(true);
    // } else {
    //   setmailError(false);
    // }

    // if (!form.password) {
    //   setpasswordError(true);
    // } else {
    //   setpasswordError(false);
    // }

    // console.log(form);
  };

  return (
    <div className={styles.container}>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <h2>Welcome</h2>
          <p>log in by entering the information below</p>
          <div className={styles.username}>
            <input
              type="email"
              name="username"
              id="username"
              value={form.username}
              placeholder="Username"
              onChange={handleChnage}
              required
            />
          </div>
          <div className={styles.password}>
            <input
              type={showpass ? "text" : "password"}
              name="password"
              id="password"
              value={form.password}
              placeholder="Password"
              onChange={handleChnage}
              required
            />
            <button
              type="button"
              className={styles.showpass}
              onClick={showPassword}
            >
              <FaEyeSlash />
            </button>
          </div>
          {passwordError && (
            <p className={styles.inputPassword}>
              Please Input correct username or password
            </p>
          )}
          <div className={styles.pass}>
            <a href="">forgot password?</a>
          </div>

          <input className={styles.submit} type="submit" />

          {/* <div className={styles.account}>
            Don't have an account
            <a href="#">SIGN UP</a>
          </div> */}
        </form>
    </div>
  );
};

export default Login;
