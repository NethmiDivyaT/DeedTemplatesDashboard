import React from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Deedimg } from '../assets/images/deed.jpg'
import { Outlet, Link } from "react-router-dom";
import '../home/home.css'

const MainLayout = () => {
    return (
        <>
        <Row>
        <Col>
        <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={require('../../assets/images/front1.jpg')} alt="Avatar" class="card"/>
            </div>
            <div class="flip-card-back">
            <h1>Generate Digital Deeds</h1> 
            <p>Generate digital deeds bu including details into form.</p> 
        </div>  
        </div>  
        </div>           
        </Col>
        <Col>
        <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={require('../../assets/images/front2.jpg')} alt="Avatar" class="card"/>
            </div>
            <div class="flip-card-back">
            <h1>Text Editor for Customize Templates </h1> 
            <p>Generate customize deed templated using text editor.</p> 
        </div>  
        </div>  
        </div> 
        </Col>   
        </Row><div class ='card2'></div>
        <Row>              
        <Col className='card1'>
        <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={require('../../assets/images/front3.png')} alt="Avatar" class="card"/>
            </div>
            <div class="flip-card-back">
            <h1>Download Deeds</h1> 
            <p>Download deeds as a PDF for further reference.</p> 
        </div>  
        </div>  
        </div>   
        </Col>
        <Col className='card1'>
        <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={require('../../assets/images/front4.jpg')} alt="Avatar" class="card"/>
            </div>
            <div class="flip-card-back">
            <h1>Language translation</h1> 
            <p>Translate deeds into Sinhala, Tamil, or English.</p> 
        </div>  
        </div>  
        </div>   
        </Col>
        </Row>  
        </>
    )
}

export default MainLayout
