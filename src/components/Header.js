import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src="lorem-logo.png" alt="Logo" height="52px" />
      </Link>
      <Button.Group floated="right">
        <Button>Registration</Button>
        <Button.Or />
        <Button>Login</Button>
      </Button.Group>
    </Container>
  );
}

export default Header;
