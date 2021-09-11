import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
    <div id="whychooseus">
      <Container>
        <Row>
          
          <Col md={6} className="d-flex align-items-center">
            <div>
              <Fade>
                <h2 className="mb-2">{t("whychooseus")}</h2>
                <hr className="hr" />
             
              
                <p className="mt-4">{t("whychooseus_p")}</p>
              </Fade>
              
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center whychooseus-bg"
          >
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
