"use client"
import { DM_Sans } from "next/font/google";
import React from "react";
import AboutBottom from "./AboutBottom";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});
const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-xl-6 col-12">
              <div className="power">
                <h2 className={DmSans.className}>
                  Failure is The Power that Gives <span>Success</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-12">
              <div className="power-text">
                <p className={DmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 1 }}
                >
                  Download Now
                </motion.button>
              </div>
            </div>
          </div>
          <div>
            <AboutBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
