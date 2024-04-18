import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import DateComponent from "../DateComponent/DateComponent";
import style from "../DateComponent/DateComponent.module.scss";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import RadioInput from "../RadioInput/RadioInput";

const InputsDrawer = ({ profileObj, handleChange }: any) => {
  const renderInputs = (profileObj: InitialValue) => {
    let selectDateInputs: JSX.Element[] = [];
    let index = 0;

    const selectDateKeys = Object.keys(profileObj).filter(
      (key) => profileObj[key].inputType === "selectDate"
    );

    selectDateKeys.forEach((key) => {
      const childObj = profileObj[key];
      const inputField = (
        <DateComponent
          key={childObj.name}
          childObj={childObj}
          handleChange={handleChange}
        />
      );
      selectDateInputs.push(inputField);
    });

    const selectDateInputsWrapper = (
      <div className={style.selectDateWrapper}>{selectDateInputs}</div>
    );

    const otherInputs = Object.keys(profileObj).map((key) => {
      if (!selectDateKeys.includes(key)) {
        const childObj = profileObj[key];
        let inputField: JSX.Element | null = null;

        switch (childObj.inputType) {
          case "input":
            inputField = (
              <div key={childObj.name}>
                <CustomInput childObj={childObj} handleChange={handleChange} />
              </div>
            );
            index++;
            break;
          case "textarea":
            inputField = (
              <Textarea childObj={childObj} handleChange={handleChange} />
            );

            index++;
            break;
          case "select":
            inputField = (
              <div key={childObj.name}>
                <Select childObj={childObj} handleChange={handleChange} />
              </div>
            );
            break;
          case "radio":
            inputField = (
              <div key={childObj.name}>
                <RadioInput childObj={childObj} handleChange={handleChange} />
              </div>
            );
            break;
          default:
            inputField = null;
            break;
        }

        if (index === 4) {
          index++;
          return (
            <div key={key}>
              {inputField}
              <label htmlFor="">{"Age" || childObj.placeholder}</label>
              {selectDateInputsWrapper}
            </div>
          );
        }

        return inputField;
      }

      return null;
    });
    return <div>{otherInputs}</div>;
  };
  return <div>{renderInputs(profileObj)}</div>;
};

export default InputsDrawer;
