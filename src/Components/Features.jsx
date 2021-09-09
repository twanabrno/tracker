import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import { MdFeaturedPlayList } from "react-icons/md";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";

const Features = () => {
  const { t } = useTranslation();
  return (
    <div id="features">
      <Container>
        <div className="header text-center">
          <Jump>
            <h2>{t("features")}</h2>
          </Jump>
        </div>
        <Zoom>
          <div className=" d-flex justify-content-center">
            <hr className="hr" />
          </div>
        </Zoom>
        <Row className="mt-5">
          <Col lg={6} className="mb-4">
            <Zoom top>
              <div className="feature-item ">
                <Row>
                  <Col sm={2} className="text-center p-2">
                    <MdFeaturedPlayList
                      className="featuresicon"
                      style={{ color: "ca8fe8" }}
                    />
                  </Col>
                  <Col className="text-center text-md-start">
                    <h4>{t("feature_1")}</h4>
                    <p className="lead">{t("feature_body_1")}</p>
                  </Col>
                </Row>
              </div>
            </Zoom>
          </Col>
          <Col lg={6} className="mb-4">
            <Zoom top>
              <div className="feature-item ">
                <Row>
                  <Col sm={2} className="text-center p-2">
                    <MdFeaturedPlayList
                      className="featuresicon"
                      style={{ color: "80D9FE" }}
                    />
                  </Col>
                  <Col className="text-center text-md-start">
                    <h4>{t("feature_2")}</h4>
                    <p className="lead">{t("feature_body_2")}</p>
                  </Col>
                </Row>
              </div>
            </Zoom>
          </Col>
          <Col lg={6} className="mb-4">
            <Zoom bottom>
              <div className="feature-item ">
                <Row>
                  <Col sm={2} className="text-center p-2">
                    <MdFeaturedPlayList
                      className="featuresicon"
                      style={{ color: "#ABFD97" }}
                    />
                  </Col>
                  <Col className="text-center text-md-start">
                    <h4>{t("feature_3")}</h4>
                    <p className="lead">{t("feature_body_3")}</p>
                  </Col>
                </Row>
              </div>
            </Zoom>
          </Col>
          <Col lg={6} className="mb-4">
            <Zoom bottom>
              <div className="feature-item ">
                <Row>
                  <Col sm={2} className="text-center p-2">
                    <MdFeaturedPlayList
                      className="featuresicon"
                      style={{ color: "8c85d4" }}
                    />
                  </Col>
                  <Col className="text-center text-md-start">
                    <h4>{t("feature_4")}</h4>
                    <p className="lead">{t("feature_body_4")}</p>
                  </Col>
                </Row>
              </div>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
