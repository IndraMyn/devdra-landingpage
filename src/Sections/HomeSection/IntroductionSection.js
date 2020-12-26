import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Products from '../../Assets/Illustrations/products.svg'
import Devices from '../../Assets/Illustrations/devices.svg'
import Features from '../../Assets/Illustrations/features.svg'

function IntroductionSection(props) {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-5 mt-5">
                        <h1 className="text-center">Why Devdra?</h1>
                    </Col>
                    <Col xs="12" lg="12 mb-5">
                        <Row>
                            <Col xs="12" lg="12" className="mb-3">
                                <p className="text-left"><span className="mr-4 mr-lg-4"></span>Devdra is a digital platform that is developed to the maximum extent possible to make quality products that can compete in the market and of course are made specifically to serve all your needs. The various features and conveniences that we provide so that you are comfortable using the products we make. </p>
                            </Col>

                            <Col xs={{size: 6, offset: 3}} lg={{size: 4, offset: 2}} className="mb-0 mb-lg-5">
                                <img src={Products} alt="product" className="img-fluid" />
                            </Col>
                            <Col xs="12" lg={{size: 4}} className="mt-3 mt-lg-5 mb-5 mb-lg-0">
                                <div className="bl-primary">
                                    <p className="mt-0 mt-lg-5 text-center text-lg-left ml-2">
                                        Various interesting products made wholeheartedly just for you and of course to meet all your needs
                                    </p>
                                </div>
                            </Col>

                            <Col xs={{size: 6, offset: 3}} lg={{size: 4, offset: 2}} className="mb-0 mb-lg-5">
                                <img src={Devices} alt="device" className="img-fluid" />
                            </Col>
                            <Col xs="12" lg={{size: 4}} className="mt-3 mt-lg-5 mb-5 mb-lg-0">
                                <div className="bl-primary">
                                    <p className="mt-0 mt-lg-0 text-center text-lg-left ml-2">
                                        The products we make can be accessed on all existing platforms and devices
                                    </p>
                                </div>
                            </Col>

                            <Col xs={{size: 6, offset: 3}} lg={{size: 4, offset: 2}} className="mb-0 mb-lg-5">
                                <img src={Features} alt="product" className="img-fluid" />
                            </Col>
                            <Col xs="12" lg={{size: 4}} className="mt-3 mt-lg-5 mb-5 mb-lg-0">
                                <div className="bl-primary">
                                    <p className="mt-0 mt-lg-0 text-center text-lg-left ml-2">
                                        Cool features that we deliberately prepare so that you are more comfortable using our products
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IntroductionSection