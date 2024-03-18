import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Base({ children }) {
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/" className="nav-img">
              <img src="./guvi.png" alt="guvi" />
            </Navbar.Brand>
            <Navbar.Collapse className="dflex">
              <Nav>
                <Nav.Link href="/courses">Courses</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>

              <Button variant="outline-success">SignUp</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>{children}</main>
    </>
  );
}
export default Base;
