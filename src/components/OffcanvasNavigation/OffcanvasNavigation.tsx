import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import { Nav } from "react-bootstrap";

interface OffcanvasNavigationProps {
  show: boolean;
  onHide: () => void;
}

const OffcanvasNavigation: React.FC<OffcanvasNavigationProps> = ({
  show,
  onHide,
}) => {
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton />
      <Nav className="w-auto ms-3 gap-3 fs-6 fw-light">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Dashboard</Nav.Link>
        <Nav.Link href="#pricing">My courses</Nav.Link>
      </Nav>
    </Offcanvas>
  );
};

export { OffcanvasNavigation };
