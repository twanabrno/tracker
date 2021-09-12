import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdEmail, MdPhone } from "react-icons/md";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

import logo from "../Assets/img/logo-brand.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div id="footer">
      <Container>
        <div className='d-flex align-items-end justify-content-start'>
        <img src={logo} className="logo img-fluid" alt="" />
        <span className="mb-2 mx-3">
          <h2 className='mb-0'>
            <Flip top >
              {t("app_title")}
            </Flip>
          </h2>
        </span>
        </div>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <Fade >
              <p className="mt-4">{t("footer_p")}</p>
            </Fade>
            <Fade  >
              <div className="mx-md-5">
                <a href="/">
                  <FaFacebookF className="fotter-social" />
                </a>
                <a href="/">
                  <FiInstagram className="fotter-social" />
                </a>
              </div>
            </Fade>
          </Col>
          <Col lg={2} xs={6} className="mb-1 mb-md-0 px-3">
            <Fade>
              <h5>{t("usefull_links")}</h5>
            </Fade>
            <ul className="list-unstyled mt-2 px-0">
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
            </ul>
          </Col>
          <Col lg={4} xs={6} className="contact p-0">
            <Fade>
              <h5>{t("have_questions")}</h5>
            </Fade>
            <div className="mt-2">
              <MdEmail />
              <a href="mailto:example@ex.com">example@ex.com</a>
            </div>
            <div>
              <MdPhone />
              <a href="tel:07501234567">0750 123 4567</a>
            </div>
          </Col>
        </Row>
        <div className="text-center text-capitalize copy-right">&copy; {t("copy_right")}</div>
      </Container>
    </div>
  );
};

export default Footer;
