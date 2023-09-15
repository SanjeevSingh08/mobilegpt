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
      <div className="flex place-content-center">
        <Image className=" h-[100%] w-[90%]" src={phone} alt="phone" />
        <div className="inner-c md:h-[44%]    h-[44%] lg:h-[44%] lg:w-[200px] xl:w-[210px] ">
<Mainfile/>


        </div>
      </div>
    </div>
  );
};

export default Phone;
