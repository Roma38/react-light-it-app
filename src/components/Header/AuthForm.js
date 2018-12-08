import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import axios from "axios";
import { API_HOST } from "../../config";
import {
  authRequested,
  authSucceed,
  authFailed,
  logOut
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
    console.log(this);
    this.authRequest(this.state.userName, this.state.password);
    this.setState({ email: "", name: "" });
  };

  authRequest(username, password) {
    this.props.authRequested(username, password); //Нужно ли передавать аргументы? Вряд-ли...
    axios
      .post(`${API_HOST}api/register/`, { username, password })
      .then(({ data }) => {
        console.log(data);
        data.succes
          ? this.props.authSucceed(username, data.token)
          : this.props.authFailed(data.message);
      })
      .catch(error => {
        this.props.authFailed(error);
        throw new Error(error);
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
  authFailed: error => dispatch(authFailed(error)),
  logOut: () => dispatch(logOut())
});

const AuthForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthFormComponent);

export default AuthForm;
