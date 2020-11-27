import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CardConstructionComponent from '../Components/CardConstuctionComponent'
import BannerSection from '../Sections/HomeSection/BannerSection'

function HomePage(props) {
    return(
        <>
            <section className="mt-5 mb-5" style={{background: '#7579e7'}}>
                <BannerSection />
            </section>
            <hr />
            <section>
                <Container>
                    <Row>
                        <Col xs="12" lg="12">
                            <CardConstructionComponent />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomePage