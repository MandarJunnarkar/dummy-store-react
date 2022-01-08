import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from 'react-bootstrap'
import './ProductCard.css';

function Products({products, searchTerm}) {

return (
  <Container className="mb-5">
        <Row xs={1} md={3}>
        {products.filter((value)=> value.title.toLowerCase().includes(searchTerm.toLowerCase())).map((values) => {
        return (
          <div key={values.id}>
              <ProductCard
                image={values.image}
                title={values.title}
                price={values.price}
                rate={values.rating.rate}
              />
          </div>
        )})}
        </Row>
    </Container>  
    );
};

export default Products;
