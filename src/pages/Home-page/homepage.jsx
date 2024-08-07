import React from "react";
import Header from "../../component/Header/header";
import Footer from "../../component/Footer/footer";
import Image from "../../image/type.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="relative h-[560px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="flex flex-col relative h-full text-white w-full md:w-5/12 min-h-screen items-center text-center justify-center md:ml-[31%] pb-36 px-4">
          <div className="flex mb-36">
            <Header />
          </div>
          <div className="mb-48 flex flex-col gap-2 items-center">
            <p className="text-xl">HI, I'M A FREELANCER</p>
            <h1 className="text-5xl font-bold">Frontend developer</h1>
            <div className="flex gap-5">
              <Link to="/contact">
                <button className="border font-bold text-sm w-20 h-8">
                  CONTACT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        <Footer />
      
    </>
  );
};

export default Home;
