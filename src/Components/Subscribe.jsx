import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";
import fly from "../Assets/img/fly.png";
import subscribe from "../Assets/img/subscribe.png";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <div id="subscribe">
      <div className="overlay parallax_background parallax-window">
        <Container className="text-center">
          <Row>
            <Col lg={7}  className="d-flex justify-content-center">
              <Card style={{ width: "20rem" }}>
                <Card.Body className="p-0 m-0">
                  <Card.Title className="text-center">
                    <LightSpeed left>
                      <img src={fly} className="img-fluid fly-img" alt="" />
                    </LightSpeed>
                    <Fade>
                      <h3>{t("our_plan")}</h3>
                    </Fade>
                  </Card.Title>

                  <div className="p-1">
                    <ul className="list-unstyled px-3">
                      <Fade>
                        <li>
                          <AiOutlineCheck className="mx-2" />
                          {t("plan_1")}
                        </li>
                        <li>
                          <AiOutlineCheck className="mx-2" />
                          {t("plan_2")}
                        </li>
                        <li>
                          <AiOutlineCheck className="mx-2" />
                          {t("plan_3")}
                        </li>
                        <li>
                          <AiOutlineCheck className="mx-2" />
                          {t("plan_4")}
                        </li>
                      </Fade>
                    </ul>
                  </div>
                  <hr className="plan-hr mx-auto" />
                  <div className="price text-center">
                    <Fade>
                      <div className="mb-4">
                        <sup>{t("iqd")}</sup>
                        <span className="mx-1">15,000</span>/{t("month")}
                      </div>
                    </Fade>
                    <Fade>
                      <Button>{t("get_started")}</Button>
                    </Fade>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={5} className="d-flex justify-content-center text-center d-none d-lg-block">
              <div>
                <Fade>
                  <img
                    src={subscribe}
                    className="img-fluid subscribe-img"
                    alt=""
                  />
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Subscribe;
