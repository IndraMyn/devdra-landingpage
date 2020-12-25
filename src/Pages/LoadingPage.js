import React from 'react'
import Logo from '../logo.png'

function LoadingPage(props) {
    return(
        <>
            <div className="text-center mt-5">
                <img src={Logo} alt="logo" className="loading-logo" />
            </div>
        </>
    )
}

export default LoadingPage