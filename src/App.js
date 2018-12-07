import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { API_HOST } from "./config";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import {
  productsLoadStart,
  productsLoadSucceed,
  productsLoadFailed
} from "./redux/actions/products";

class AppComponent extends Component {
  render() {
    return (
      <Router className="App">
        <Header />
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:productId" component={ProductPage} />
        <Container as="footer" textAlign="right">
          <Link to="/">
            Lorem<span>Ipsum</span>Shop.
          </Link>
        </Container>
      </Router>
    );
  }
  componentDidMount() {
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

/* TODO login переименовать в auth */

const mapStateToProps = ({ login, products }) => ({ login, products });

const mapDispatchToProps = dispatch => ({
  productsLoadStart: () => dispatch(productsLoadStart()),
  productsLoadSucceed: products => dispatch(productsLoadSucceed(products)),
  productsLoadFailed: error => dispatch(productsLoadFailed(error))
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
