import "react-phone-number-input/style.css";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "../../styles/team.module.scss";
import { useState } from "react";

const CountryCode = () => {
  const [phoneNumber, setPhone] = useState();

  const handleNumber = (value) => {
    setPhone(value);
  };

  return (
    <>
      <PhoneInput
        placeholder="ENTER PHONE NUMBER"
        defaultCountry="US"
        value={phoneNumber}
        onChange={handleNumber}
        className={`${styles.PhoneInput} ${styles.PhoneInputCountry}`}
      />
    </>
  );
};

export default CountryCode;
