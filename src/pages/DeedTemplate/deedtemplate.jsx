import React from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";



const MainLayout = () => {
    return (
        <>
            <div>
            <Container fluid>
                <Row>
                    <Col md={3}>
                    <Card style={{width: '250px'}}>
                        <Card.Img variant="top" src={require('../../assets/images/deed.jpg')} />
                        <Card.Body>
                            <Card.Title>Deed of Transfer</Card.Title>
                            <Card.Text>
                                        A deed of a sale or transfer is a sale and purchase of immovable property.
                                        This deed is drawn up in the form of a deed pool and it is executed by the vendor
                            </Card.Text>
                            <Link to="/deedform" ><Button variant="primary">Use Template</Button></Link>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={3}>
                    <Card style={{width: '250px'}}>
                        <Card.Img variant="top" src={require('../../assets/images/deed.jpg')} />
                        <Card.Body>
                            <Card.Title>Deed of Gift </Card.Title>
                            <Card.Text>
                            Image result for deed of gift sri lanka
                            The Sri Lankan law defines a deed of gift as a contract where the owner of the property (donor)
                            gifts property to another person (donee) with or without conditions.
                            </Card.Text>
                            <Button variant="primary">Use Template</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={3}>
                    <Card style={{width: '250px'}}>
                        <Card.Img variant="top" src={require('../../assets/images/deed.jpg')} />
                        <Card.Body>
                            <Card.Title>Deed of Gift </Card.Title>
                            <Card.Text>
                            Image result for deed of gift sri lanka
                            The Sri Lankan law defines a deed of gift as a contract where the owner of the property (donor)
                            gifts property to another person (donee) with or without conditions.
                            </Card.Text>
                            <Button variant="primary">Use Template</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={3}>
                    <Card style={{width: '250px'}}>
                        <Card.Img variant="top" src={require('../../assets/images/deed.jpg')} />
                        <Card.Body>
                            <Card.Title>Deed of Gift </Card.Title>
                            <Card.Text>
                            What is a deed of gift in Sri Lanka?
                            Image result for deed of gift sri lanka
                            The Sri Lankan law defines a deed of gift as a contract where the owner of the property (donor)
                            gifts property to another person (donee) with or without conditions.
                            </Card.Text>
                            <Button variant="primary">Use Template</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    </Row>
                </Container>
         </div>
        </>
    )
}

export default MainLayout
