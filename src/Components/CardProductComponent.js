import React from 'react'
import { Card, CardBody, Label, Row, Col } from 'reactstrap'

function CardProductComponent(props) {

    const { name, logo } = props

    return(
        <>
            <Card className="card-effect border-0" style={{cursor: 'pointer', borderRadius: '10px'}}>
                <CardBody>
                    <Row>
                        <Col xs="12" className="text-center mb-4">
                            <Label className="h4">{name}</Label>
                        </Col>
                        <Col xs={{size: 6, offset: 3}}>
                            <img src={logo} className="img-fluid" alt="logo" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default CardProductComponent