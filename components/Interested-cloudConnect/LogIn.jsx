import React, { useState } from "react";

import styles from "../../styles/participant.module.scss";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [submit, setSubmit] = useState(false);
  const [mailError, setmailError] = useState(false);
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

    if (form.password && form.username) {
      setForm({
        username: "",
        password: "",
      });
    }

    if (!form.username) {
      setmailError(true);
    } else {
      setmailError(false);
    }

    if (!form.password) {
      setpasswordError(true);
    } else {
      setpasswordError(false);
    }

    console.log(form);
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
          />
          {mailError && <p>Please enter your username</p>}
        </div>
        <div className={styles.password}>
          <input
            type={showpass ? "text" : "password"}
            name="password"
            id="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChnage}
          />
          <button
            type="button"
            className={styles.showpass}
            onClick={showPassword}
          >
            <FaEyeSlash />
          </button>
          {passwordError && <p>Please enter your password</p>}
        </div>

        <div className={styles.pass}>
          <a href="">forgot password?</a>
        </div>

        <input className={styles.submit} type="submit" />

        <div className={styles.account}>
          Don't have an account
          <a href="#">SIGN UP</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
