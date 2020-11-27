import React from 'react'
import { Row, Col, Card, CardBody, FormGroup } from 'reactstrap'
import Illustration from '../Assets/construction.svg'

function CardConstructionComponent(props) {
    return(
        <>
            <Card>
                <CardBody>
                    <Row>
                        <Col xs="12" lg="12">
                            <FormGroup className="text-center">
                                <h1>Under Construction</h1>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{size: 6, offset: 3}} lg={{size: 6, offset: 3}}>
                            <FormGroup className="text-center">
                                <img src={Illustration} className="img-fluid"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default CardConstructionComponent