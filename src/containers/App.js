import React, { useEffect } from 'react'
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    withRouter,
} from 'react-router-dom'
import {connect} from 'react-redux'

import * as actions from '../store/actions/burgerIndex'
import asyncComponent from '../main/hoc/asyncComponent'
import Layout from './Layout'
import Home from './Home'
import AdminLayout from '../layouts/Admin'

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
                render={(props) => (
                    <AsyncLogin {...props}  />
                )}
            />
            <Route
                path='/Auth/signup'
                render={(props) => (
                    <AsyncSignup {...props} />
                )}
            />

            <Route path='/about-us' component={AsyncAboutUs} />
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

                <Route
                    path='/admin'
                    render={(props) => <AdminLayout {...props} />}
                />
                <Redirect to='/' />
            </Switch>
        )
    }

    return (
        <>
            <Layout isAdmin={location}>{AuthGuard}</Layout>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log('state', state)
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
