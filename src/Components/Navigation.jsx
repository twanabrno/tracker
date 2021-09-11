import React, { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { Button, Dropdown, Container, Nav, Navbar } from "react-bootstrap";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import logo from "../Assets/img/logo.jpg";
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
  const [navBg, setNavBg] = useState("");
  const [navPt, setNavPt] = useState("");
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavBg("white");
      setNavPt("nav-shadow");
    } else {
      setNavBg("");
      setNavPt("pt-4");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    changeBg();
  });

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage]);

  const btnLangs = (
    <>
      <Dropdown align={currentLanguage.dir ? "start" : "end"}>
        <Dropdown.Toggle className="lang-btn p-1" id="dropdown-basic">
          <FaGlobe className="mx-1"/>
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
          <Fade>
            <div className="d-flex align-items-center justify-content-between py-1">
              <div className="d-block d-md-inline social">
                <a href="/" className="mx-3">
                  <GrFacebook />
                </a>
                <a href="/">
                  <GrInstagram />
                </a>
              </div>
              <div className="mx-3">{btnLangs}</div>
            </div>
          </Fade>
        </Container>
      </div>
      <Navbar
        bg={navBg}
        collapseOnSelect
        expand="lg"
        className={`${navPt} fixed-top nav-bar`}
      >
        <Container className="py-0 ">
            <Navbar.Brand href="#home" className="m-0">
                <Fade>
                <img className="img-fluid logo" src={logo} alt="" />
                <span className="align-bottom mx-3 mb-0 fs-3" >
                  {t('app_title')}
                </span>
                </Fade>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav p-0"/>
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
              <Fade top>
                <Button
                  href="#download"
                  className="download-btn btn btn-sm px-4 py-2 m-1"
                >
                  {t("download")}
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
