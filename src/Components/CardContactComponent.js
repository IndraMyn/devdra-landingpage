import React, { useState } from 'react'
import { Row, Col, Card, CardBody, Label, FormGroup, CustomInput, Form, Input, Button } from 'reactstrap'
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function CardContactComponent(props) {

    const[message, setMessage] = useState('')
    const[via, setVia]         = useState('whatsapp')

    const styleButton = {
        background : via === 'telegram' ? '#0088cc' : '#25d366',
        borderColor : via === 'telegram' ? '#0088cc' : '#25d366'
    } 

    const contactLink = via === 'whatsapp' ? `https://api.whatsapp.com/send?phone=6288809419292&text=${message}` : `https://t.me/IndraMyn07/`

    return(
        <>
            <Card className="border-0 shadow-sm">
                <CardBody>
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><FontAwesomeIcon icon={faEnvelope} />  Email</Label>
                                <p>cs@devdra.com</p>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><FontAwesomeIcon icon={faPhone} className="fa-rotate-90" />  Phone</Label>
                                <p>+62 88809419292</p>
                            </FormGroup>
                        </Col>
                    </Row>
                    <hr />
                    <FormGroup>
                        <Label><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</Label>
                        <p>
                            <a className="text-dark" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=6288809419292">+62 88809419292</a>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <Label><FontAwesomeIcon icon={faTelegram} /> Telegram</Label>
                        <p>
                            <a className="text-dark" target="_blank" rel="noopener noreferrer" href="https://t.me/IndraMyn07">@IndraMyn07</a>
                        </p>
                    </FormGroup>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-3">
                            <CustomInput type="radio" id="whatsapp" name="custom-contact" label={<div className="h5" style={{color: '#25d366'}}><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</div>} size="lg" onChange={e => setVia(e.target.id)} checked={via === 'whatsapp' ? true : false} />
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="radio" id="telegram" name="custom-contact" label={<div className="h5" style={{color: '#0088cc'}}><FontAwesomeIcon icon={faTelegram} /> Telegram</div>} size="lg" onChange={e => setVia(e.target.id)} />
                        </FormGroup>
                    </Form>
                    <FormGroup className="mt-2">
                        <Input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Hello There!" bsSize="lg" />
                    </FormGroup>
                    <FormGroup>
                        <a href={contactLink} target="_blank" rel="noopener noreferrer">
                            <Button style={styleButton} >Send</Button>
                        </a>
                    </FormGroup>
                </CardBody>
            </Card>
        </>
    )
}

export default CardContactComponent