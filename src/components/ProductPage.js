import React, { Component } from "react";
import { connect } from "react-redux";
import { STATIC_HOST, API_HOST } from "../config";
import {
  reviewsLoadStart,
  reviewsLoadSucceed,
  reviewsLoadFailed
} from "../redux/actions/reviews";
import { Header, Container, Image } from "semantic-ui-react";
import axios from "axios";
import Reviews from "./Reviews";

class ProductPageComponent extends Component {
  render() {
    const productId = parseInt(this.props.match.params.productId);

    if (isNaN(productId)) {
      throw new Error("`productId` should be a number");
    }

    const product = this.props.products.items.find(
      ({ id }) => id === parseInt(this.props.match.params.productId)
    );
    return (
      <Container>
        {this.props.products.loading ? (
          <div>Loader...</div>
        ) : this.props.products.succeed ? (
          <div>
            <Image src={`${STATIC_HOST}/${product.img}`} centered />
            <Header as="h1" textAlign="center">
              {product.title}
              <Header.Subheader>{product.text}</Header.Subheader>
            </Header>
            <Reviews reviews={this.props.reviews} />
          </div>
        ) : this.props.products.error ? (
          console.error(this.props.products.error)
        ) : (
          <div />
        )}
      </Container>
    );
  }
  componentDidMount() {
    this.loadReviews();
  }
  loadReviews() {
    this.props.reviewsLoadStart();
    axios
      .get(`${API_HOST}/api/reviews/${this.props.match.params.productId}`)
      .then(({ data }) => {
        this.props.reviewsLoadSucceed(data);
      })
      .catch(error => {
        console.error(error);
        this.props.reviewsLoadFailed(error);
      });
  }
}

const mapStateToProps = ({ products, login, reviews }) => ({
  products,
  login,
  reviews
});

const mapDispatchToProps = dispatch => ({
  reviewsLoadStart: () => dispatch(reviewsLoadStart()),
  reviewsLoadSucceed: reviews => dispatch(reviewsLoadSucceed(reviews)),
  reviewsLoadFailed: error => dispatch(reviewsLoadFailed(error))
});

const ProductPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPageComponent);

export default ProductPage;
