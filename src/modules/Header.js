import React from 'react';

import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">EchoTube</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Main</Nav.Link>
                <Nav.Link href="#link">Info</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Cat1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Cat2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Cat3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Cat-Other</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;