"use client";
import { ChangeEvent, useState } from "react";
import style from "./page.module.scss";
import { initialValue } from "@/utils/initialValue";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import SocialNetworks from "@/components/SocialNetworks/SocialNetworks";
import InputsDrawer from "@/components/InputsDrawer";

const Profile = () => {
  const profileObj: InitialValue = {};
  const maleFemaleObj: InitialValue = {};

  const [formState, setFormState] = useState<any>({
    profileObj: profileObj,
    maleFemaleObj: maleFemaleObj,
  });

  const updateInputValue = (
    obj: InitialValue,
    fieldName: string,
    value: string
  ) => {
    const newState = JSON.parse(JSON.stringify(obj));

    const updateInput = (obj: any, name: any, val: any) => {
      Object.keys(obj).forEach((key) => {
        if (obj[key].name === name) {
          obj[key].inputValue = val;
          return;
        }
        if (obj[key].children) {
          updateInput(obj[key].children, name, val);
          return;
        }
      });
    };
    updateInput(newState, fieldName, value);
    return newState;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const { profileObj, maleFemaleObj } = formState;

    const updatedProfileObj = updateInputValue(profileObj, name, value);
    const updatedMaleFemaleObj = updateInputValue(maleFemaleObj, name, value);

    setFormState({
      profileObj: updatedProfileObj,
      maleFemaleObj: updatedMaleFemaleObj,
    });
  };

  Object.keys(initialValue).forEach((key) => {
    if (key === "gender") {
      maleFemaleObj[key] = initialValue[key];
    } else {
      profileObj[key] = initialValue[key];
    }
  });

  console.log(formState, "Form");
  return (
    <div className={style.profileWrapper}>
      <h1 className={style.profileTitle}>Profile edit</h1>
      <div className={style.formContainer}>
        <div className={style.leftContainer}>
          <InputsDrawer
            profileObj={formState.profileObj}
            handleChange={handleChange}
          />
        </div>
        <div className={style.rightContainer}>
          <div className={style.imageContainer}>
            <ImageComponent />
          </div>
          <div className={style.socialNetworkContainer}>
            <SocialNetworks
              maleFemaleObj={formState.maleFemaleObj}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
