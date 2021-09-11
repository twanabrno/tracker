import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import { MdFeaturedPlayList } from "react-icons/md";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Features = () => {
  const { t } = useTranslation();
  return (
    <div id="features">
      <Container>
        <div className="header text-center">
          <Fade>
            <h3 className='mb-1'>{t("features")}</h3>
          </Fade>
        </div>
        <Zoom>
          <div className=" d-flex justify-content-center mb-3">
            <hr className="hr" />
          </div>
        </Zoom>
        <div className='text-center'>
          <p className='text-secondary'>{t("features_p")}</p>
        </div>
        <Row className="mt-5">
          <Col lg={6} className="mb-4">
            <Fade >
              <div className="feature-item">
                <Row>
                  <Col sm={2} className="text-center p-2">
                    <MdFeaturedPlayList
                      className="featuresicon"
                      style={{ color: "#408858" }}
                    />
                  </Col>
                  <Col className='d-flex align-items-center'>
                    <h6 className='m-0' >{t("feature_1")}</h6>
                  </Col>
                </Row>
              </div>
            </Fade>
          </Col>
          <Col lg={6} className="mb-4">
            <Fade >
              <div className="feature-item ">
                <Row>
                  <Col sm={2} className="text-center p-2">
                    <MdFeaturedPlayList
                      className="featuresicon"
                      style={{ color: "#F73746" }}
                    />
                  </Col>
                  <Col className='d-flex align-items-center'>
                    <h6 className='m-0'>{t("feature_2")}</h6>
                  </Col>
                </Row>
              </div>
            </Fade>
          </Col>
          <Col lg={6} className="mb-4">
            <Fade >
              <div className="feature-item ">
                <Row>
                  <Col sm={2} className="text-center p-2">
                    <MdFeaturedPlayList
                      className="featuresicon"
                      style={{ color: "#F29C1F" }}
                    />
                  </Col>
                  <Col className='d-flex align-items-center' >
                    <h6 className='m-0'>{t("feature_3")}</h6>
                  </Col>
                </Row>
              </div>
            </Fade>
          </Col>
          <Col lg={6} className="mb-4">
            <Fade >
              <div className="feature-item ">
                <Row>
                  <Col sm={2} className="text-center p-2">
                    <MdFeaturedPlayList
                      className="featuresicon"
                      style={{ color: "#6DAF17" }}
                    />
                  </Col>
                  <Col className='d-flex align-items-center'>
                    <h6 className='m-0'>{t("feature_4")}</h6>
                  </Col>
                </Row>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
