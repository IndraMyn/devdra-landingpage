import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CardContactComponent from '../../Components/CardContactComponent'
import Illustration from '../../Assets/Illustrations/question.svg'

function ContactSection(props) {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="6" className="mt-5 mt-lg-5 mb-5">
                        <p className="h1 text-center mb-2">Any Question?</p>
                        <img src={Illustration} className="img-fluid" />
                    </Col>
                    <Col xs="12" lg="6" className="mt-0 mt-lg-5 mb-5">
                        <CardContactComponent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactSection