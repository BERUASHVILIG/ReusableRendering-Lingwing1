type InitialValue = {
  [key: string]: {
    inputType: string;
    type: string;
    name: string;
    placeholder: string;
    inputValue: string;
    options?: { [key: string]: string }[];
    children?: InitialValue;
  };
};

type HandleChangeFunction = (profileObj : InitialValue, fieldName: string, value: string) => void;


interface SelectEventType extends ChangeEventHandler<HTMLSelectElement> {
  target: HTMLSelectElement & {
    name: string;
    value: string;
  };
}


interface InputEventType extends ChangeEventHandler<HTMLInputElement> {
  target: HTMLInputElement & {
    name: string;
    value: string;
  };
}


interface TextareaEventType extends ChangeEventHandler<HTMLTextAreaElement> {
  target: HTMLTextAreaElement & {
    name: string;
    value: string;
  };
}

type CustomCompProps = {
  profileObj: InitialValue;
  childObj: InputObject;
  handleChange: (
    profileObj: InitialValue,
    fieldName: string,
    value: string
  ) => void;
};

type InputObjectType = {
  inputType: "input" | "text" | "select" | "selectDate" | "radio";
  inputValue: string;
  name: string;
  placeholder: string;
  type: string;
  options?: { [key: string]: string }[];
};


type SocialNetworkType = {
  name: string;
  img: string | any;
  href: string;
  color: string;
};


