import React from 'react'
import { Container, Row, Col, Button, FormGroup } from 'reactstrap'
import Illustration from '../../Assets/Illustrations/main.svg'

function BannerSection(props) {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="6" className="mt-5 mb-5">
                        <div className="mt-5">
                            <FormGroup>
                                <h1>Devdra</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" size="lg" className="mr-2">More</Button>
                                <Button color="primary" size="lg" outline>More</Button>
                            </FormGroup>
                        </div>
                    </Col>
                    <Col xs="12" lg={{size: 4, offset: 1}} className="mt-5 mb-5">
                        <img src={Illustration} className="img-fluid" alt="illustration" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BannerSection