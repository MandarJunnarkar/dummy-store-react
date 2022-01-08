import React from "react";
import { Navbar, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navigation({onSearch, searchTerm}) {

  return (
    <>
      <Navbar bg="dark" className="sticky-top">
        <Navbar.Brand className="text-light ms-5">DUMMY STORE</Navbar.Brand>
        <Form className="d-flex mx-auto">
          <Form.Control
            className="col col-sm-3"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={ (e) => onSearch(e.target.value)}
          />
        </Form>
        <a
          href="#"
          className="me-5"
          style={{ textDecoration: "none", color: "white" }}
        >
          <span>
            <i className="bi bi-cart3"></i>
          </span>{" "}
          Cart
        </a>
      </Navbar>
    </>
  );
}
export default Navigation;
