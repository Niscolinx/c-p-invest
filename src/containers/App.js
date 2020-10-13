import React, { useState, useEffect, useCallback } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import asyncComponent from '../main/hoc/asyncComponent'
import Layout from './Layout'
import Home from './Home'

import ErrorHandler from '../main/ErrorHandler'
// import FeedPage from './pages/Feed/Feed'
// import SinglePostPage from './pages/Feed/SinglePost/SinglePost'
// import LoginPage from './pages/Auth/Login'
// import SignupPage from './pages/Auth/Signup'

import AdminLayout from '../layouts/Admin'

function App(props) {


    const [state, setState] = useState({
        showBackdrop: false,
        showMobileNav: false,
        isAuth: false,
        token: null,
        userId: null,
        authLoading: false,
        error: null,
    })

    const { isAuth } = state

    const location = useLocation()
    console.log('the location', location.pathname)

    //Also check this
    const logoutHandler = useCallback(() => {
        setState({ ...state, isAuth: false, token: null })
        localStorage.removeItem('token')
        localStorage.removeItem('expiryDate')
        localStorage.removeItem('userId')
    }, [state])

    //Remember to reduce the milliseconds and see whether it works
    const setAutoLogout = useCallback(
        (milliseconds) => {
            setTimeout(() => {
                logoutHandler()
            }, milliseconds)
        },
        [logoutHandler]
    )

    useEffect(() => {
        const token = localStorage.getItem('token')
        const expiryDate = localStorage.getItem('expiryDate')
        if (!token || !expiryDate) {
            return
        }
        if (new Date(expiryDate) <= new Date()) {
            logoutHandler()
            return
        }
        const userId = localStorage.getItem('userId')
        const remainingMilliseconds =
            new Date(expiryDate).getTime() - new Date().getTime()
        setState({ ...state, isAuth: true, token: token, userId: userId })
        setAutoLogout(remainingMilliseconds)
    }, [state, setAutoLogout, logoutHandler])

 

    
    const errorHandler = () => {
        setState({ ...state, error: null })
    }

    ////////////////////////////////Start Here

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
                path='/admin'
                render={(props) => <AdminLayout {...props} />}
            />
            <Route
                path='/Auth/login'
                render={(props) => (
                    <AsyncLogin
                        {...props}
                        loading={state.authLoading}
                    />
                )}
            />
            <Route
                path='/Auth/signup'
                render={(props) => (
                    <AsyncSignup
                        {...props}
                        loading={state.authLoading}
                    />
                )}
            />

            <Route path='/about-us' component={AsyncAboutUs} />
            <Redirect to='/' />
        </Switch>
    )
    if (isAuth) {
        AuthGuard = (
            <Switch>
                <Route path='/Auth/login' component={AsyncLogin} />
                <Route path='/Auth/signup' component={AsyncSignup} />
                {/* <Route path='/' exact component={BurgerBuilder} />
                <Route path='/Checkout' component={asyncCheckout} />
                <Route path='/Orders' component={asyncOrders} /> */}
                <Redirect to='/' />
            </Switch>
        )
    }
 
    return (
        <>
            <ErrorHandler error={state.error} onHandle={errorHandler} />
            <Layout isAdmin={location.pathname}>{AuthGuard}</Layout>
        </>
    )
}

export default App
