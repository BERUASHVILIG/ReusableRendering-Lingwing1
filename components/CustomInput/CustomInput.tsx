"use client";
import { useState } from "react";
import style from "./CustomInput.module.scss";

const CustomInput = ({ childObj, handleChange }: any) => {
  const { name, inputValue, type, placeholder } = childObj;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className={style.container}>
      <label
        className={`${focused || childObj.inputValue ? style.labelTop : ""}`}
        htmlFor={placeholder}
      >
        {name}
      </label>
      <input
        className={style.input}
        type={type}
        name={placeholder}
        defaultValue={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CustomInput;
