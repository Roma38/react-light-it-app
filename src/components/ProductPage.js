import React from "react";
import { connect } from "react-redux";
import { STATIC_HOST } from "../config";
import { Header, Container, Image } from "semantic-ui-react";
import axios from "axios";

function ProductPageComponent({ match, products }) {
  const productId = parseInt(match.params.productId);

  if (isNaN(productId)) {
    throw new Error("`productId` should be a number");
  }

  const product = products.items.find(
    ({ id }) => id === parseInt(match.params.productId)
  );
  console.log(products);
  return (
    <Container>
      {products.loading ? (
        <div>Loader...</div>
      ) : products.succeed ? (
        <div>
          <Image src={`${STATIC_HOST}/${product.img}`} centered />
          <Header as="h1" textAlign="center">
            {product.title}
            <Header.Subheader>{product.text}</Header.Subheader>
          </Header>
        </div>
      ) : products.error ? (
        console.error(products.error)
      ) : (
        <div />
      )}
    </Container>
  );
}

const mapStateToProps = ({ products, login }) => ({ products, login });

const ProductPage = connect(mapStateToProps)(ProductPageComponent);

export default ProductPage;
