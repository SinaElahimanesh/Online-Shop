import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import './nav.css';


import React from 'react'


const NavbarWeb = () => {
  return (
    <>
        <Navbar style={{backgroundColor: "red"}} class='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container class='content'>
            <Navbar.Brand class='logo' href="#home">Poosha</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className='item' href="#features">ورود</Nav.Link>
                <Nav.Link className='item' href="#pricing">خانه</Nav.Link>
                <NavDropdown className='item' title='دسته بندی' id="collasible-nav-dropdown">
                    <NavDropdown.Item style={{textAlign: "center", fontFamily: 'A Iranian Sans'}} class='drop-item' href="/products/men">مردانه</NavDropdown.Item>
                    <NavDropdown.Item style={{textAlign: "center", fontFamily: 'A Iranian Sans'}} class='drop-item' href="/products/women">زنانه</NavDropdown.Item>
                    <NavDropdown.Item style={{textAlign: "center", fontFamily: 'A Iranian Sans'}} class='drop-item' href="/products/child">بچگانه</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='item' href="#pricing">چرا پوشا؟</Nav.Link>
                <Nav.Link className='item' href="#pricing">گالری</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    
    </>
  )
}

export default NavbarWeb;