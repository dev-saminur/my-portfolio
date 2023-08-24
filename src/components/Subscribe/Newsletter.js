"use client";
import { DM_Sans, Open_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import Form from "react-bootstrap/Form";
import RightArrow from "../../../public/svg/rightArrow.svg";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});
const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "700",
});
const Newsletter = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="left">
            <h2 className={DmSans.className}>Subscirbe to Our Newsletter</h2>
            <p className={OpenSans.className}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-2">
          <div className="right">
            <div className="input-form">
              <div className="input">
                <Form.Control type="email" placeholder="Email" />
              </div>
              <div className="arrow">
                <Image width={24} height={24} src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
