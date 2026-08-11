import React from "react";

const Button = ({
  children,
  backgroundColor,

  // textColor,
  size = "sm",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  variant = "",
}) => {
  const backgrounds = {
    defaultLv1: "bg-default-25",
    defaultLv2: "bg-default-50",
    defaultLv3: "bg-default-100 ",
    defaultLv4: "bg-default-200",
    defaultLv5: "bg-default-300",
    secondaryLv1: "bg-secondary-100",
    secondaryLv2: "bg-secondary-200",
    secondaryLv3: "bg-secondary-900 text-white",
    tertiary: "bg-tertiary",
  };

  const sizes = {
    xs: "px-3.5 py-2 text-xs rounded-lg font-bold font-manrope",
    sm: "px-4 py-2.5 rounded-lg text-sm font-bold font-manrope",
    base: "px-4.5 py-2.5 text-base font-bold rounded-lg font-manrope",
    md: "px-5 py-3 text-base rounded-xl font-bold font-manrope",
    "semi-md": "px-6 py-2.5 rounded-xl font-bold font-manrope text-lg",
    "semi-lg": "px-6 py-3 text-lg rounded-lg font-bold font-manrope",
    lg: "px-7 py-4 text-lg rounded-2xl font-bold font-manrope",
  };
  const variants = {
    default: "border-[1px] border-default-100",
    plainSecondary:
      "border-[1px] border-secondary-900  inline-flex items-center gap-2 transition-all duration-150 ",
    defaultSecondary: "bg-secondary-900 text-white inline-flex items-center gap-2 transition-all duration-150 font-manrope",
    secondary:
      "border-[1px] border-secondary-900 hover:bg-secondary-900 text-[#344054] group-hover:bg-secondary-900 group-hover:text-white inline-flex items-center gap-2 transition-all duration-150 group-hover:font-sans",
    tertiary: "border-[1px] border-tertiary",
  };
  return (
    <button
      type={type}
      className={`group
        ${variants[variant]}
        ${backgrounds[backgroundColor]}
        ${sizes[size]}
        transition-all
        duration-300
        
        disabled:opacity-50
        disabled:cursor-not-allowed
        w-full md:w-fit flex items-center text-center justify-center
        
        ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
