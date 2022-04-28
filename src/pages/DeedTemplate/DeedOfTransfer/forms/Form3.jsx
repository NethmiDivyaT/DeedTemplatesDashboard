import React from "react";
import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";

export default function Form3({ setFormState }) {
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
              <Form.Label>Number of Lands</Form.Label>
              <Form.Control
                type="number"
                id="noOfLands"
                onChange={onChange("noOfLands")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prior Registration</Form.Label>
              <Form.Control
                type="textarea"
                id="pregistration"
                onChange={onChange("pregistration")}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
