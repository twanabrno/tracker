import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import Jump from "react-reveal/Jump";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
    <div id="whychooseus">
      <Container>
        <Row>
          <Col
            md={5}
            className="d-flex align-items-center justify-content-center mb-5 mb-md-0"
          >
            <Zoom>
              <img
                className="img-fluid"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </Zoom>
          </Col>
          <Col md={7} className="d-flex align-items-center">
            <div>
              <Jump>
                <h3 className="mb-2">{t("whychooseus")}</h3>
              </Jump>
              <Zoom>
                <hr className="hr" />
              </Zoom>
              <Flip right cascade>
                <p className="mt-4">{t("whychooseus_p")}</p>
              </Flip>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;