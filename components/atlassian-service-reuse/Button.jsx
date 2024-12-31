import styles from "../../styles/atlassian-services-style/services-button.module.scss";

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "medium",
  disabled = false,
  className = "",
  withIcon = true,
  icon,
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
      <span>{withIcon && icon}</span>
      {children}
    </button>
  );
};

export default Button;
