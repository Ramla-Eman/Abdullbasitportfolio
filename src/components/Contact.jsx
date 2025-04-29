import React from "react";
import contactImg from "../assets/contactimg.png";
import vector4 from "../assets/Vector 4.png";
import keyboard from "../assets/keyboard.png";
import mail from "../assets/mail.png";
import { FiSend } from "react-icons/fi";
// toastyfy
import { ToastContainer, toast } from "react-toastify";
// import motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  //Form
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3b05bef5-4184-4e71-b41d-a2072acf8dd9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully!");
        event.target.reset(); // Clear the form
      } else {
        toast.error(
          "Failed to send message: " + (res.message || "Unknown error")
        );
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };
  return (
    <div className="h-[80vh] py-6 px-4" id="contact">
      <ToastContainer />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="relative lg:w-[50%] w-full">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="md:text-7xl sm:text-5xl text-4xl font-bold leading-normal">
              Got a project in <br />
              <span className="text-text-main">mind?</span>
            </h2>
          </motion.div>
          <div className="lg:flex hidden justify-end gap-7">
            <motion.img
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              src={contactImg}
              alt=""
            />
            <motion.img
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              src={vector4}
              alt=""
              className="absolute bottom-32 left-26"
            />
          </div>
        </div>
        <div className="relative lg:w-[50%] w-full">
          <motion.form
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col gap-7"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4 ">
                <label htmlFor="" className="text-2xl">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
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
                  name="email"
                  className="md:w-auto w-full outline-0 rounded-2xl px-4 py-3 text-2xl bg-[#2B3039]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <label htmlFor="" className="text-2xl">
                Your message
              </label>
              <textarea
                name="message"
                id=""
                // cols="10"
                rows="7"
                placeholder="Message"
                className="md:w-auto w-full outline-0 rounded-2xl px-4 py-3 text-2xl bg-[#2B3039]"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-button hover:bg-button-hover flex items-center gap-4 text-white py-2 px-6 rounded-full text-2xl font-semibold"
              >
                <span>Send Message</span> <FiSend />
              </button>
            </div>
          </motion.form>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="absolute -top-14 left-16 lg:block hidden"
          >
            <img src={keyboard} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="absolute bottom-0 right-58 lg:block hidden"
          >
            <img src={mail} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
