type InitialValue = {
  [key: string]: {
    inputType: string;
    type?: string;
    name: string;
    placeholder?: string;
    inputValue: string;
    options?: sting[];
    children?: InitialValue;
  };
};

type SocialNetworkType = {
  name: string;
  img: string | any;
  href: string;
  color: string;
};

interface MaleAndFemaleCheckboxProps {
  maleFemaleObj: InitialValue;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
