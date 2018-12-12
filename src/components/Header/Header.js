import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Modal, Popup, Button } from "semantic-ui-react";
import logo from "../../assets/lorem-logo.png";
import AuthButtons from "./AuthButtons";
import AuthForm from "./AuthForm";
import { logOut } from "../../redux/actions/auth";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      authMode: "",
      isPopupOpen: false,
      popupMessage: ""
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handlePopupOpen = this.handlePopupOpen.bind(this);
  }

  handleModalOpen(authMode) {
    this.setState({ modalOpen: true, authMode });
  }

  handleModalClose() {
    this.setState({ modalOpen: false });
  }

  handlePopupOpen(isLoginSucceed, payload) {
    isLoginSucceed
      ? this.setState({
          popupMessage: `You was successfully logged in as ${payload}`
        })
      : this.setState({
          popupMessage: `Login was failed. ${payload}`
        });
    this.setState({ isPopupOpen: true });
    setTimeout(() => {
      this.setState({ isPopupOpen: false });
    }, 3500);
  }

  handleRef = node => this.setState({ node });

  render() {
    return (
      <Container as="header" className="page-header">
        <Link to="/">
          <img src={logo} alt="Logo" height="52px" />
        </Link>
        {this.props.auth.loggedIn ? (
          <Button className="auth-buttons" onClick={this.props.logOut}>
            Log out
          </Button>
        ) : (
          <AuthButtons toggleModal={this.handleModalOpen} />
        )}
        <div ref={this.handleRef} /> {/* Target for Popup */}
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
          basic
          closeIcon
          size="small"
        >
          <Modal.Content>
            <h1 className="modal-header">{this.state.authMode}</h1>
            <AuthForm
              authMode={this.state.authMode}
              closeModal={this.handleModalClose}
              openPopup={this.handlePopupOpen}
            />
          </Modal.Content>
        </Modal>
        <Popup
          content={this.state.popupMessage}
          open={this.state.isPopupOpen}
          onOpen={this.handlePopupOpen}
          position="bottom right"
          context={this.state.node}
          inverted
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

const HeaderComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderComponent;
