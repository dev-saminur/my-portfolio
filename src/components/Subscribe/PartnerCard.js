import Image from "next/image";
import React from "react";
import PartnerOne from "../../../public/svg/PartnerOne";
import { DM_Sans } from "next/font/google";
import PartnerTwo from "../../../public/svg/PartnerTwo";
import PartnerThree from "../../../public/svg/PartnerThree";
import PartnerFour from "../../../public/svg/PartnerFour";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});
const PartnerCard = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <PartnerOne />
            <h4 className={DmSans.className}>Happy Mart</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <PartnerTwo />
            <h4 className={DmSans.className}>Lori Cracker</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <PartnerThree />
            <h4 className={DmSans.className}>Emad Fashion</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <PartnerFour />
            <h4 className={DmSans.className}>Docco Semims</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerCard;
