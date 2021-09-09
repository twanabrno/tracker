import React, { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { Button, Dropdown, Container, Nav, Navbar } from "react-bootstrap";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import kur from "../Assets/img/ku.svg";
import ar from "../Assets/img/ar.svg";
import en from "../Assets/img/en.svg";

const languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
  },
  {
    code: "kur",
    name: "کوردی",
    dir: "rtl",
  },
];

const Navigation = () => {
  const [bg, setBg] = useState("");
  const [pt, setPt] = useState("");
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setBg("white");
      setPt("nav-shadow");
    } else {
      setBg("");
      setPt("pt-5");
    }
  };

  useEffect(() => {
    changeBg();
    window.addEventListener("scroll", changeBg);
  });

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage]);

  const btnLangs = (
    <>
      <Dropdown align={currentLanguage.dir ? "start" : "end"}>
        <Dropdown.Toggle className="lang-btn" id="dropdown-basic">
          <FaGlobe />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown ">
          <Dropdown.Item
            className="d-flex justify-content-between"
            disabled={"ar" === currentLanguageCode}
            onClick={() => {
              i18next.changeLanguage("ar");
            }}
          >
            <img
              src={ar}
              className="img-fluid lang-icon"
              alt=""
              style={{ opacity: "ar" === currentLanguageCode ? 0.5 : 1 }}
            />
            <div>عربي</div>
          </Dropdown.Item>
          <Dropdown.Item
            className="d-flex justify-content-between"
            disabled={"kur" === currentLanguageCode}
            onClick={() => {
              i18next.changeLanguage("kur");
            }}
          >
            <img
              src={kur}
              className="img-fluid lang-icon"
              alt=""
              style={{ opacity: "kur" === currentLanguageCode ? 0.5 : 1 }}
            />
            <div>کوردی</div>
          </Dropdown.Item>
          <Dropdown.Item
            className="d-flex justify-content-between"
            disabled={"en" === currentLanguageCode}
            onClick={() => {
              i18next.changeLanguage("en");
            }}
          >
            <img
              src={en}
              className="img-fluid lang-icon"
              alt=""
              style={{ opacity: "en" === currentLanguageCode ? 0.5 : 1 }}
            />
            <div>English</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
  return (
    <>
      <div className="upperBar fixed-top">
        <Container className="upperBar">
          <Zoom>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-block d-md-inline social">
                <a href="/" className="mx-3 ">
                  <GrFacebook />
                </a>
                <a href="/">
                  <GrInstagram />
                </a>
              </div>
              <div className="mx-3">{btnLangs}</div>
            </div>
          </Zoom>
        </Container>
      </div>
      <Navbar
        bg={bg}
        collapseOnSelect
        expand="lg"
        className={` ${pt} fixed-top nav-bar`}
      >
        <Container className="py-0">
          <Zoom>
            <Navbar.Brand href="#home">{t("app_title")}</Navbar.Brand>
          </Zoom>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Fade top cascade>
                <Nav.Link className="navlink" href="#home">
                  {t("home")}
                </Nav.Link>
                <Nav.Link className="navlink" href="#about">
                  {t("about")}
                </Nav.Link>
                <Nav.Link className="navlink" href="#features">
                  {t("features")}
                </Nav.Link>
                <Nav.Link className="navlink" href="#faq">
                  {t("faq")}
                </Nav.Link>
              </Fade>
            </Nav>
            <Nav>
              <Fade right>
                <Button
                  href="#download"
                  className="download-btn btn btn-sm px-4 py-2 m-1"
                >
                  {t("download")}
                </Button>
                <Button
                  href="#subscribe"
                  className="subscribe-btn btn btn-sm px-4 py-2 m-1"
                >
                  {t("submit")}
                </Button>
              </Fade>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
