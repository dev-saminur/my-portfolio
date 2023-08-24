"use client";
import { DM_Sans, Open_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import Webdesign from "../../../public/svg/WebDesign";
import { motion } from "framer-motion";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});
const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "700",
});
const TopAgenc = () => {
  return (
    <div>
      <div className="row align-items-center">
        <div className="col-lg-6 col-12">
          <div className="top-left">
            <h2 className={DmSans.className}>
              I <span>Run</span> Agency <span>Smartly</span> With My
              <span>Team</span> Member.
            </h2>
            <p className={DmSans.className}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look.
            </p>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.4 },
              }}
              className={OpenSans.className}
            >
              Say Hello
            </motion.button>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="top-right ">
            <motion.div
              whileTap={{ x: 50, transition: { duration: 0.1 } }}
              className="service-box d-flex justify-content-between align-items-center"
            >
              <div className="d-flex justify-content-center align-items-center service-icon">
                <Webdesign />
              </div>
              <div className="service-heading">
                <h4>Web Development</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileTap={{
                x: -50,
                transition: { duration: 0.1 },
              }}
              className="service-box d-flex justify-content-between align-items-center"
            >
              <div className="d-flex justify-content-center align-items-center service-icon">
                <Webdesign />
              </div>
              <div className="service-heading">
                <h4>Product Design & Development</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileTap={{ x: 50, transition: { duration: 0.1 } }}
              className="service-box d-flex justify-content-between align-items-center"
            >
              <div className="d-flex justify-content-center align-items-center service-icon">
                <Webdesign />
              </div>
              <div className="service-heading">
                <h4>MERN Stack Development</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAgenc;
