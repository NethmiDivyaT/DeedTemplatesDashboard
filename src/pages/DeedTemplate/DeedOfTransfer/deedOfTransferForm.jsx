import React from "react";
import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";
import PDF from "./deedOfTransferPdf";
import FormMain from "./forms/FormMain";

class DeedForm extends React.Component {
  state = {
    input: "",
    input1: "",
  };

  onChange = (data) => {
    this.setState(data);
  };

  submitDeed = (e) => {
    if (!this.state.input || !this.state.input1) {
      alert("All fields are required!");
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };

  /*downloadTxtFile = () => {
    const name = document.getElementById("name");
    const position = document.getElementById("position");
    const address = document.getElementById("address");
    const input1 = document.getElementById("input1");
    const element = document.createElement("a");
    let data = "\r Name: " + name.value + " \r\n " + "Age: " + input1.value;
    console.log(data);
    const file = new Blob([data], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.doc";
    document.body.appendChild(element);
    element.click();
  };*/
  render() {
    return (
      <div>
        <Row>
          <Col>
            <FormMain setFormState={this.onChange} />
            {/**<Button variant="success" onClick={this.downloadTxtFile}>Download</Button> */}
            {/**<Button variant="info" onClick={this.submitDeed} >Save</Button>*/}
          </Col>
          <Col>
            <PDF
              name={this.state.lname}
              position={this.state.position}
              address={this.state.address}
              ncode={this.state.ncode}
              duplicates={this.state.duplicates}
              jdivision={this.state.jdivision}
              localAuth={this.state.localAuth}
              divisionals={this.state.divisionals}
              gndivision={this.state.gndivision}
              value={this.state.value}
              date={this.state.date}
              noOfLands={this.state.noOfLands}
              pregistration={this.state.pregistration}
              vname={this.state.vname}
              vnic={this.state.vnic}
              vaddress={this.state.vaddress}
              propdetails={this.state.propdetails}
              pname={this.state.pregistration}
              paddress={this.state.paddress}
              detailsOFDeedObtained={this.state.detailsOFDeedObtained}
              pvalue={this.state.pvalue}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default DeedForm;
