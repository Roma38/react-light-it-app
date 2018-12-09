import React from "react";
import { Button } from "semantic-ui-react";

function AuthButtons({ toggleModal }) {
  const registerModal = () => toggleModal("register");
  const loginModal = () => toggleModal("login");
  return (
    <Button.Group>
      <Button onClick={registerModal}>Registration</Button>
      <Button.Or />
      <Button onClick={loginModal}>Login</Button>
    </Button.Group>
  );
}

export default AuthButtons;
