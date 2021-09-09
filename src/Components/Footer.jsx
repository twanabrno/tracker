import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdEmail, MdPhone } from "react-icons/md";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div id="footer">
      <Container>
        <Flip top cascade>
          <h2>{t("app_title")}</h2>
        </Flip>
        <Zoom>
          <hr className="hr" />
        </Zoom>
        <Row>
          <Col lg={5} className="mb-5">
            <Fade left cascade>
              <p className="mt-3 mt-lg-5">{t("footer_p")}</p>
            </Fade>
            <Zoom top>
              <div className="mx-md-5">
                <a href="">
                  <FaFacebookF className="fotter-social" />
                </a>
                <a href="">
                  <FiInstagram className="fotter-social" />
                </a>
              </div>
            </Zoom>
          </Col>
          <Col lg={1}></Col>
          <Col lg={2} xs={6} className="mb-5">
            <Pulse>
              <h4>{t("usefull_links")}</h4>
            </Pulse>
            <ul className="list-unstyled mx-2 mt-3 mt-lg-5">
              <li>
                <a href="#home">{t("home")}</a>
              </li>
              <li>
                <a href="#about">{t("about")}</a>
              </li>
              <li>
                <a href="#features">{t("features")}</a>
              </li>
              <li>
                <a href="#faq">{t("faq")}</a>
              </li>
              <li>
                <a href="#download">{t("download")}</a>
              </li>
              <li>
                <a href="#subscribe">{t("subscribe")}</a>
              </li>
            </ul>
          </Col>
          <Col lg={4} xs={12} className="contact">
            <Pulse>
              <h4>{t("have_questions")}</h4>
            </Pulse>
            <div className="mt-3 mt-lg-5">
              <MdEmail />
              <a href="mailto:example@ex.com">example@ex.com</a>
            </div>
            <div>
              <MdPhone />
              <a href="tel:07501234567">0750 123 4567</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
