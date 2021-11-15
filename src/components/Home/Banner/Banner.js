import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import bannerImg from '../../../images/banner-img.jpg';
const Banner = () => {
    return (
        <Container fluid>
            <Row className="align-items-center justify-content-center banner">
                <Col md={4} className="order-2 p-md-5 order-md-1">
                    <Fade left duration={2000} distance="40px">
                        <h1>Royel Enfield</h1>
                        <p className="my-4 text-muted pr-md-5">Royal Enfield Classic 350 is a cruiser bike available at a starting price of Rs. </p>
                        <Button
                            className="btn-main"
                            href="#services">
                            Get Started
                        </Button>
                    </Fade>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <Fade right duration={2000} distance="40px">
                        <Image src={bannerImg} className="ml-5 w-50" />
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;