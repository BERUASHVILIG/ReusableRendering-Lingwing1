import style from "./DateComponent.module.scss";
const DateComponent = ({ childObj, handleChange }: any) => {
  const { name, inputValue, options } = childObj;

  const className = `${style.selectContainer} ${name === "age" ? style.ageSelect : ""} ${
    name === "month" ? style.monthSelect : ""
  } ${name === "date" ? style.dateSelect : ""}`;
  return (
    <div className={style.selectContainer}>
      <select
        className={className}
        name={name}
        value={inputValue}
        onChange={handleChange}
      >
        {options.map((option: any) => {
          const [key, value] = Object.entries(option)[0];
          return (
            <option key={key} value={value as string}>
              {value as string}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DateComponent;
