import { Container, Nav, Button, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartIcon } from "../assets/icons/CartIcon.tsx";

export function Navbar() {
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          {/* me significa margin at the end of the nav links */}
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <CartIcon />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              color: "whitesmoke",
              width: "1.5rem",
              height: "1.5rem",
              transform: "translate(25%, 25%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBS>
  );
}
