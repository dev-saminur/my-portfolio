"use client";
import { DM_Sans, Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Behance from "../../../public/svg/Behance";
import Dribble from "../../../public/svg/Dribble";
import Instagrams from "../../../public/svg/Instagrams";
import Image from "next/image";
import HeroImg from "../../../public/image/Hero-img.webp";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});
const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});
const Hero = () => {
  return (
    <>
      <div
       
        className="hero-section"
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xl={6} xs={12}>
              <div className="hero-content">
                <h1 className={DmSans.className}>
                  <span>Creative</span>
                  <span>Design and Work</span>
                  <span>Solution</span>
                </h1>
                <p className={DmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
                <div className="hero-button">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 1 }}
                    className={OpenSans.className}
                  >
                    Say Hello
                  </motion.button>

                  <Link href="/" className={DmSans.className}>
                    My Work <BsArrowUpRight />
                  </Link>
                </div>
                <div className="hero-social d-flex gap-3">
                  <div className="follow">
                    <Link href="/" className={DmSans.className}>
                      Follow me on
                    </Link>
                  </div>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                    className="hero-social-shape"
                  >
                    <Link href="/">
                      <Behance />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                    className="hero-social-shape"
                  >
                    <Link href="/">
                      <Dribble />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                    className="hero-social-shape"
                  >
                    <Link href="/">
                      <Instagrams />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </Col>
            <Col lg={6} xl={6} xs={12} className="text-end">
              <div className="hero-img">
                <Image src={HeroImg} width={400} height={400} loading="lazy" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
