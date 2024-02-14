import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
 <>
<Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">PatilKaki</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink activeClassName='active' className="nav-link" aria-current="page" to="/">Hero</NavLink>
            <NavLink activeClassName='active' className="nav-link"  to="/about">About Founder</NavLink>
            <NavLink activeClassName='active' className="nav-link" to="/why?">Why should You go ahead with Me?</NavLink>
            <NavLink activeClassName='active' className="nav-link" to="/countdown">Countdown Timer</NavLink>
            <NavLink activeClassName='active' className="nav-link" to="/calltoAction">Call to Action</NavLink>
            <NavLink activeClassName='active' className="nav-link" to="/form">Form</NavLink>
           
          </Nav>
        </Navbar.Collapse>
       
      </Container>

    </Navbar>
 
 </>
  )
}

export default MyNavbar;