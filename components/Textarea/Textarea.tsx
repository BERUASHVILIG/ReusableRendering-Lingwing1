const Textarea = ({ profileObj, childObj, handleChange }: CustomCompProps) => {
  const { name, placeholder, inputValue }: InputObjectType = childObj;
  return (
    <div key={name}>
      <textarea
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e: TextareaEventType) =>
          handleChange(profileObj, name, e.target.value)
        }
      />
    </div>
  );
};

export default Textarea;
