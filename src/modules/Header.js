import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Button,
  Nav,
  Form,
  FormControl,
  NavItem
} from "react-bootstrap";
class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>EchoTube</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/users">
              <NavItem>Users</NavItem>
            </LinkContainer>
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

const mapStateToProps = store => {
  return {
    userData: store.user.userData,
    isLogged: store.user.loggedIn
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: function(task) {
      dispatch(task);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
