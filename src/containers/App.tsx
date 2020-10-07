import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../components/hoc/asyncComponent'
import Layout from './Layout'
import Home from './Home'

function App(props:any) {
    // const asyncOrders = asyncComponent(() => {
    //     return import('./Orders')
    // })

    // const asyncBurgerBuilder = asyncComponent(() => {
    //     return import('./BurgerBuilder')
    // })
    // const asyncCheckout = asyncComponent(() => {
    //     return import('../containers/Checkout')
    // })
    const asyncAuth = asyncComponent(() => {
        //return import('../containers/Auth')
    })

    const asyncLogin = asyncComponent(() => {
        return import('../components/auth/Login')
    })
    
    const asyncRegister = asyncComponent(() => {
        return import('../components/auth/Signup')
    })

    const asyncAboutUs = asyncComponent(() => {
        return import('./AboutUs')
    })

    
    let AuthGuard = (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Auth/login' component={asyncLogin} />
            <Route path='/Auth/register' component={asyncRegister} />
            <Route path='/about-us' component={asyncAboutUs} />
            <Redirect to='/' />
        </Switch>
    )
    if (props.auth) {
        AuthGuard = (
            <Switch>
                <Route path='/Auth/login' component={asyncAuth} />
                <Route path='/Auth/register' component={asyncAuth} />
                {/* <Route path='/' exact component={BurgerBuilder} />
                <Route path='/Checkout' component={asyncCheckout} />
                <Route path='/Orders' component={asyncOrders} /> */}
                <Redirect to='/' />
            </Switch>
        )
    }
    return (
        <>
            <Layout>{AuthGuard}</Layout>
        </>
    )
}

export default App
