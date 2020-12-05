import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavbarPartial from './Partials/NavbarPartial'
import HomePage from './Pages/HomePage'
import FooterPartial from './Partials/FooterPartial'
import NotFoundPage from './Pages/NotFoundPage'
import PrivacyPage from './Pages/PrivacyPage'
import DisclaimerPage from './Pages/DisclaimerPage'
import TermsPage from './Pages/TermsPage'

function App(props) {
    return(
        <>
            <Router>
                <NavbarPartial />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path='/privacy-policy' component={PrivacyPage} />
                    <Route path='/disclaimer' component={DisclaimerPage} />
                    <Route path='/terms' component={TermsPage} />
                    <Route component={NotFoundPage} />
                </Switch>
                <FooterPartial />
            </Router>
        </>
    )
}

export default App