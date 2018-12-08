import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Modal, Icon, Header } from "semantic-ui-react";
import logo from "../../assets/lorem-logo.png";

class HeaderComponent extends Component {
  /* constructor(props){
    super(props);
    this.state
  } */
  state = { modalOpen: false };
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  render() {
    return <Container as="header" className="header">
        <Link to="/">
          <img src={logo} alt="Logo" height="52px" />
        </Link>

        <Modal trigger={<Button onClick={this.handleOpen}>
              Show Modal
            </Button>} open={this.state.modalOpen} onClose={this.handleClose} basic size="small">
          {authButtons()}
          {/* <Header icon="browser" content="Cookies policy" /> */}
          <Modal.Content>
            <h3>
              This website uses cookies to ensure the best user experience.
            </h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> Got it
            </Button>
          </Modal.Actions>
        </Modal>
        {authButtons()}
      </Container>;
  }
}

const authButtons = () => (
  <Button.Group /* floated="right" */>
    <Button>Registration</Button>
    <Button.Or />
    <Button>Login</Button>
  </Button.Group>
);
export default HeaderComponent;
