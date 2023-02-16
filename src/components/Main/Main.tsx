import "./Main.scss";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Cards } from "./Cards/Cards";
import { AddArticleModal } from "./AddArticleModal/AddArticleModal";
import { FormData } from "../../types/FormData";
import { initialCards } from "../../utility/сonstant";

const Main: React.FC = () => {
  const [show, setShow] = useState(false);
  const [cards, setCards] = useState<any>([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleModalSubmit = (data: FormData) => {
    setCards([data, ...cards]);
    handleClose();
  };
  const removeCard = (id: number): void => {
    setCards(cards.filter((card: { id: number }) => card.id !== id));
  };

  useEffect(() => {
    setCards(initialCards);
  }, []);

  return (
    <main className="main pt-5 m-auto">
      <Container>
        <Row>
          <Col xs={8}>
            <h1>Available courses</h1>
          </Col>
          <Col xs={4} className="d-flex justify-content-end align-items-center">
            <Button variant="primary" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
      </Container>

      <Cards cards={cards} initialCards={[]} removeCard={removeCard} />
      <AddArticleModal
        show={show}
        handleClose={handleClose}
        handleModalSubmit={handleModalSubmit}
      />
    </main>
  );
};

export { Main };
