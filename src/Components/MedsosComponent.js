import React from 'react'
import { FormGroup } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function MedsosComponent(props) {
    return(
        <>
            <FormGroup>
                <a href="https://twitter.com/drainmyn" target="_blank" rel="noopener noreferrer" className="mr-2 rounded-lg btn btn-dark btn-sm"><FontAwesomeIcon style={{color: '#1DA1F2'}} icon={faTwitter} /></a>
                <a className="text-white text-decoration-none" href="https://twitter.com/drainmyn" target="_blank" rel="noopener noreferrer">Twitter</a>
            </FormGroup>
            <FormGroup>
                <a href="https://instagram.com/indra_myn07" target="_blank" rel="noopener noreferrer" className="mr-2 rounded-lg btn btn-dark btn-sm"><FontAwesomeIcon style={{color: '#e1306c'}} icon={faInstagram} /></a>
                <a className="text-white text-decoration-none" href="https://instagram.com/indra_myn07" target="_blank" rel="noopener noreferrer">Instagram</a>
            </FormGroup>
            <FormGroup>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2 rounded-lg btn btn-dark btn-sm"><FontAwesomeIcon style={{color: '#4267B2'}} icon={faFacebook} /></a>
                <a className="text-white text-decoration-none" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </FormGroup>
            <FormGroup>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mr-2 rounded-lg btn btn-dark btn-sm"><FontAwesomeIcon style={{color: '#FF0000'}} icon={faYoutube} /></a>
                <a className="text-white text-decoration-none" href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
            </FormGroup>
        </>
    )
}

export default MedsosComponent