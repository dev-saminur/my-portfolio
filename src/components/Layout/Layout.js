import React from "react";
import Menubar from "./Menu/Menubar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
