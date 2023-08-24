"use client";
import { DM_Sans } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});
const ExperienceData = ({ title, peragraph, button }) => {
  return (
    <>
      <div className="experience">
        <h4 className={DmSans.className}>{title}</h4>
        <p className={DmSans.className}>{peragraph}</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          className={DmSans.className}
        >
          {button}
        </motion.button>
      </div>
    </>
  );
};

export default ExperienceData;
