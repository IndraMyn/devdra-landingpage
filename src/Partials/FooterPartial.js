import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Jumbotron, Label, FormGroup } from 'reactstrap'
import { faEnvelope, faHeart, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import MedsosComponent from '../Components/MedsosComponent'

function FooterPartial(props) {
    return(
        <>
            <div style={{background: '#1a1b1c'}}>
                <Jumbotron fluid style={{background: '#292b2c'}}>
                    <Container>
                        <Row>
                            <Col xs="12" lg="4" className="mb-3">
                                <p className="h3 text-white">Devdra</p>
                                <hr className="bg-light" />
                                <FormGroup className="text-white">
                                    <address>
                                        <FontAwesomeIcon icon={faMapMarked} /> &nbsp; Cimahi, Jawa Barat, Indonesia 
                                    </address>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-white"><FontAwesomeIcon icon={faEnvelope} /> &nbsp; cs@devdra.com</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-white"><FontAwesomeIcon icon={faPhone} className="fa-rotate-90" /> &nbsp; +62 88809419292</Label>
                                </FormGroup>
                            </Col>
                            <Col xs="6" lg="4" className="mb-3">
                                <Label className="h5 text-white">Follow Us</Label>
                                <hr className="bg-light" />
                                <MedsosComponent />
                            </Col>
                            <Col xs="6" lg="4" className="mb-3">
                                <div className="text-white">
                                    <Label className="h5">Policies</Label>
                                    <hr className="bg-light" />
                                    <li className="mb-3"><Link className="text-white text-decoration-none" to="/privacy-policy">Privacy</Link></li>
                                    <li className="mb-3"><Link className="text-white text-decoration-none" to="/terms">Terms</Link></li>
                                    <li className="mb-3"><Link className="text-white text-decoration-none" to="/disclaimer">Disclaimer</Link></li>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <footer className="text-white text-center" style={{background: '#1a1b1c'}}>
                    <Label className="mb-4">© 2020 <Link to="/" className="text-white text-decoration-none">Devdra</Link>. All Rights Reserved | Made With <FontAwesomeIcon icon={faHeart} style={{color: '#ba0001'}} /></Label>
                </footer>
            </div>
        </>
    )
}

export default FooterPartial