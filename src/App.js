import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { API_HOST } from "./config";
import "./App.css";
import HeaderComponent from "./components/Header/Header";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage/ProductPage";
import {
  productsLoadStart,
  productsLoadSucceed,
  productsLoadFailed
} from "./redux/actions/products";
import { authSucceed } from "./redux/actions/auth";

//Как проверить не заэкспайрился ли токен?


class AppComponent extends Component {
  render() {
    return (
      <Router className="App">
        <HeaderComponent />
        <main className="main-content">
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:productId" component={ProductPage} />
        </main>
        <Container as="footer" textAlign="right">
          <Link to="/">
            Lorem<span>Ipsum</span>Shop.
          </Link>
        </Container>
      </Router>
    );
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.authSucceed(null, localStorage.getItem("token"));
    }
    this.loadProducts();
  }
  loadProducts() {
    this.props.productsLoadStart();
    axios
      .get(`${API_HOST}api/products/`)
      .then(({ data }) => {
        this.props.productsLoadSucceed(data);
      })
      .catch(error => {
        console.error(error);
        this.props.productsLoadFailed(error);
      });
  }
}

const mapStateToProps = ({ auth, products }) => ({ auth, products });

const mapDispatchToProps = dispatch => ({
  authSucceed: (username, token) => dispatch(authSucceed(username, token)),
  productsLoadStart: () => dispatch(productsLoadStart()),
  productsLoadSucceed: products => dispatch(productsLoadSucceed(products)),
  productsLoadFailed: error => dispatch(productsLoadFailed(error))
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
