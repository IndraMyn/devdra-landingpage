import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

function NavbarPartial(props) {

  return (
    <div>
      <Navbar style={{background: '#ffffff'}} light expand="md" fixed="top" className="shadow-sm rounded-lg">
          <Container>
              <Link to="/" className="navbar-brand">Devdra</Link>
              <Nav>
                {/* <NavItem>
                      <Link to="/" className="nav-link text-secondary text-decoration-none">Beranda</Link>
                </NavItem>
                <NavItem>
                      <Link to="/" className="nav-link text-secondary text-decoration-none">Tentang Kami</Link>
                </NavItem> */}
                <NavItem>
                    <NavLink href="https://blog.devdra.com" className="text-dark text-decoration-none">Blog</NavLink>
                </NavItem>
              </Nav>
          </Container>
      </Navbar>
    </div>
  );
}

export default NavbarPartial;