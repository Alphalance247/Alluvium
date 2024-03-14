import styles from "../../styles/team.module.scss";

const Input = ({ type, name, id, placeholder, value, formError, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      className={`${styles.inputStyles} ${formError ? styles.error : ""}`}
      onChange={onChange}
    />
  );
};

export default Input;
