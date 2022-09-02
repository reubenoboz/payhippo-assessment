import React from "react";
import "./button.scss";

type ButtonPropsT = {
  text?: string;
  type: string;
  iconPosition?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

let classtype = "";

const Button = ({
  text = "Continue",
  type = "primary",
  className,
  disabled = false,
  onClick,
}: ButtonPropsT) => {
  switch (type) {
    case "primary":
      classtype = "btn btn-primary";
      break;
    case "secondary":
      classtype = "btn btn-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` ${classtype} ${className} ${disabled && "btn-disabled"}`}
    >
      {text}
    </button>
  );
};

export default Button;
