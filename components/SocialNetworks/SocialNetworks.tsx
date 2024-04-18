import Image from "next/image";
import style from "./SocialNetworks.module.scss";
import { socialNetwork } from "@/utils/socialNetworks";
import arrow from "@/public/images/arrow-right-white-v2.png";
import lock from "@/public/images/lock.png";
import { initialValue } from "@/utils/initialValue";

const SocialNetworks = ({ maleFemaleObj, handleChange }: any) => {
  const obj = Object?.entries(maleFemaleObj).map((item: any, index: any) => {
    const { inputType, name } = item[1];

    return (
      <div key={index}>
        {item[1].options?.map((option: any, index: any) => {
          const [key, value] = Object?.entries(option)[0];
          return (
            <div key={index} className={style.gender}>
              <input
                type={inputType}
                name={name}
                value={value as any}
                onChange={(e:any)=>handleChange(maleFemaleObj,name,e.target.value)}
              />
              <label htmlFor={key}>{value as any}</label>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className={style.socialNetworkWrapper}>
      <h4 className={style.networkTitle}>
        Connect your account with social networks
      </h4>
      <div className={style.socialNetworkContainer}>
        {socialNetwork.map((item: SocialNetworkType) => {
          return (
            <div key={item.name} className={style.socialNetwork}>
              <div
                className={style.networkLeft}
                style={{ backgroundColor: item.color }}
              >
                <Image src={item.img} alt={item.name} />
              </div>
              <div className={style.networkRight}>
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.newsGenderContainer}>
        <div className={style.newsContainer}>
          <div className={style.switches}>
            <h3 className={style.subtitle}>Getting News</h3>
            <label className={style.switch}>
              <input
                name="newsSubscription"
                type="checkbox"
                defaultChecked={true || true}
              />
              <span className={style.slider}></span>
              <label htmlFor="">Email</label>
            </label>
            <label className={style.switch}>
              <input
                name="newsSubscription"
                type="checkbox"
                defaultChecked={true || true}
              />
              <span className={style.slider}></span>
              <label htmlFor="">Sms</label>
            </label>
          </div>
        </div>
        <div className={style.genderContainer}>
          <div className={style.switches}>
            <h3 className={style.subtitle}>Gender</h3>
            {obj}
          </div>
        </div>
      </div>
      <div className={style.changePassword}>
        <Image src={lock} alt="lock" width={25} height={25} />
        <h4 className={style.passwordTitle}>Change your password</h4>
      </div>
      <div className={style.submitForm}>
        <div className={style.agree}>
          <input type="checkbox" name="terms" defaultChecked={true} />
          <p>
            I agree with the <a href="">direct marketing</a> policy
          </p>
        </div>
        <button className={style.submitBtn} onClick={()=>console.log(initialValue)}>Save changes</button>
      </div>
    </div>
  );
};

export default SocialNetworks;
