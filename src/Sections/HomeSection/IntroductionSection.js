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
                        <h1 className="text-center">What is Devdra?</h1>
                    </Col>
                    <Col xs="12" lg="12 mb-5">
                        <Row>
                            <Col xs="12" lg="12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </Col>
                            <Col xs={{size: 6, offset: 3}} lg={{size: 4, offset: 2}} className="mb-0 mb-lg-5">
                                <img src={Products} alt="product" className="img-fluid" />
                            </Col>
                            <Col xs="12" lg={{size: 4}} className="mt-5">
                                <div className="bl-primary">
                                    <p className="mt-0 mt-lg-5 text-center text-lg-left ml-2">
                                        Various interesting products made wholeheartedly just for you and of course to meet all your needs
                                    </p>
                                </div>
                            </Col>

                            <Col xs={{size: 6, offset: 3}} lg={{size: 4, offset: 2}} className="mb-0 mb-lg-5">
                                <img src={Devices} alt="device" className="img-fluid" />
                            </Col>
                            <Col xs="12" lg={{size: 4}} className="mt-5">
                                <div className="bl-primary">
                                    <p className="mt-0 mt-lg-0 text-center text-lg-left ml-2">
                                        The products we make can be accessed on all existing platforms and devices
                                    </p>
                                </div>
                            </Col>

                            <Col xs={{size: 6, offset: 3}} lg={{size: 4, offset: 2}} className="mb-0 mb-lg-5">
                                <img src={Features} alt="product" className="img-fluid" />
                            </Col>
                            <Col xs="12" lg={{size: 4}} className="mt-5">
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