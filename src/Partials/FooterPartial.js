import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Jumbotron, Label, FormGroup } from 'reactstrap'
import { faFacebook, faInstagram, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faMapMarked } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function FooterPartial(props) {
    return(
        <>
            <div style={{background: '#1a1b1c'}} className="mt-5">
                <Jumbotron fluid style={{background: '#292b2c'}}>
                    <Container>
                        <Row>
                            <Col xs="12" lg="4" className="mb-3">
                                <p className="h3 text-white">Devdra</p>
                                <hr />
                                <FormGroup className="text-white">
                                    <address>
                                        <FontAwesomeIcon icon={faMapMarked} /> &nbsp; Cimahi, Jawa Barat, Indonesia 
                                    </address>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <a href="https://api.whatsapp.com/send?phone=6288809419292" target="_blank" rel="noopener noreferrer" className="mr-2 btn btn-dark"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                    <a href="https://twitter.com/drainmyn" target="_blank" rel="noopener noreferrer" className="mr-2 btn btn-dark"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="https://instagram.com/indra_myn07" target="_blank" rel="noopener noreferrer" className="mr-2 btn btn-dark"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2 btn btn-dark"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="https://t.me/IndraMyn07" target="_blank" rel="noopener noreferrer" className="mr-2 btn btn-dark"><FontAwesomeIcon icon={faTelegram} /></a>
                                </FormGroup>
                            </Col>
                            <Col xs="6" lg="4" className="mb-3">
                                <div className="text-white">
                                    <Label className="h5">Policies</Label>
                                    <li><Link className="text-white text-decoration-none" to="/privacy-policy">Privacy</Link></li>
                                    <li><Link className="text-white text-decoration-none" to="/terms">Terms</Link></li>
                                    <li><Link className="text-white text-decoration-none" to="/disclaimer">Disclaimer</Link></li>
                                </div>
                            </Col>
                            <Col xs="6" lg="4" className="mb-3">
                                <div className="text-white">
                                    <Label className="h5">Contact</Label>
                                    <li>Privacy</li>
                                    <li>Terms</li>
                                    <li>Disclaimer</li>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <footer className="text-white text-center" style={{background: '#1a1b1c'}}>
                    <Label className="mb-4">© 2020 Devdra. All Rights Reserved | Made With <FontAwesomeIcon icon={faHeart} style={{color: '#ba0001'}} /></Label>
                </footer>
            </div>
        </>
    )
}

export default FooterPartial