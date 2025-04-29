import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

// links
const link = [
  {
    name: "Home",
    path: "home",
    offset: -200,
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Work",
    path: "work",
  },
  {
    name: "Contact",
    path: "contact",
    offset: 200,
  },
];

const Navbar = () => {
  // menu
  const [rightToggle, setRightToggle] = useState(true);
  const handleToggle = () => {
    setRightToggle(!rightToggle);
  };
  const closeMenu = () => {
    setRightToggle(!rightToggle);
  };
  return (
    <div className="px-4 mb-8 border-b border-text shadow-2xl">
      <div className="max-w-7xl mx-auto py-7 flex items-center justify-between">
        {/* logo */}
        <div className="w-16 text-2xl text-orange font-oswald">AbdullBasit</div>
        {/* menu */}
        <div
          className="md:hidden flex transition-all duration-300"
          onClick={handleToggle}
        >
          {rightToggle ? <HiMenuAlt2 size={35} /> : <IoMdClose size={35} />}
        </div>
        {/* links */}
        <div
          className={`flex items-center justify-center md:w-auto w-full z-50 md:static absolute top-20 left-0 ${
            rightToggle
              ? "-translate-x-full md:translate-0 -left-full"
              : "translate-x-0 right-0"
          } md:bg-none bg-bg md:h-auto h-screen transition-transform duration-300`}
        >
          <ul className="flex md:flex-row flex-col items-center gap-7">
            {link.map((link, index) => {
              return (
                <li
                  key={index}
                  onClick={() => closeMenu()}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  offset={link.offset}
                  className="text-xl cursor-pointer"
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
