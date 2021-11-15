import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <Container >
                <Row className="align-items-center justify-content-center banner">
                   
                    <Col md={10} className="mt-4 p-md-5 mt-md-0">
                        <Fade right duration={2000} distance="40px">
                            <p>About Our Company</p>
                            <h3>How We Can Help you</h3>
                            <p className="my-4 text-muted pr-md-5">The Enfield Cycle Company made motorcycles, bicycles, lawnmowers and stationary engines under the name Royal Enfield out of its works based at Redditch, Worcestershire. The legacy of weapons manufacture is reflected in the logo comprising the cannon, and the motto “Made like a gun”. Use of the brand name Royal Enfield was licensed by the Crown in 1890.,</p>
                            <Button
                                className="btn-main"
                                href="#pricing">
                                Learn More
                            </Button>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;