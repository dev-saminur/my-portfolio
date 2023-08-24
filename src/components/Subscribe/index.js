import React from "react";
import PartnerCard from "./PartnerCard";
import Newsletter from "./Newsletter";


const Subscribe = () => {
  return (
    <>
      <div className="subscribe-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="reputed-header">
                <h2>Reputed Partners</h2>
              </div>
            </div>
          </div>
          <div className="partner-card">
            <PartnerCard />
          </div>
          <div className="subscribe">
            <Newsletter/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
