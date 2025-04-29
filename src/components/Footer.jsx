import React from "react";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiGrid31 } from "react-icons/ci";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { LiaLinkedinIn } from "react-icons/lia";
import { ImPinterest2 } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
// import motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
// links
const link = [
  {
    name: "Home",
    path: "home",
    icon: <IoHomeOutline size={35} />,
  },
  {
    name: "About",
    path: "about",
    icon: <IoPersonOutline size={35} />,
  },
  {
    name: "Work",
    path: "work",
    icon: <CiGrid31 size={35} />,
  },
  {
    name: "Contact",
    path: "contact",
    icon: <FiPhone size={35} />,
  },
];

// media link
const mediaLink = [
  {
    path: "https://www.facebook.com/profile.php?id=61571200348945",
    icon: <SlSocialFacebook size={35} />,
  },
  {
    path: "https://www.linkedin.com/in/abdulbasitsmit/",
    icon: <LiaLinkedinIn size={35} />,
  },
  {
    path: "https://www.pinterest.com/kabdulbasit856/?actingBusinessId=1070519911333406917",
    icon: <ImPinterest2 size={35} />,
  },
  {
    path: "https://www.youtube.com/@AbdulBasit-l5p8u",
    icon: <AiOutlineYoutube size={35} />,
  },
];

const Footer = () => {
  return (
    <div className="border-t mt-8 border-text px-4">
      <div className="max-w-7xl mx-auto py-14 space-y-7">
        <div>
          <ul className="flex items-center justify-center flex-wrap gap-8">
            {link.map((item, index) => (
              <motion.li
                key={index}
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <Link to={item.path} className="flex items-center gap-2 cursor-pointer text-xl">
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
                </Link>
              </motion.li> 
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex items-center justify-center flex-wrap gap-8">
            {mediaLink.map((item, index) => (
              <motion.li
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                key={index}
              >
                <div className="flex items-center rounded-full bg-button-hover p-2 cursor-pointer">
                  <a href={item.path} target="_blank">{item.icon}</a>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <p>Terms of Service - Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
