import React from "react";
// image
import vector2 from "../assets/Vector 2.png";
import profileImg from "../assets/profileImg.png";
import doodleRound from "../assets/doodles mixed round.png";
import DownloadCV from "./ui/DownloadCV";

const Hero = () => {
  return (
    <div className="h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="mt-2 md:block hidden">
            <img src={vector2} alt="" />
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2 md:text-7xl sm:text-5xl text-4xl">
              <h1 className="uppercase font-bold">Abdull Basit</h1>
              <h2 className="uppercase font-bold text-text-main">
                Graphic Designer
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-button hover:bg-button-hover text-white py-2 px-6 rounded-full text-2xl font-semibold">
                Hire me
              </button>
              <DownloadCV/>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={doodleRound} alt="" />
          <img src={profileImg} alt="" className="absolute lg:top-28 top-7 bottom-0 left-0 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
