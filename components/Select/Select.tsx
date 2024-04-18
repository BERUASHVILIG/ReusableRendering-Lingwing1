import style from "./Select.module.scss";
const Select = ({ childObj, handleChange }: any) => {
  const { name, placeholder, inputValue, options } = childObj;
  return (
    <div className={style.selectContainer} key={name}>
      <label>{placeholder}</label>
      <select
        className={style.select}
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

export default Select;
