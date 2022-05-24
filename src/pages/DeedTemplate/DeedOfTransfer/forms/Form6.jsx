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
              <Form.Label>Purchaser's Name</Form.Label>
              <Form.Control
                type="text"
                id="pname"
                onChange={onChange("pname")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NIC</Form.Label>
              <Form.Control type="text" id="pnic" onChange={onChange("pnic")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Purchaser's Address</Form.Label>
              <Form.Control 
                type="text"
                id="c"
                onChange={onChange("paddress")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Legal Details of the deed obtained</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                id="detailsOFDeedObtained"
                onChange={onChange("detailsOFDeedObtained")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Purchase Amount (In Words and Numbers)</Form.Label>
              <Form.Control
                type="text"
                id="pvalue"
                onChange={onChange("pvalue")}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
