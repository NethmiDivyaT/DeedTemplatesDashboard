import React from 'react';
import Pdf from "react-to-pdf";
import { Row, Col, Container, Card, Button, Form } from 'react-bootstrap'
import "./deedOfTransfer.css"

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div class="deed" ref={ref}>
        <Row>
          <Col>
          <p class="lawyername"> {props.name}</p>
          <p class="lawyerinfo">{props.position}</p>
          <p class="lawyerinfo">{props.address}</p>
          </Col>
          <Col>
          <p class="notaryc"> Notary's Code - {props.ncode}</p>
          <p class="notarydetails"> Duplicates - {props.duplicates}</p>
          <p class="notarydetails"> Judical Division - {props.jdivision}</p>
          <p class="notarydetails"> Local Authority - {props.localAuth}</p>
          <p class="notarydetails"> Divisional Secretariat - {props.divisionals}</p>
          <p class="notarydetails"> Grama Niladari Division - {props.gndivision}</p>
          <p class="notarydetails"> Value - {props.value}</p>
          <p class="notarydetails"> Date - {props.date}</p> 
          <p class="notarydetails"> Number of Lands - {props.noOfLands}</p>
          </Col>
        </Row>
        <br></br>
            <br></br>
            <p class="rdetails"> PRIOR REGISTRATION : { props.pregistration}</p>
            <h2>DEED OF TRANSFER</h2>
            <p> TO ALL To WHOM THESE PRESENT SHALL COME, (holder of National Identity Card No. )</p>
        </div>
      <Pdf targetRef={ref} filename="Deed of gift.pdf">
        {({ toPdf }) => <Button variant="info" onClick={toPdf}>Download as PDF</Button>}
        
      </Pdf>
    </>
  );
}

export default PDF;