import React, { useState } from "react";
import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

export default function FormMain({ setFormState }) {
  const [step, setStep] = useState(1);
  const reduceStep = () => {
    setStep(step - 1);
  };
  const incrementStep = () => {
    setStep(step + 1);
  };
  return (
    <div>
      {step == 1 ? (
        <Form1 setFormState={setFormState} />
      ) : step == 2 ? (
        <Form2 setFormState={setFormState} />
      ) : (
        <Form3 setFormState={setFormState} />
      )}
      {step > 1 && (
        <Button variant="success" onClick={reduceStep}>
          Back
        </Button>
      )}

      {step < 3 && (
        <Button variant="success" onClick={incrementStep}>
          Next
        </Button>
      )}
    </div>
  );
}
