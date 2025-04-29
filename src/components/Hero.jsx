import React from "react";
// image
import vector2 from "../assets/Vector 2.png";
import profileImg from "../assets/profileImg.png";
import doodleRound from "../assets/doodles mixed round.png";
import DownloadCV from "./ui/DownloadCV";
// import motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Hero = () => {
  return (
    <div className="h-[80vh] py-6 px-4" id="home">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center">
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mt-2 md:block hidden"
          >
            <img src={vector2} alt="" />
          </motion.div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2 md:text-7xl sm:text-5xl text-4xl">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="uppercase font-bold"
              >
                Abdull Basit
              </motion.h1>
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="uppercase font-bold text-text-main"
              >
                Graphic Designer
              </motion.h2>
            </div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col md:flex-row gap-4"
            >
              <button className="bg-button hover:bg-button-hover text-white py-2 px-6 rounded-full text-2xl font-semibold">
                Hire me
              </button>
              <DownloadCV />
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="relative"
        >
          <img src={doodleRound} alt="" />
          <img
            src={profileImg}
            alt=""
            className="absolute top-0 bottom-0 left-0 mx-auto border-6 border-text-main rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
