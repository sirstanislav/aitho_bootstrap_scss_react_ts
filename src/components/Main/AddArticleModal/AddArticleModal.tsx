import React, { useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

interface IModalProps {
  show: boolean;
  handleClose: () => void;
  handleModalSubmit: any;
}

const AddArticleModal: React.FunctionComponent<IModalProps> = ({
  show,
  handleClose,
  handleModalSubmit,
}) => {
  const id = Date.now();
  const [formHeader, setFormHeader] = useState("MongoDB");
  const [formImage, setFormImage] = useState(
    "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png"
  );
  const [formMessage, setFormMessage] = useState(
    `MongoDB (da "humongous", enorme) è un DBMS non relazionale, orientato ai documenti.`
  );
  const [formTeacher, setFormteacher] = useState("Stanislav");
  const onSubmit = () =>
    handleModalSubmit({ formHeader, formImage, formMessage, formTeacher, id });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="articleModalHeader"
            label="Header:"
            className="mb-3"
          >
            <Form.Control
              value={formHeader}
              onChange={(e) => setFormHeader(e.target.value)}
              placeholder="Leave a comment here"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="articleModalImage"
            label="Image:"
            className="mb-3"
          >
            <Form.Control
              placeholder="Leave a comment here"
              value={formImage}
              onChange={(e) => setFormImage(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="articleModalMessage"
            label="Message:"
            className="mb-3"
          >
            <Form.Control
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "150px" }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="articleModalTeacher"
            label="Teacher:"
            className="mb-3"
          >
            <Form.Control
              placeholder="Leave a comment here"
              value={formTeacher}
              onChange={(e) => setFormteacher(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { AddArticleModal };
