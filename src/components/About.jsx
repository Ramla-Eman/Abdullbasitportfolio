import React from "react";
// image
import vector3 from "../assets/Vector 3.png";
import lightbulb from "../assets/lightbulb.png";
import music from "../assets/music.png";
import ellipse from "../assets/Ellipse.png";
import aboutImg from "../assets/about-img.png";
import doodleItem from "../assets/doodle items.png";
// import motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="h-[80vh] px-4" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="relative lg:w-[50%]">
          <div className="flex flex-col gap-7">
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-2 md:text-7xl sm:text-5xl text-4xl font-bold"
            >
              About <span className="text-text-main">me</span>
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[18px]"
            >
              Passionate and creative Graphic Designer with over 1 year of
              hands-on experience in designing logos, banners, and social media
              posts. Currently advancing skills through the SMIT Graphic
              Designing Course (Batch 13 - 2025). Known for a deep love of
              colours, a strong sense of aesthetics, and a commitment to
              learning new design trends. Brings energy, creativity, and
              technical skills to every project.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="absolute -top-24 left-10 lg:block hidden"
          >
            <img src={music} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="absolute -top-4 right-0 lg:block hidden"
          >
            <img src={lightbulb} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="absolute left-48 lg:block hidden"
          >
            <img src={vector3} alt="" />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="relative"
        >
          <img src={doodleItem} alt="" />
          <img
            src={aboutImg}
            alt=""
            className="w-full absolute -top-12 bottom-0 left-0 mx-auto z-20"
          />
          <img
            src={ellipse}
            alt=""
            className="w-full absolute -bottom-8 right-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
