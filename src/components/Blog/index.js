import React from "react";
import Blogs from "./Blogs";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-12 mx-auto text-center">
              <div className="blog-header">
                <h2>Latest Blog</h2>
              </div>
            </div>
            <div className="col-lg-9 col-xl-8 col-12 mx-auto text-center">
              <div className="blog-heading">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Blogs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
