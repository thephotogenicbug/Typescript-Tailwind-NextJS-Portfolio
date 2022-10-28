import React from "react";
import AboutImg from "./about_img.jpg";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className=" flex flex-col relative  h-screen  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1666945918/about_img_z5jhtj.jpg"
        alt=""
        className=" -mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] md:mt-40 "
      />
      <div className=" space-y-10 px-0 md:px-10 ">
        <h4 className=" text-4xl font-semibold  ">
          Here is a{" "}
          <span className=" underline decoration-[#f7ab0a] ">little</span>{" "}
          background
        </h4>
        <p className=" text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet
          excepturi officia quaerat dicta adipisci nobis magni, mollitia,
          dolorum velit corrupti natus incidunt sed explicabo quidem est facere
          repellendus nihil.
        </p>
      </div>
    </motion.div>
  );
}
