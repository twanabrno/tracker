import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";
import fly from "../Assets/img/fly.png";
import subscribe from "../Assets/img/subscribe.png";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";
import HeadShake from "react-reveal/HeadShake";

const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <div id="subscribe">
      <div className="overlay parallax_background parallax-window">
        <Container className="text-center">
          <Jump>
            <h2>{t("subscribe")}</h2>
          </Jump>
          <Zoom>
            <div className=" d-flex justify-content-center mb-4">
              <hr className="hr" />
            </div>
          </Zoom>
          <Row>
            <Col lg={7} className="d-flex justify-content-center">
              <Card style={{ width: "20rem" }}>
                <Card.Body className="p-0 m-0">
                  <Card.Title className="text-center">
                    <LightSpeed left>
                      <img src={fly} className="img-fluid fly-img" alt="" />
                    </LightSpeed>
                    <Jump>
                      <h4>{t("our_plan")}</h4>
                    </Jump>
                  </Card.Title>

                  <div className="p-3">
                    <ul className="list-unstyled px-3">
                      <Bounce left cascade>
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
                      </Bounce>
                    </ul>
                  </div>
                  <hr className="plan-hr" />
                  <div className="price text-center">
                    <RubberBand>
                      <div className="mb-3">
                        <sup>{t("iqd")}</sup>
                        <span>15,000</span>/{t("month")}
                      </div>
                    </RubberBand>
                    <HeadShake>
                      <Button>{t("get_started")}</Button>
                    </HeadShake>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5} className="d-flex justify-content-center text-center d-none d-lg-block">
              <div>
                <Rotate top right>
                  <img
                    src={subscribe}
                    className="img-fluid subscribe-img"
                    alt=""
                  />
                </Rotate>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Subscribe;
