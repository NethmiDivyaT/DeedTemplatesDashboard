import React from "react";
import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";

export default function Form2({ setFormState }) {
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Judicial Division</Form.Label>
              <Form.Control
                type="text"
                id="jdivision"
                onChange={onChange("jdivision")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Local Authority</Form.Label>
              <Form.Control
                type="text"
                id="localAuth"
                onChange={onChange("localAuth")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Divisional Secretariat</Form.Label>
              <Form.Control
                type="text"
                id="divisionals"
                onChange={onChange("divisionals")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Grama Niladari Division</Form.Label>
              <Form.Control
                type="text"
                id="gndivision"
                onChange={onChange("gndivision")}
              />
            </Form.Group>
            
          </Form>
        </Col>
      </Row>
    </div>
  );
}
