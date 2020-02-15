import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import * as actions from "../actions";
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
        <LinkContainer
          style={{
            color: "purple",
            fontWeight: "1"
          }}
          to="/"
        >
          <Navbar.Brand>EchoTube</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer
              style={{ paddingRight: "10px", cursor: "pointer" }}
              to="/"
            >
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer
              style={{ paddingRight: "10px", cursor: "pointer" }}
              to="/users"
            >
              <NavItem>Profile</NavItem>
            </LinkContainer>
            <LinkContainer
              style={{ paddingRight: "10px", cursor: "pointer" }}
              to="/auth"
            >
              <NavItem>Auth</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <a>{this.props.isAuth ? "omegalul" : "hehexd"}</a>
      </Navbar>
    );
  } //Using bootstrap navbar for basic UI example
}

const mapStateToProps = store => {
  return {
    isAuth: store.auth.isAuth
  };
};

export default connect(mapStateToProps, actions)(Header);
