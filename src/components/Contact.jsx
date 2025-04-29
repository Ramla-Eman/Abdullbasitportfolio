import React from "react";
import contactImg from "../assets/contactimg.png";
import vector4 from "../assets/Vector 4.png";
import keyboard from "../assets/keyboard.png";
import mail from "../assets/mail.png";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="h-screen py-6 px-4" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="relative lg:w-[50%] w-full">
          <div>
            <h2 className="md:text-7xl sm:text-5xl text-4xl font-bold leading-normal">
              Got a project in <br />
              <span className="text-text-main">mind?</span>
            </h2>
          </div>
          <div className="lg:flex hidden justify-end gap-7">
            <img src={contactImg} alt="" />
            <img src={vector4} alt="" className="absolute bottom-32 left-26" />
          </div>
        </div>
        <div className='relative lg:w-[50%] w-full'>
          <form className="flex flex-col gap-7">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-2xl">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="md:w-auto w-full outline-0 rounded-2xl px-4 py-3 text-2xl bg-[#2B3039]"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-2xl">
                  Your email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="md:w-auto w-full outline-0 rounded-2xl px-4 py-3 text-2xl bg-[#2B3039]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <label htmlFor="" className="text-2xl">
                Your message
              </label>
              <textarea
                name=""
                id=""
                // cols="10"
                rows="7"
                placeholder="Message"
                className="md:w-auto w-full outline-0 rounded-2xl px-4 py-3 text-2xl bg-[#2B3039]"
              ></textarea>
            </div>
            <div>
              <button className="bg-button hover:bg-button-hover flex items-center gap-4 text-white py-2 px-6 rounded-full text-2xl font-semibold">
                <span>Send Message</span> <FiSend />
              </button>
            </div>
          </form>
          <div className='absolute -top-14 left-16 lg:block hidden'>
            <img src={keyboard} alt="" />
          </div>
          <div className="absolute bottom-0 right-58 lg:block hidden" >
            <img src={mail} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
