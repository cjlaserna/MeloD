
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="#">
            Melo<span>D</span> 
            </NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="#">
            where <span>music </span>meets<span> data</span> 
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made {" "} by{" "}
          <a
            href="https://www.creative-tim.com/?ref=bdr-user-archive-footer"
            target="_blank"
          >
            Catherine, Luca
          </a>{" "}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
