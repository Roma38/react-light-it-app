import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { API_HOST } from "../config";
import { Card, Container, Image, CardGroup } from "semantic-ui-react";

function ProductListComponent({ products }) {
  return (
    <Container>
      <CardGroup>
        {products.productsLoading ? (
          <div>Loader...</div>
        ) : products.productsLoadFailed ? (
          <div>Oops, something went wrong</div>
        ) : (
          products.products.map((product, index) => (
            <Card key={index} link as={Link} to={`${product.id}`}>
              <Image src={`${API_HOST}static/${product.img}`} />
              <Card.Content>
                <Card.Header>{product.title}</Card.Header>
              </Card.Content>
            </Card>
          ))
        )}
      </CardGroup>
    </Container>
  );
}

const mapStateToProps = ({ products }) => ({ products });

const ProductList = connect(
  mapStateToProps,
  null
)(ProductListComponent);

export default ProductList;
