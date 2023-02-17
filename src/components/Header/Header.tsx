import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ProfileDropdown } from "./ProfileDropdown/ProfileDropdown";
import { OffcanvasNavigation } from "./OffcanvasNavigation/OffcanvasNavigation";
import { PopoversNavigation } from "./PopoversNavigation/PopoversNavigation";
import { useState } from "react";
import "./Header.scss";
import { Container } from "react-bootstrap";
const logo = require("../../images/logo.png");

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const onShow = () => setShow(true);
  const onHide = () => setShow(false);

  return (
    <header className="header sticky-top">
      <Navbar
        expand={"lg"}
        variant="pils"
        bg="white"
        className="p-0 px-2 d-flex flex-nowrap justify-content-start border-bottom border-light"
        style={{ height: "60px" }}
      >
        <Container className="container flex-row justify-content-start p-0 col-md-8 col-lg-6">
          <Navbar.Brand href="#home" className="p-0">
            <img
              className="d-none d-md-flex w-100"
              src={logo}
              alt="Logo"
              style={{ height: "60px" }}
            />
          </Navbar.Brand>

          <Nav className="me-auto flex-row gap-3 ms-3 fs-6 fw-normal d-none d-md-flex align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">My courses</Nav.Link>
          </Nav>

          <button
            type="button"
            className="d-md-none navbar-toggler border-0 btn-black"
            onClick={onShow}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Container>

        <Container className="container flex-row justify-content-end p-0 col-md-4 col-lg-6">
          <PopoversNavigation />
          <ProfileDropdown />
        </Container>

        <OffcanvasNavigation show={show} onHide={onHide} />
      </Navbar>
    </header>
  );
};

export { Header };
