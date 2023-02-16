import "./Card.scss";
import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { FormData } from "../../../types/FormData";

interface ICardProps extends FormData {
  removeCard: (id: number) => void;
}

const Card: React.FC<ICardProps> = (props) => {
  const { formHeader, formImage, formMessage, formTeacher, id, removeCard } =
    props;

  return (
    <>
      <Container className="card mb-3 p-3">
        <Row className="mb-3">
          <Col>
            <a href="http://localhost:3000/" className="text-decoration-none">
              {formHeader}
            </a>
          </Col>
        </Row>
        <Row className="flex-column flex-md-row">
          <Col className="col-12 col-md-2 d-flex justify-content-center align-items-center mb-3 mb-md-0">
            <img
              src={formImage}
              alt="BackEnd 101"
              className="img-fluid rounded"
            />
          </Col>
          <Col>
            <Row className="mb-3">
              <Col>{formMessage}</Col>
            </Row>
            <Col className="d-flex flex-row justify-content-between align-items-center">
              <ul className="list-unstyled p-0 m-0">
                <li>
                  <span>Teacher: </span>
                  <a
                    className="text-decoration-none text-info-emphasis card__teacher-link"
                    href="http://localhost:3000/"
                  >
                    {formTeacher}
                  </a>
                </li>
              </ul>
              <Button onClick={(e) => removeCard(id)}>
                <Icon.Trash />
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Card };
