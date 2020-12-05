import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function IntroductionSection(props) {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12">
                        <h1 className="text-center">What is Devdra?</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IntroductionSection