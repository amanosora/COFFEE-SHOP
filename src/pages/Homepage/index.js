import React, { useState } from 'react'; // 确保导入 useState
import "./style.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import coffee1 from './coffee cup1.png';
import coffee2 from './service1.jpg';
import coffee3 from './service2.jpg';
import coffee4 from './service3.jpg';
import coffee5 from './service4.jpg';
import coffee6 from './coffee cup2.png';
import Faq from '../../components/Faq';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const AboutChange = (page) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('submitted successfully!');
    };

    return (
        <Container fluid id="coffee" className="px-3 px-md-5 body">
            <Row className="sec1 mb-5">
                <Col xs={12} md={6} className="text-center text-md-start">
                    <h1>COFFEE</h1>
                    <h3>SERVICE FOR OFFICE BREAKDOWNS</h3>
                    <p>Order Your Coffee</p>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={coffee1} className="cup1" fluid />
                </Col>
            </Row>

            <div class="sec2">
                <h1>OUR SERVICE</h1>
                <div class="container">
                    <div>
                        <Image src={coffee2} className="cup1" />
                        <h4>Service Name</h4>
                        <i class="bi bi-arrow-right-square"></i>
                    </div>
                    <div>
                        <Image src={coffee3} className="cup1" />
                        <h4>Service Name</h4>
                        <i class="bi bi-arrow-right-square"></i>
                    </div>
                    <div>
                        <Image src={coffee4} className="cup1" />
                        <h4>Service Name</h4>
                        <i class="bi bi-arrow-right-square"></i>
                    </div>
                    <div>
                        <Image src={coffee5} className="cup1" />
                        <h4>Service Name</h4>
                        <i class="bi bi-arrow-right-square"></i>
                    </div>
                </div>
            </div>

            <Row className="sec3 mb-5">
                <Col xs={12} md={6} className="text-center">
                    <Image src={coffee6} className="cup1" fluid />
                </Col>
                <Col xs={12} md={6}>
                    <h1>ABOUT US</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur officia, eius consequatur sunt aliquid laudantium ipsum quibusdam ex fuga ab sit temporibus quam eos debitis earum doloribus veritatis doloremque ullam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit....
                    </p>

                    <Link to={`/about/`} className="text-decoration-none">
                        <button className="btn-1" onClick={() => AboutChange('/about')}>Read More</button>
                    </Link>
                </Col>
            </Row>

            <Row className="sec4 mb-5">
                <Col xs={12} className="text-center">
                    <h1>COMMON CUSTOMER QUESTIONS</h1>
                    <div className="sec4div">
                        <Faq />
                    </div>
                </Col>
            </Row>

            <Row className="sec5 mb-5" id="contact-us">
                <Col xs={12} md={6}>
                    <h3>EMAIL:</h3>
                    <p>XXXXXXX@gmail.com</p>
                    <h3>PHONE:</h3>
                    <p>0123456789</p>
                    <h3>ADDRESS:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>
                <Col xs={12} md={6}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" className="form-control mb-3" />
                        <input type="text" placeholder="User Name" className="form-control mb-3" />
                        <input type="email" placeholder="Email" className="form-control mb-3" />
                        <input type="password" placeholder="Password" className="form-control mb-3" />
                        <button type="submit" className="btn-1">Submit Form</button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
export default Homepage;