import React from "react";
import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";

export default function Form4({ setFormState }) {
  const onChange = (input) => (e) => {
    setFormState({
      [input]: e.target.value,
    });
  };

  return (
    <div>
      <Row>
        <Col>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Vendor's Name</Form.Label>
              <Form.Control
                type="text"
                id="vname"
                onChange={onChange("vname")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NIC</Form.Label>
              <Form.Control type="text" id="vnic" onChange={onChange("vnic")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Vendor's Address</Form.Label>
              <Form.Control 
                type="text"
                id="vaddress"
                onChange={onChange("vaddress")}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
