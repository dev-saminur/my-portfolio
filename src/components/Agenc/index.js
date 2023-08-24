import React from "react";
import TopAgenc from "./TopAgenc";
import BottomAgenc from "./BottomAgenc";

const Agency = () => {
  return (
    <>
      <div className="agency">
        <div className="container">
          <div className="top-agenc">
            <TopAgenc />
          </div>
          <div className="bottom-agenc"> <BottomAgenc /> </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
