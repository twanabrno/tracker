import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Button, Container, Row } from "react-bootstrap";
import { RiShoppingBagFill } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";
import { AiFillApple } from "react-icons/ai";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Download = () => {
  const { t } = useTranslation();
  return (
    <div id="download" className="text-center ">
      <Container>
        <div className="section-title">
          <Jump>
            <h2>{t("download")}</h2>
          </Jump>
          <Zoom>
            <div className=" d-flex justify-content-center">
              <hr className="hr" />
            </div>
          </Zoom>
        </div>
        <Row className="pt-3 mt-5">
          <Col sm={4} className="mb-5">
            <Fade left>
              <div className="androidCard">
                <div>
                  <DiAndroid className="d-icon" style={{ color: "#6BDC85" }} />
                </div>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="androidIcon"
                >
                  {t("android")}
                </Button>
              </div>
            </Fade>
          </Col>
          <Col sm={4} className=" mb-5">
            <Zoom>
              <div className="iosCard">
                <div>
                  <AiFillApple className="d-icon" />
                </div>
                <Button variant="outline-primary" size="lg" className="iosIcon">
                  {t("ios")}
                </Button>
              </div>
            </Zoom>
          </Col>
          <Col sm={4} className="mb-5 ">
            <Fade right>
              <div className="appgalleryCard">
                <div className="text-danger">
                  <RiShoppingBagFill className="d-icon" />
                </div>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="appgalleryIcon"
                >
                  {t("app_gallery")}
                </Button>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Download;
