import styles from "../../styles/cloud-connect-2/button.module.scss";

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "medium",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${
        styles[`button--${size}`]
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
