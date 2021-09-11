import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="background">
      <div id="about">
        <Container>
          <Row>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center about-bg"
            >
            </Col>
            <Col
              md={6}
              className="px-md-3 px-lg-5 d-flex align-items-center"
            >
            <Fade>
              <div className="">
                  <h2 className="about-header1 mt-5 mt-lg-0 mb-3">
                    {t("welcome")}
                  </h2>
                  <h2 className="about-header2 mb-3 mb-md-4 ">{t("about_h")} </h2>
                  <p className="about-p ">{t("about_p")}</p>
              </div>
                </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default About;
