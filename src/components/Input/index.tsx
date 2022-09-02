import React from "react";
import "./input.scss";

type InputPropsT = {
  label: string;
  type?: string;
  name: string;
  id?: string;
  onChange: Function;
  errorText?: string;
  placeholder?: string;
  required?: boolean;
  value: string
};

const Input = ({
  label,
  type = "text",
  name,
  id,
  onChange,
  errorText,
  placeholder,
  required,
  value
}: InputPropsT) => {
  return (
    <div className="input">
      <label className="input_label">{label}</label>
      <div className="input_wrapper error">
        <input
          required={required}
          className="input_field"
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            onChange(e)
          }
        />
      </div>
      <span className="error_text">{errorText}</span>
    </div>
  );
};

export default Input;
