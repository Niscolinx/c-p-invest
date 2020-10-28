import React, { useEffect } from 'react'
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    withRouter,
} from 'react-router-dom'
import { connect } from 'react-redux'

import WhatsappLivechat from '../images/whatsapp.png'
import * as actions from '../store/actions/burgerIndex'
import asyncComponent from '../main/hoc/asyncComponent'
import Layout from './Layout'
import Home from './Home'
import AdminLayout from '../layouts/Admin'
import Terms from './Terms'
import ContactUs from './ContactUs'
import Faq from './Faq'
import ForgotPassword from './ForgotPassword'
import AboutUs from './AboutUs'
import LoginPage from '../main/auth/Login'
import SignupPage from '../main/auth/Signup'

function App(props) {
    const location = useLocation()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if (token) {
            props.onCheckState(token, userId)
        }
    }, [props])

    const AsyncLogin = asyncComponent(() => {
        return import('../main/auth/Login')
    })

    const AsyncSignup = asyncComponent(() => {
        return import('../main/auth/Signup')
    })

    const AsyncAboutUs = asyncComponent(() => {
        return import('./AboutUs')
    })

    let AuthGuard = (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route
                path='/Auth/login'
                render={(props) => <LoginPage {...props} />}
            />
            <Route
                path='/Auth/signup'
                render={(props) => <SignupPage {...props} />}
            />

            <Route path='/about-us' component={AboutUs} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/faq' component={Faq} />
            <Route path='/terms' component={Terms} />
            <Redirect to='/' />
        </Switch>
    )
    if (props.auth) {
        AuthGuard = (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route
                    path='/Auth/login'
                    render={(props) => <AsyncLogin {...props} />}
                />
                <Route path='/about-us' component={AsyncAboutUs} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/faq' component={Faq} />
                <Route path='/terms' component={Terms} />

                <Route
                    path='/admin'
                    render={(props) => <AdminLayout {...props} />}
                />
                <Redirect to='/' />
            </Switch>
        )
    }

    return (
        <div className='rootApp'>
            <a href='https://wa.me/+12024783100' alt='' target='_blank'>
                <img
                    src={WhatsappLivechat}
                    alt=''
                    className='liveChat__whatsapp'
                />
            </a>
            <Layout isAdmin={location}>{AuthGuard}</Layout>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.tokenId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckState: (tokenId, userId) =>
            dispatch(actions.authSuccess(tokenId, userId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
