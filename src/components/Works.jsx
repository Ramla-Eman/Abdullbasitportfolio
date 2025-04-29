import React from "react";
import workbg from "../assets/Projects Page.png";
// import motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const cards = [
  {
    title: "",
    discription: "",
    images: {
      image1: "",
    },
  },
];

const Works = () => {
  return (
    <div className="h-[80vh] my-6 mx-4 relative" id="work">
      <img
        src={workbg}
        alt=""
        className="w-full h-full absolute top-0 left-0 right-0 object-cover"
      />
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-10 absolute top-0 left-0">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="md:text-7xl sm:text-5xl text-4xl font-bold leading-normal flex gap-4">
            <span>My recent</span>
            <span className="text-text-main">works</span>
          </h2>
        </motion.div>
        <ul className="flex items-center justify-center flex-wrap gap-8">
          {cards.map((card, index) => (
            <motion.li
              key={index}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col gap-4 bg-[#2C323A] rounded-2xl p-4 hover:shadow-2xl"
            >
              <div>
                <h3>{card.title}</h3>
                <p>{card.discription}</p>
              </div>
              <div>
                <img src={card.images.image1} alt="" />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Works;
