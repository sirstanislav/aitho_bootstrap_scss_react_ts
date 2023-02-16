import "./Cards.scss";
import * as React from "react";
import { Container } from "react-bootstrap";
import { Card } from "../Card/Card";
import { FormData } from "../../../types/FormData";
interface ICardsProps {
  cards: FormData[];
  initialCards: FormData[];
  removeCard: (id: number) => void; //It's mean what we don't expect RETURN
}

const Cards: React.FC<ICardsProps> = (props) => {
  const { cards, removeCard } = props;

  return (
    <Container className="cards pt-3">
      {cards.map((card) => {
        return <Card key={card.id} removeCard={removeCard} {...card} />;
      })}
    </Container>
  );
};

export { Cards };
