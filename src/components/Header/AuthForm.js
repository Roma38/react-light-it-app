import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import axios from "axios";
import { API_HOST } from "../../config";
import {
  authRequested,
  authSucceed,
  authFailed
} from "../../redux/actions/auth";

class AuthFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    this.authRequest(
      this.state.userName,
      this.state.password,
      this.props.authMode
    );
    this.props.closeModal();
  };

  authRequest(username, password, authMode) {
    this.props.authRequested(username, password); //Нужно ли передавать аргументы? Вряд-ли...
    axios
      .post(`${API_HOST}api/${authMode}/`, { username, password })
      .then(({ data }) => {
        console.log(data);
        if (data.success) {
          this.props.authSucceed(username, data.token);
          localStorage.setItem(`token`, data.token);
          this.props.openPopup(true, username);
        } else {
          this.props.authFailed(data.message);
          this.props.openPopup(false, data.message);
        }
      })
      .catch(error => {
        this.props.authFailed(error);
        this.props.openPopup(false, "Server troubles :(");
        console.error(error);
      });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="User name"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
          <Form.Button content="Submit" />
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = ({ auth, products }) => ({ auth, products });

const mapDispatchToProps = dispatch => ({
  authRequested: (userName, password) =>
    dispatch(authRequested(userName, password)),
  authSucceed: (userName, token) => dispatch(authSucceed(userName, token)),
  authFailed: error => dispatch(authFailed(error))
});

const AuthForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthFormComponent);

export default AuthForm;
