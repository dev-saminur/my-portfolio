"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Logo from "../../../../public/svg/Logo";
import { DM_Sans, Open_Sans } from "next/font/google";
import { Resources, ServiceList } from "@/Data/FooterData";
import Telegram from "../../../../public/svg/Telegram";
import Facebook from "../../../../public/svg/Facebook";
import Twiteer from "../../../../public/svg/Twiteer";
import Instagram from "../../../../public/svg/Instagram";
import Pinterest from "../../../../public/svg/Pinterest";
import CopyRight from "./CopyRight";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={3} md={5}>
            <div className="footer-content">
              <Link href="#">
                <Logo />
              </Link>
              <p className={OpenSans.className}>
                There are many variations of passages of available, but the
                majority have suffered.
              </p>
            </div>
          </Col>
          <Col lg={3} md={3} xs={6}>
            <div className="footer-content-list">
              <h4 className={DmSans.className}>Services</h4>

              <div className="service-list">
                {ServiceList?.map((list, i) => (
                  <Link className={DmSans.className} href={list.url}>
                    {list.link}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} xs={6}>
            <div className="footer-content-list">
              <h4 className={DmSans.className}>Resources</h4>

              <div className="service-list">
                {Resources?.map((list, i) => (
                  <Link className={DmSans.className} href={list.url}>
                    {list.link}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={3} md={8}>
            <div className="footer-content-list">
              <h4 className={DmSans.className}>Newsletter</h4>
              <p>Subscribe for our upcoming latest address and resources</p>
              <div className="news-letter-form d-flex align-items-center justify-content-between">
                <input type="email" placeholder="email" />
                <button>
                  <Telegram />
                </button>
              </div>
              <div className="social-icons d-flex gap-3">
                <div className="social-shape d-flex align-items-center justify-content-center">
                  <Facebook />
                </div>
                <div className="social-shape d-flex align-items-center justify-content-center">
                  <Instagram />
                </div>
                <div className="social-shape d-flex align-items-center justify-content-center">
                  <Twiteer />
                </div>
                <div className="social-shape d-flex align-items-center justify-content-center">
                  <Pinterest />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <CopyRight />
    </div>
  );
};

export default Footer;
