const Textarea = ({ childObj, handleChange }: any) => {
  const { name, placeholder, inputValue } = childObj;
  return (
    <div key={name}>
      <textarea
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textarea;
