import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Modal } from "semantic-ui-react";
import logo from "../../assets/lorem-logo.png";
import AuthButtons from "./AuthButtons";
import AuthForm from "./AuthForm";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, authMode: "" };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(authMode) {
    this.setState({ modalOpen: true, authMode });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }
  render() {
    return (
      <Container as="header" className="page-header">
        <Link to="/">
          <img src={logo} alt="Logo" height="52px" />
        </Link>

        <Modal
          trigger={<AuthButtons toggleModal={this.handleOpen} />}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          closeIcon
          size="small"
        >
          <Modal.Content>
            <h1 className="modal-header">{this.state.authMode}</h1>
            <AuthForm
              authMode={this.state.authMode}
              closeModal={this.handleClose}
            />
          </Modal.Content>
        </Modal>
      </Container>
    );
  }
}

export default HeaderComponent;
