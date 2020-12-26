import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CardProductComponent from '../../Components/CardProductComponent'
import Product1 from '../../logo.svg'
import Devfun from '../../Assets/Product/Devfun.svg'

function OurProductSection(props) {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-5 mt-5">
                        <p className="text-center h1">Our Products</p>
                    </Col>
                    <Col xs="12" lg="4" className="mb-3 mb-lg-5">
                        <CardProductComponent name="Soon!" logo={Product1} />
                    </Col>
                    <Col xs="12" lg="4" className="mb-3 mb-lg-5" onClick={() => window.open('https://fun.devdra.com', '_blank')}>
                        <CardProductComponent name="Defvun" logo={Devfun} />
                    </Col>
                    <Col xs="12" lg="4" className="mb-3 mb-lg-5">
                        <CardProductComponent name="Soon!" logo={Product1} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OurProductSection