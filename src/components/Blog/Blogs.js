"use client";
import React from "react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Slider from "react-slick";

import BlogData from "@/Data/BlogData";
import Link from "next/link";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});
const Blogs = () => {
  function Arrows(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 500,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrows />,
    prevArrow: <Arrows />,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="blog-item ">
      <Slider {...settings}>
        {BlogData.map((item, i) => (
          <div className="box-item" key={i}>
            <div className="slider row-gap-5">
              <div className="slider-image">
                <Image src={item.image} width={400} height={400} />
              </div>
              <div className="d-flex  date">
                <Image src={item.dateSvg} width={30} height={30} />
                <p className={DmSans.className}>{item.date}</p>
              </div>
              <h4 className={DmSans.className}>{item.title}</h4>
              <Link href="/">{item.readmore}</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;
