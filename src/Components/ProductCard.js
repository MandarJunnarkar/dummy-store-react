import React from "react";
import { Button, Card, Col, } from "react-bootstrap";

function ProductCard(props) {
  return (

    <Col className="mt-5">
    <Card style={{height: '32rem'}}>
      <div style={{height: '10rem', width: 'auto', zIndex:'1'}} className="align-self-center p-2 card-image"> 
      <Card.Img variant="top" style={{height: '10rem', width: 'inherit'}} src={props.image} />
      </div>
      <Card.Body style={{zIndex:'1'}}>
        <Card.Title style={{fontWeight: 'lighter',fontFamily: 'cursive',color:'white', marginTop:'100px'}}>{props.title}</Card.Title>
        <Card.Text style={{color:'lightgrey'}}>
          <strong>Price</strong>: $<span style={{color: 'green', fontWeight:'bold'}}>{props.price}</span> <br />
          <strong>Rating</strong>: {props.rate}/5
        </Card.Text>
      </Card.Body>
      <Button className="btn-md mb-3 col-10 mx-auto" >Add to Cart</Button>
    </Card>
  </Col>
  );
}

export default ProductCard;
