import React, { useState, useEffect, useCallback } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../components/hoc/asyncComponent'
import Layout from './Layout'
import Home from './Home'


import ErrorHandler from '../components/ErrorHandler'
// import FeedPage from './pages/Feed/Feed'
// import SinglePostPage from './pages/Feed/SinglePost/SinglePost'
// import LoginPage from './pages/Auth/Login'
// import SignupPage from './pages/Auth/Signup'

function App(props: any) {

    interface IState {
        showBackdrop: boolean,
        showMobileNav: boolean,
        isAuth: boolean,
        token: null | string,
        userId: null | string,
        authLoading: boolean,
        error: null | string,
    }
    

     const [state, setState] = useState<IState>({
        showBackdrop: false,
        showMobileNav: false,
        isAuth: false,
        token: null,
        userId: null,
        authLoading: false,
        error: null,
    })


    const {isAuth} = state

    //Also check this
    const logoutHandler = useCallback(() => {
        setState({ ...state, isAuth: false, token: null })
        localStorage.removeItem('token')
        localStorage.removeItem('expiryDate')
        localStorage.removeItem('userId')
    }, [state])

    //Remember to reduce the milliseconds and see whether it works
    const setAutoLogout = useCallback(
        (milliseconds: number) => {
            setTimeout(() => {
                logoutHandler()
            }, milliseconds)
        }, [logoutHandler]
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
            setState({...state, isAuth: true, token: token, userId: userId })
        setAutoLogout(remainingMilliseconds)
    }, [state, setAutoLogout, logoutHandler])
    


    const loginHandler = (e:React.ChangeEvent<HTMLInputElement>, authData:any) => {
        e.preventDefault()
        console.log('the login handler', authData)
        setState({ ...state,  authLoading: true })
        const graphqlQuery = {
            query: `{
                login(email: "${authData.email}", password: "${authData.password}"){
                userId
                token
            }
          }
         `,
        }

        fetch('https://mynode-blog.herokuapp.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors && resData.errors[0].statusCode === 422) {
                    throw new Error(
                        'Validation failed. Please make sure your input values are correct'
                    )
                }
                if (resData.errors) {
                    throw new Error('Login failed!')
                }
                setState({
                    ...state,
                    isAuth: true,
                    token: resData.data.login.token,
                    authLoading: false,
                    userId: resData.data.login.userId,
                })
                localStorage.setItem('token', resData.data.login.token)
                localStorage.setItem('userId', resData.data.login.userId)
                const remainingMilliseconds = 60 * 60 * 1000
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                )
                localStorage.setItem('expiryDate', expiryDate.toISOString())
                setAutoLogout(remainingMilliseconds)
            })
            .catch((err) => {
                console.log(err)
                setState({
                    ...state,
                    isAuth: false,
                    authLoading: false,
                    error: err,
                })
            })
    }

    const signupHandler = (e: React.ChangeEvent<HTMLInputElement>, authData:any) => {
        console.log('the signup handler', authData)
        e.preventDefault()
        setState({...state, authLoading: true })

        const graphqlQuery = {
            query: ` mutation { createUser(userData: {
            username: "${authData.signupForm.username.value}",
            email: "${authData.signupForm.email.value}",
            password: "${authData.signupForm.password.value}"
           }) {  email }
         }`,
        }

        fetch('https://mynode-blog.herokuapp.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => {
                console.log('the res signup', res)
                return res.json()
            })
            .then((resData) => {
                console.log('new user', resData)
                if (resData.errors && resData.errors[0].statusCode === 422) {
                    throw new Error(
                        'Validation failed. Please make sure your input values are correct'
                    )
                }
                if (resData.errors) {
                    throw new Error('Creating a user failed!')
                }
                setState({...state, isAuth: false, authLoading: false })
                props.history.replace('/')
            })
            .catch((err) => {
                console.log(err)
                setState({...state,
                    isAuth: false,
                    authLoading: false,
                    error: err,
                })
            })
    }

   

    const errorHandler = () => {
        setState({...state, error: null })
    }
    
    ////////////////////////////////Start Here

    const AsyncLogin = asyncComponent(() => {
        return import('../components/auth/Login')
    })

    const AsyncSignup = asyncComponent(() => {
        return import('../components/auth/Signup')
    })

    const AsyncAboutUs = asyncComponent(() => {
        return import('./AboutUs')
    })

    const AsyncAccount = asyncComponent(() => {
        return import('./Account')
    })

    let AuthGuard = (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Auth/login' render={(props:any) => (
                <AsyncLogin
                    {...props}
                    onLogin={loginHandler}
                    loading={state.authLoading}
                />
            )} />
            <Route path='/Auth/signup' render={(props:any) => (
                <AsyncSignup
                    {...props}
                    onSignup={signupHandler}
                    loading={state.authLoading}
                />
            )} />
            <Route path='/Auth/account' render={(props:any) => (
                <AsyncAccount {...props}/>
            )} />
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
            <ErrorHandler
                error={state.error}
                onHandle={errorHandler}
            />
            <Layout>{AuthGuard}</Layout>
        </>
    )
}

export default App

