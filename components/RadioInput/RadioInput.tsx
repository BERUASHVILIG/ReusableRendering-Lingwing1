import React from "react";

const RadioInput = ({
  profileObj,
  childObj,
  handleChange,
}: CustomCompProps) => {
  const { type, inputType, inputValue, name, placeholder }: InputObjectType =
    childObj;
  return <div>{/* <input type={type} /> */}</div>;
};

export default RadioInput;
