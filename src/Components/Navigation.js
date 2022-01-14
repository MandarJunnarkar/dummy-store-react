import React from "react";
import {
  Navbar,
  Form,
  Modal,
  Button,
  ListGroup,
  Row,
  Col,
  CloseButton,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      id="cart-modal"
      onHide={props.onHide}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">MY CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {props.cartproductdata.map((value) => {
            return (
              <ListGroup
                key={value.id}
                style={{ boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)" }}
              >
                <ListGroup.Item>
                  <Row xs={10} md={10}>
                    <Col
                      xs={2}
                      md={2}
                      style={{
                        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div style={{ overflow: "hidden" }}>
                        <img
                          className="d-flex mx-auto"
                          src={value.image}
                          style={{ height: "5rem", width: "inherit" }}
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col xs={7} md={7}>
                      <h6>{value.title}</h6>
                    </Col>
                    <Col xs={2} md={2}>
                      <h6 style={{ color: "green" }}>${value.price}</h6>
                    </Col>
                    <Col xs={1} md={1}>
                      <CloseButton
                        onClick={() => props.handledelete(value.id)}
                      />
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Check Out</Button>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Navigation({ onSearch, searchTerm, cartData, handleDelete }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar bg="dark" className="sticky-top">
        <Navbar.Brand className="text-light ms-auto">DUMMY STORE</Navbar.Brand>
        <Form className="d-flex mx-auto">
          <Form.Control
            className="d-none d-sm-block col-sm-3"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
        </Form>
        <a
          href="#cart-modal"
          className="me-auto"
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => setModalShow(true)}
        >
          <span>
            <i className="bi bi-cart3"></i>
          </span>{" "}
          Cart
        </a>
      </Navbar>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cartproductdata={cartData}
        handledelete={handleDelete}
      />
    </>
  );
}
export default Navigation;
