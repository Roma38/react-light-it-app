import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { STATIC_HOST } from "../config";
import { Card, Container, Image, CardGroup } from "semantic-ui-react";

function ProductListComponent({ products }) {
  return (
    <Container>
      <CardGroup>
        {products.loading ? (
          <div>Loader...</div>
        ) : products.error ? (
          <div>Oops, something went wrong</div>
        ) : (
          products.items.map((product, index) => (
            <Card key={index} link as={Link} to={`product/${product.id}`}>
              <Image src={`${STATIC_HOST}/${product.img}`} />
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
