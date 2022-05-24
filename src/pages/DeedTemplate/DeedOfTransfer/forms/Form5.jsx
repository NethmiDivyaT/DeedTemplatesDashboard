import React from "react";
import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";

export default function Form5({ setFormState }) {
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
              <Form.Label>Propety Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={15}
                id="propdetails"
                onChange={onChange("propdetails")}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
