import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Button, Container, Row } from "react-bootstrap";
import { RiShoppingBagFill } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";
import { AiFillApple } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Download = () => {
  const { t } = useTranslation();
  return (
    <div id="download" className="text-center ">
      <Container>
        <div className="section-title">
          <Fade>
            <h3>{t("download")}</h3>
          </Fade>
          <Zoom>
            <div className=" d-flex justify-content-center">
              <hr className="hr" />
            </div>
          </Zoom>
        </div>
        <Row className="pt-3 mt-5">
          <Col sm={4} className="mb-5">
            <Fade>
              <div className="androidCard">
                <div>
                  <DiAndroid className="d-icon" style={{ color: "#6BDC85" }} />
                </div>
                <Button
                  variant="outline-primary"
                  className="androidIcon"
                >
                  {t("android")}
                </Button>
              </div>
            </Fade>
          </Col>
          <Col sm={4} className=" mb-5">
            <Fade>
              <div className="iosCard">
                <div>
                  <AiFillApple className="d-icon" />
                </div>
                <Button variant="outline-primary" className="iosIcon">
                  {t("ios")}
                </Button>
              </div>
            </Fade>
          </Col>
          <Col sm={4} className="mb-5 ">
            <Fade>
              <div className="appgalleryCard">
                <div className="text-danger">
                  <RiShoppingBagFill className="d-icon" />
                </div>
                <Button
                  variant="outline-primary"
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
