import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-700 h-[215px] flex justify-center items-center gap-[26%]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2 text-xl text-white font-semibold">
          <BsFillHouseDoorFill />
          <p>2,Fashina Strt Iwaya,yaba Lagos.</p>
        </div>
        <div className="flex items-center space-x-2 text-xl text-white font-semibold">
          <FaPhoneFlip />
          <p>08143720395</p>
        </div>
        <div className="flex items-center space-x-2 text-xl text-white font-semibold">
          <CgMail />
          segunjoshua85@gmail.com
        </div>
      </div>
      <div className="flex flex-col text-2xl text-white font-semibold gap-2">
        <h1>About me</h1>
        <p className="text-base">My name is Adelabu Segun, I'm a frontend developer</p>
        <Link
          to="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <FaLinkedin/>
        </Link>
      </div>
    </div>
  );
};

export default Footer;