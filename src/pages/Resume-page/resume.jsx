import React from "react";
import Header from "../../component/Header/header";
import Footer from "../../component/Footer/footer";
import Image from "../../image/type.jpg";

const Resume = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div
        className="relative h-[360px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="flex flex-col relative h-full text-white w-full md:w-5/12 min-h-screen items-center text-center justify-center ml-[31%] pb-36 px-4">
          <div className="flex mb-[94%]">
            <Header />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-12 px-4">
        <div className="flex flex-wrap justify-center gap-16 text-lg md:text-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-400 pb-2">Education</h1>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Gomycode</h2>
              <p className="text-lg">Fullstack</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-400 pb-2">Experience</h1>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">nil</h2>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-400 pb-2">Skills</h1>
            <div className="text-lg space-y-1">
              <p>Reactjs</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Responsive Web Design</p>
              <p>Tailwind</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-400 pb-2">Certification</h1>
            <div className="text-lg">
              <p>Gomycode</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
