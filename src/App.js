import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavbarPartial from './Partials/NavbarPartial'
import FooterPartial from './Partials/FooterPartial'
import LoadingPage from './Pages/LoadingPage'

const HomePage          = lazy(() => import('./Pages/HomePage'))
const PrivacyPage       = lazy(() => import('./Pages/PrivacyPage'))
const DisclaimerPage    = lazy(() => import('./Pages/DisclaimerPage'))
const TermsPage         = lazy(() => import('./Pages/TermsPage'))
const CopyrightPage     = lazy(() => import('./Pages/CopyrightPage'))
const NotFoundPage      = lazy(() => import('./Pages/NotFoundPage'))

function App(props) {
    return(
        <>
            <Router>
                <Suspense fallback={<LoadingPage />}>
                    <NavbarPartial />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path='/privacy-policy' component={PrivacyPage} />
                        <Route path='/disclaimer' component={DisclaimerPage} />
                        <Route path='/terms' component={TermsPage} />
                        <Route path='/copyright' component={CopyrightPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                    <FooterPartial />
                </Suspense>
            </Router>
        </>
    )
}

export default App