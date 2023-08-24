"use client";
import AboutItemData from "@/Data/AboutItemData";
import React from "react";
import { useState } from "react";
import ExperienceData from "./ExperienceData";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});
const AboutBottom = () => {
  const [active, setActive] = useState(0);

  const handleActive = (i) => {
    setActive(i);
  };
  return (
    <div className="about-bottom">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 col-md-12">
          <div className="about-box">
            <div className="row row-gap-4">
              {AboutItemData.map((item, i) => (
                <div
                  className="col-lg-6 col-md-6"
                  onClick={() => handleActive(i)}
                >
                  <motion.div whileTap={{ scale: 1.1 }} className="about-item">
                    <h5 className={DmSans.className}>{item.heading}</h5>
                    <p className={DmSans.className}>{item.peragraph}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          {active == 0 && (
            <ExperienceData
              title="Get So Many Awards
              In 5 years"
              peragraph="There are many variations of passages of Lorem Ipsum available, but the majority."
              button="Visit  Now"
            />
          )}
          {active == 1 && (
            <ExperienceData
              title="Get So Many Awards
              In 2 years"
              peragraph="There are many variations of passages of Lorem Ipsum available, but the majority."
              button="Visit  Now"
            />
          )}
          {active == 2 && (
            <ExperienceData
              title="Get So Many Awards
              In 3 years"
              peragraph="There are many variations of passages of Lorem Ipsum available, but the majority."
              button="Visit  Now"
            />
          )}
          {active == 3 && (
            <ExperienceData
              title="Get So Many Awards
              In 4 years"
              peragraph="There are many variations of passages of Lorem Ipsum available, but the majority."
              button="Visit  Now"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
