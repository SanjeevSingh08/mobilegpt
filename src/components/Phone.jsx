import React from "react";
import Image from "next/image";
import phone from "../../images/phone1.png";
import Mainfile from "./Main";
const Phone = () => {
  return (
    <div
      className="w-full flex place-content-center h-screen relative p-4"
      style={{ color: "red" }}
    >
      <div className="flex place-content-center relative w-[304px]">
        <Image className=" h-[94%] w-[90%]" src={phone} alt="phone" />
        <div className="inner-c  ">
<Mainfile/>


        </div>
      </div>
    </div>
  );
};

export default Phone;
