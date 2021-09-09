import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import Slide from "react-reveal/Slide";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="background">
      <div id="about">
        <Container>
          <Row>
            <Col
              md={4}
              className="d-flex align-items-center justify-content-center"
            >
              <Zoom>
                <img
                  className="img-fluid "
                  src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/bg4.png"
                  alt=""
                />
              </Zoom>
            </Col>
            <Col
              md={8}
              className="px-0 px-md-3 px-lg-5 d-flex align-items-center"
            >
              <div className="">
                <Jump>
                  <h6 className="about-header1 mt-5 mt-lg-0 mb-3">
                    {t("welcome")}
                  </h6>
                </Jump>
                <Slide left cascade>
                  <h3 className="about-header2 mb-3 mb-md-4 mb-lg-5">{t("about_h")} </h3>
                </Slide>
                <Zoom cascade>
                  <p className="about-p ">{t("about_p")}</p>
                </Zoom>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default About;
