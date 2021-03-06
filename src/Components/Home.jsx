import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Home = () => {
  const { t } = useTranslation();
  

  return (
    <div id="home">
      <div className="overlay">
        <Container className="px-md-5">
          <Col>
            <div className="intro-text text-center">
              <Fade>
                <h1 className="mb-4">{t("home_title")}</h1>
                <p>{t("home_p")}</p>
              </Fade>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Home;
