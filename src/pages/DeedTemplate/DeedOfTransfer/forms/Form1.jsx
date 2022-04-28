import React from "react";
import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";

export default function Form1({ setFormState }) {
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
              <Form.Label>Lawyer Name</Form.Label>
              <Form.Control
                type="text"
                id="lname"
                onChange={onChange("lname")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lawyer Position</Form.Label>
              <Form.Control
                type="text"
                id="position"
                onChange={onChange("position")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                id="address"
                onChange={onChange("address")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Notary Code</Form.Label>
              <Form.Control
                type="text"
                id="ncode"
                onChange={onChange("ncode")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Duplicates</Form.Label>
              <Form.Control
                type="text"
                id="duplicates"
                onChange={onChange("duplicates")}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
