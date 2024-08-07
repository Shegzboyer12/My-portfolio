import React from "react";
import Header from "../../component/Header/header";
import Image from "../../image/Web.webp";
import Footer from "../../component/Footer/footer";

const About = () => {
  return (
    <div>
    <div
    className="relative h-[560px] bg-cover bg-center"
    style={{ backgroundImage: `url(${Image})` }}
  >
    <div className="absolute inset-0 bg-black opacity-75"></div>
    <div className="flex flex-col relative h-full text-white w-full md:w-5/12 min-h-screen items-center text-center justify-center md:ml-[31%] pb-36 px-4">
    <div className="flex mb-48"><Header /></div>
    <div className="mb-56 flex flex-col gap-2 items-center">
    <h1 className="text-5xl font-bold">ABOUT</h1>
    <p className="text-xl w-72">I'm a front-end developer,i create responsive website. </p>
    </div>
    </div>
  </div>
    <Footer />
  </div>
  );
};

export default About;