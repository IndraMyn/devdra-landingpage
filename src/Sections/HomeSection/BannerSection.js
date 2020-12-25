import React from 'react'
import { Container, Row, Col, Button, FormGroup } from 'reactstrap'

function BannerSection(props) {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mt-5 mb-5">
                        <div className="banner-illustration">
                            <Row>
                                <Col xs="12" lg="6" className="mt-5">
                                    <FormGroup>
                                        <h1 className="text-center text-lg-left mt-3"><b>Search and find the fun you want with <span style={{color: '#5b5fd9'}}>Devdra</span></b></h1>
                                        <p className="h4 mt-3 text-center text-lg-left" style={{lineHeight: '40px'}}>
                                            The fun way to find and fulfill every pleasure you desire is just here
                                        </p>
                                    </FormGroup>
                                    <FormGroup className="mt-3 text-center text-lg-left">
                                        <a href="#products"><Button color="primary" size="lg" className="mr-2">Find</Button></a>
                                        <a href="#contact"><Button color="primary" size="lg" outline>Contact</Button></a>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BannerSection