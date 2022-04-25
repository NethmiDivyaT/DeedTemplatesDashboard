import React from 'react'
import { Row, Col, Container, Card, Button, Form } from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";
import PDF from "./deedOfTransferPdf";


class DeedForm extends React.Component {

  state = {
    input: '',
    input1: ''
  };
        
  onChange = input => e => {
  this.setState({
    [input]: e.target.value
  });
  }
  
submitDeed = (e) => {
  if(!this.state.input || !this.state.input1){
    alert('All fields are required!');
    e.preventDefault();
}else{
    this.setState({
        postSubmitted: true
    });
}
}


    downloadTxtFile = () => {
        const name = document.getElementById("name");
        const position = document.getElementById("position");
        const address = document.getElementById("address");
        const input1 = document.getElementById("input1");
            const element = document.createElement("a");
            let data = "\r Name: " + name.value + " \r\n " + "Age: " + input1.value;
            console.log(data); 
          const file = new Blob([data],  
                      {type: 'text/plain;charset=utf-8'});
          element.href = URL.createObjectURL(file);
          element.download = "myFile.doc";
          document.body.appendChild(element);
          element.click();
        }
        render() {
          return (
           <div>
              <Row>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Lawyer Name</Form.Label>
                      <Form.Control type="text" id="lname" onChange={this.onChange('lname')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Lawyer Position</Form.Label>
                      <Form.Control type="text" id="position" onChange={this.onChange('position')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" id="address" onChange={this.onChange('address')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Notary Code</Form.Label>
                      <Form.Control type="text" id="ncode" onChange={this.onChange('ncode')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Duplicates</Form.Label>
                      <Form.Control type="text" id="duplicates" onChange={this.onChange('duplicates')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Judicial Division</Form.Label>
                      <Form.Control type="text" id="jdivision" onChange={this.onChange('jdivision')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Local Authority</Form.Label>
                      <Form.Control type="text" id="localAuth" onChange={this.onChange('localAuth')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Divisional Secretariat</Form.Label>
                      <Form.Control type="text" id="divisionals" onChange={this.onChange('divisionals')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Grama Niladari Division</Form.Label>
                      <Form.Control type="text" id="gndivision" onChange={this.onChange('gndivision')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Value</Form.Label>
                      <Form.Control type="text" id="value" onChange={this.onChange('value')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" id="date" onChange={this.onChange('date')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Number of Lands</Form.Label>
                      <Form.Control type="number" id="noOfLands" onChange={this.onChange('noOfLands')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Prior Registration</Form.Label>
                      <Form.Control type="textarea" id="pregistration" onChange={this.onChange('pregistration')}/>
                    </Form.Group>
                    
                  </Form>
                        {/**<Button variant="success" onClick={this.downloadTxtFile}>Download</Button> */} 
                        {/**<Button variant="info" onClick={this.submitDeed} >Save</Button>*/ }
                </Col>
                <Col>
                  <PDF name={this.state.lname} position={this.state.position} address={this.state.address} ncode={this.state.ncode}
                    duplicates={this.state.duplicates} jdivision={this.state.jdivision} localAuth={this.state.localAuth}
                    divisionals={this.state.divisionals} gndivision={this.state.gndivision} value={this.state.value}
                    date={this.state.date} noOfLands={this.state.noOfLands} pregistration={this.state.pregistration} />
                  <Button variant="success" onClick={this.downloadTxtFile}>Download as MS Word</Button>
                </Col>
              </Row> 
            </div>
          );
         }
       }
export default  DeedForm
