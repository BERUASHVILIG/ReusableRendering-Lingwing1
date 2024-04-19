"use client"
import style from "./page.module.scss";
import { initialValue } from "@/utils/initialValue";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import SocialNetworks from "@/components/SocialNetworks/SocialNetworks";
import InputsDrawer from "@/components/InputsDrawer";

const Profile = () => {
  const profileObj: InitialValue = {};
  const maleFemaleObj: InitialValue = {};

  const updateInput = (obj: InitialValue, name: string, val: string) => {
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

  Object.keys(initialValue).forEach((key) => {
    if (key === "gender") {
      maleFemaleObj[key] = initialValue[key];
    } else {
      profileObj[key] = initialValue[key];
    }
  });

  return (
    <div className={style.profileWrapper}>
      <h1 className={style.profileTitle}>Profile edit</h1>
      <div className={style.formContainer}>
        <div className={style.leftContainer}>
          <InputsDrawer profileObj={profileObj} handleChange={updateInput} />
        </div>
        <div className={style.rightContainer}>
          <div className={style.imageContainer}>
            <ImageComponent />
          </div>
          <div className={style.socialNetworkContainer}>
            <SocialNetworks
              maleFemaleObj={maleFemaleObj}
              handleChange={updateInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
