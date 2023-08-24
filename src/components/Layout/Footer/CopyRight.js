import CopyRightData from "@/Data/CopyRightData";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});
const CopyRight = () => {
  return (
    <>
      <div className="copyRight">
        <Container>
          <Row>
            <Col lg={8} xs={12} className="mx-auto">
              <div className="copy-right-list d-flex align-items-center justify-content-center lg-gap-4 gap-3">
                {CopyRightData.map((item, i) => (
                  <Link href={item.url} className={OpenSans.className}>
                    {item.link}
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CopyRight;
