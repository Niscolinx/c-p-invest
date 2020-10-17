import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as orderAction from '../../store/actions/burgerIndex'

import Button from '../Button'
import Input from '../Input'

import { required, length, email } from '../../util/validators'
import Auth from './Auth'

const Login = (props) => {
    const [state, setState] = useState({
        loginForm: {
            email: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, email],
            },
            password: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            formIsValid: false,
        },
    })

    const [message, setMessage] = useState(null)


    const inputChangeHandler = (input, value) => {
        setState((prevState) => {
            let isValid = true
            for (const validator of prevState.loginForm[input].validators) {
                isValid = isValid && validator(value)
            }

            const updatedForm = {
                ...prevState.loginForm,
                [input]: {
                    ...prevState.loginForm[input],
                    valid: isValid,
                    value: value,
                    touched: true
                },
            }
            let formIsValid = true
            for (const inputName in updatedForm) {

            console.log('loop formvalid', inputName)
                if (
                    inputName !== 'formIsValid' &&
                    inputName !== '[object Object]'
                    ) {
                 
                }        
               }
            return {
                loginForm: updatedForm,
                formIsValid: formIsValid,
            }
        })
    }

    const inputBlurHandler = (input) => {
        
    }

    const handleLogin = e => {
        e.preventDefault()
         if (state.formIsValid) {
             console.log('Valid form')
             setMessage({
                 success: 'Success',
             })
             props.onInitLogin(state.loginForm.email.value, state.loginForm.password.value)
         } else {
             console.log('invalid form')
             setMessage({ error: 'Wrong Input, please check your entries' })
         }
        
    }

    return (
        <Auth login message={message}>
            <form onSubmit={handleLogin}>
                <Input
                    id='email'
                    label='E-Mail'
                    type='email'
                    control='input'
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler.bind('email')}
                    value={state.loginForm['email'].value}
                    valid={state.loginForm['email'].valid}
                    touched={state.loginForm['email'].touched}
                />
                <Input
                    id='password'
                    label='Password'
                    type='password'
                    control='input'
                    minLength={6}
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler.bind('password')}
                    value={state.loginForm['password'].value}
                    valid={state.loginForm['password'].valid}
                    touched={state.loginForm['password'].touched}
                />
                <div className='form-btn'>
                    <Button
                        design='raised'
                        type='submit'
                        loading={props.loading}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Auth>
    )
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        loading: state.order.loading,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitLogin: (email, password) =>
            dispatch(orderAction.initLogin(email, password)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

