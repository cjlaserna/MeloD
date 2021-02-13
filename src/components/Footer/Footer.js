
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
            <NavLink href="//put in youtube pitch link here">
            Zanzibar
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="//put github repo here">
              Github
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://www.creative-tim.com/?ref=bdr-user-archive-footer"
            target="_blank"
          >
            Rebecca, Catherine, [inset other names]
          </a>{" "}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
