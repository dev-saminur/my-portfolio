"use client";
import Image from "next/image";
import React, { lazy } from "react";
import AgencImg from "../../../public/image/agenc.webp";
import { DM_Sans, Grechen_Fuemen, Open_Sans } from "next/font/google";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { AgencData } from "./AgencData";
import { AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "700",
});
const GrechenFuemen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});
const BottomAgenc = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className="row align-items-center">
        <div className="col-lg-6 col-12">
          <div className="bottom-left">
            <div className="image">
              <Image width={400} height={400} loading="lazy" src={AgencImg} />
            </div>
            <div className="shape">
              <div className="shape-text">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  {counterOn && (
                    <h4 className={DmSans.className}>
                      <CountUp
                        start={0}
                        end={5}
                        duration={2}
                        delay={0}
                      ></CountUp>
                      +
                    </h4>
                  )}
                </ScrollTrigger>
                <h4 className={DmSans.className}>Year</h4>
                <p className={DmSans.className}>Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 ">
          <div className="bottom-right">
            <div className="header">
              <h2 className={DmSans.className}>
                I <span>Run</span> Agency <span>Smartly</span> With My
                <span>Team</span> Member.
              </h2>
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            {AgencData.map((item, i) => (
              <li>
                <AiOutlineCheck /> {item.text}
              </li>
            ))}
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1 }}
              className={OpenSans.className}
            >
              Explore More
            </motion.button>
            <div className="my-progress d-flex justify-content-between align-items-center">
              <div className="member">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  {counterOn && (
                    <h2 className={GrechenFuemen.className}>
                      <CountUp start={0} end={30} duration={2}></CountUp> +
                    </h2>
                  )}
                </ScrollTrigger>

                <p>Team Members</p>
              </div>
              <div className="member">
                <ScrollTrigger>
                  {counterOn && (
                    <h2 className={GrechenFuemen.className}>
                      <CountUp start={0} end={150} duration={2}></CountUp>
                    </h2>
                  )}
                </ScrollTrigger>

                <p>Completed Projects</p>
              </div>
              <div className="member">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  {counterOn && (
                    <h2 className={GrechenFuemen.className}>
                      <CountUp start={0} end={50} duration={2}></CountUp> +
                    </h2>
                  )}
                </ScrollTrigger>

                <p>Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomAgenc;
