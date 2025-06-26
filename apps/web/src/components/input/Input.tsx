import React, { useState } from "react";
import styled from "styled-components";

interface InputProps {
  lable: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input = (props: InputProps): React.JSX.Element => {
  const {
    lable,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  // Ensure lable is a string and provide fallback
  const labelText = typeof lable === "string" ? lable : "";

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    if (onChange) onChange(e);
  };

  console.log(props);

  return (
    <StyledWrapper>
      <div className="form-control">
        <input
          type={type}
          required={required}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
        <label
          className={
            isFocused || hasValue || (value && value.length > 0) ? "active" : ""
          }
        >
          {labelText.split("").map((char, index) => (
            <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 190px;
  }

  .form-control input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #fff;
  }

  .form-control input:focus {
    outline: 0;
    border-bottom-color: lightblue;
  }

  .form-control label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
  }

  .form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    color: rgba(17, 16, 16, 0.7);
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control label.active span {
    color: lightblue;
    transform: translateY(-30px);
  }

  .form-control input:focus + label span {
    color: rgba(34, 32, 32, 0.7);
    transform: translateY(-30px);
  }
`;

export default Input;
