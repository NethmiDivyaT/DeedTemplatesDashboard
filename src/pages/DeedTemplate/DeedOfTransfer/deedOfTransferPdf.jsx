import React from 'react';
import Pdf from "react-to-pdf";
import { Row, Col, Container, Card, Button, Form } from 'react-bootstrap'
import "./deedOfTransfer.css"
import { PDFExport } from '@progress/kendo-react-pdf';

const App = (props) => {
  const pdfExportComponent = React.useRef(null);
  return <div>
    <PDFExport paperSize="legal" margin="1.5cm" fileName="Deed of gift.pdf" ref={pdfExportComponent}>
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
      <p class="rdetails"> PRIOR REGISTRATION : {props.pregistration}</p>
      <h2>DEED OF TRANSFER</h2>
      <p> <strong>TO ALL TO WHOM THESE PRESENT SHALL COME, {props.vname} </strong> (holder of National Identity Card No. {props.vnic}) of {props.vaddress}
        in the Democratic Socialist Republic of Sri Lanka (hereinafter called and referred as <strong> "The Vendor" </strong> which term as
        herein used shall where the context so requires or admits mean and include the said, <strong>{props.vname}</strong> her heris executors and administrators).
      </p>
      <br></br>
      <p> <strong>WHEREAS</strong> the said is under and by virtue of deed of transfer {props.propdetails}</p>
      <br></br>
      <p> <strong>AND WHEREAS the said Vendor has agreed with {props.pname} </strong> (holder of National Identity Card No. {props.pnic}) of {props.paddress}
        in the Democratic Socialist Republic of Sri Lanka (hereinafter called and referred as <strong> "The Purchaser" </strong> which term as
        herein used shall where the context so requires or admits mean and include the said, <strong>{props.pname}</strong> her heris executors, administrators, and assigns)
        for the absolute sale and conveyance unto the said Purshaser the said allotment of the land marked  <strong>{props.detailsOFDeedObtained} </strong>
        at or for the price  or sum of {props.pvalue} of lawful money of Sri Lanka.
      </p>
      < p>
        <strong>NOW KNOW YE AND THESE PRESENT WITNESS</strong> that the said Vendor in pursuance of the said agreement and in consideration of the sum of
        {props.pvaue}  of lawful money of Sri Lanka well and truly paid by the said Purchaser to the said Vendor at the execution of these presents (the receipt
        whereof the said Vendor doth hereby expressly admit and acknowledge) doth hereby sell grant convey assign transfer set over and assure unto the said Purchasers the said
        allotment of land marked <strong>{props.detailsOFDeedObtained} </strong> with all the rights ways privileges easement servitudes advantages and appurtenances whatsoever
        to the said land and premises belonging or and anywise appertaining thereto or held or used or enjoyed therewith or reputed or known as part and parcel thereof and all
        estate right title interest property claim and  demand whatsoever of the said Vendor of into upon or out of the same (all of which are hereinafter called and referred
        to as "the land and premises").
      </p>
    </PDFExport>

     <div>
      <Button onClick={() => {
        if (pdfExportComponent.current) {
          pdfExportComponent.current.save();
        }
      }}>
        Export PDF
      </Button>
    </div>
  </div>;

};
export default App;