import React from 'react'
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiGrid31 } from "react-icons/ci";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { LiaLinkedinIn } from "react-icons/lia";
import { ImPinterest2 } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
// links
const link = [
  {
    name: "Home",
    path: "/",
    icon: <IoHomeOutline size={35} />,
  },
  {
    name: "About",
    path: "#about",
    icon: <IoPersonOutline size={35} />,
  },
  {
    name: "Work",
    path: "#work",
    icon: <CiGrid31 size={35} />,
  },
  {
    name: "Contact",
    path: "#contact",
    icon: <FiPhone size={35} />,
  },
];

// media link
const mediaLink = [
  {
    path: "/",
    icon: <SlSocialFacebook size={35} />,
  },
  {
    path: "#about",
    icon: <LiaLinkedinIn size={35} />,
  },
  {
    path: "#work",
    icon: <SlSocialInstagram size={35} />,
  },
  {
    path: "#work",
    icon: <ImPinterest2 size={35} />,
  },
  {
    path: "#work",
    icon: <AiOutlineYoutube size={35} />,
  },
]

const Footer = () => {
  return (
    <div className='border-t mt-8 border-text px-4'>
      <div className='max-w-7xl mx-auto py-14 space-y-7'>
        <div>
          <ul className='flex items-center justify-center flex-wrap gap-8'>
            {link.map((item, index) => (
              <li key={index}>
                <div className='flex items-center gap-2 text-xl'>
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex items-center justify-center flex-wrap gap-8'>
            {mediaLink.map((item, index) => (
              <li key={index}>
                <div className='flex items-center rounded-full bg-button-hover p-2'>
                  <div>{item.icon}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-end'>
          <p>Terms of Service - Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer