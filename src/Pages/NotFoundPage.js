import React from 'react'
import { Container, Row, Col, Button, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import Illustration from '../Assets/Illustrations/notfound.svg'

function NotFoundPage(props) {
    return(
        <>
            <section className="mt-5">
                <Container>
                    <Row>
                        <Col lg={{size: 4, offset: 4}} xs="12" className="mt-5">
                            <p className="h1 text-center mb-5">404 Not Found!</p>
                            <img src={Illustration} className="img-fluid" alt="illustration" />
                            <FormGroup className="text-center mt-5">
                                <Link to="/"><Button color="primary">Home</Button></Link>
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NotFoundPage