import styles from "../../styles/licence.module.scss";

const Input = ({
  text,
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  errorF,
  id,
}) => {
  return (
    <div className={styles.formInput}>
      <label htmlFor={label}>
        {text} <span style={{ color: "#FF1616" }}>*</span>
      </label>{" "}
      <br /> <br />
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        autoComplete="false"
        className={`${errorF ? styles.error : styles.inputStyle}`}
      />
    </div>
  );
};

export default Input;
