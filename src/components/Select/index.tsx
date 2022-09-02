import React from "react";
import "./select.scss";

type SelectPropsT = {
  label: string;
  value: string;
  name: string;
  id?: string;
  onChange: Function;
  errorText?: string;
  placeholder?: string;
  required?: boolean;
  options: string[];
};

const Select = ({
  label,
  value,
  name,
  id,
  onChange,
  errorText,
  placeholder,
  required,
  options,
}: SelectPropsT) => {
  return (
    <div className="select">
      <label className="select_label">{label}</label>
      <div className="select_wrapper">
        <select
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
            onChange(e)
          }
          className="select_field"
        >
          <option value="">--- Select an option ---</option>
          {options.map((item, index) => (
            <option value="item" key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <span className="error_text">{errorText}</span>
    </div>
  );
};

export default Select;
