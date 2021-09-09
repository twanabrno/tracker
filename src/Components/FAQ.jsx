import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import Faq from "react-faq-component";
import Jump from "react-reveal/Jump";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const FAQ = () => {
  const { t } = useTranslation();
  const data_1 = {
    rows: [
      {
        title: t("q_1"),
        content: t("a_1"),
      },
      {
        title: t("q_2"),
        content: t("a_2"),
      },
      {
        title: t("q_3"),
        content: t("a_3"),
      },
      {
        title: t("q_4"),
        content: t("a_4"),
      },
      {
        title: t("q_5"),
        content: t("a_5"),
      },
      
    ],
  };

  return (
    <div id="faq">
      <Container className="">
        <Row>
          <Col lg={6} className="px-lg-5">
            <div className="header mx-4">
              <Jump>
                <h2>FAQ</h2>
              </Jump>
              <Zoom>
                <div className="mb-4">
                  <hr className="hr" />
                </div>
              </Zoom>
            </div>
            <Slide left>
              <Faq data={data_1} />
            </Slide>
          </Col>
          <Col lg={6} className="px-lg-5">
            <Slide right>
              <img
                className="img-fluid"
                src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/bg3.png"
                alt=""
              />
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
