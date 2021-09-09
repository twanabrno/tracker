import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div id="home">
      <div className="overlay">
        <Container className="px-md-5">
          <Col md={7}>
            <div md={8} className="intro-text">
              <Flip top cascade>
                <h1>{t("home_title")}</h1>
              </Flip>
              <Slide bottom cascade>
                <p>{t("home_p")}</p>
              </Slide>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Home;
