import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavbarPartial from './Partials/NavbarPartial'
import HomePage from './Pages/HomePage'
import FooterPartial from './Partials/FooterPartial'

function App(props) {
    return(
        <>
            <Router>
                <NavbarPartial />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
                <FooterPartial />
            </Router>
        </>
    )
}

export default App