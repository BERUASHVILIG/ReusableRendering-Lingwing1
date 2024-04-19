"use client";
import React, { useState } from "react";
import profileImg from "@/public/images/parrot.png";
import Image from "next/image";
import style from "./ImageComponent.module.scss";

const ImageComponent = () => {
  const [imageSrc, setImageSrc] = useState(profileImg);

  const handleFileChange = (event: InputEventType) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as any);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {imageSrc && (
        <Image
          priority
          className={style.profileImg}
          src={imageSrc}
          alt="profile"
          width={200}
          height={200}
        />
      )}
      <label className={style.chooseFileBtn}>
        Change Image
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </label>
    </>
  );
};

export default ImageComponent;
