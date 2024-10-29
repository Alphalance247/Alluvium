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
      <label htmlFor={label} style={{ marginBottom: "10px", display: "block" }}>
        {text} <span style={{ color: "#374151" }}>*</span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        className={`${errorF ? styles.error : styles.inputStyle}`}
      />
    </div>
  );
};

export default Input;
