import React from "react";
import { Button, Card, Col } from "react-bootstrap";


const cartDataArray = []

function ProductCard(props) {
 const cartHandler = () =>{
  if (cartDataArray.some(val => val.id === props.id)) {
    // cartDataArray[props.id].quantity += 1;
    console.log(cartDataArray[props.id])
    return
  }
  const cartData = {
      id: props.id,
      image: props.image,
      title: props.title,
      price: props.price,
      quantity: 1
    }
    cartDataArray.push(cartData);
// console.log(cartDataArray);
    props.onGetProductData(cartDataArray);
  }

  return (

    <Col className="mt-5">
    <Card style={{height: '25rem'}}>
      <div style={{height: '10rem', width: 'auto'}} className="align-self-center p-2 card-image"> 
      <Card.Img variant="top" style={{height: '10rem', width: 'inherit'}} src={props.image} />
      </div>
      <Card.Body style={{zIndex:'1'}}>
        <Card.Title style={{fontWeight: 'lighter', fontFamily:'PT sans, sans-serif'}}>{props.title}</Card.Title>
        <Card.Text style={{color:'grey'}}>
          <strong>Price</strong>: <span style={{color: 'green', fontWeight:'bold'}}>$ {props.price}</span> <br />
          <strong>Rating</strong>: {props.rate}/5
        </Card.Text>
      </Card.Body>
      <Button variant="warning" className="btn-md mb-3 col-10 mx-auto" id="add-cart-btn" onClick={cartHandler}>Add to Cart</Button>
    </Card>
  </Col>
  );
}

export default ProductCard;
