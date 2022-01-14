import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
import "./ProductCard.css";

function Products({ products, searchTerm, onGetItemData }) {
  const onGetProductData = (data) => {
    const cartData = [...data];
    onGetItemData(cartData);
  };

  return (
    <Container className="mb-5">
      <Row xs={1} md={2} lg={3}>
        {products
          .filter((value) =>
            value.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((values) => {
            return (
              <div key={values.id}>
                <ProductCard
                  onGetProductData={onGetProductData}
                  id={values.id}
                  image={values.image}
                  title={values.title}
                  price={values.price}
                  rate={values.rating.rate}
                />
              </div>
            );
          })}
      </Row>
    </Container>
  );
}

export default Products;
