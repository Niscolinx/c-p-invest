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
                validators: [required, length({ min: 5 })],
            },
            formIsValid: false,
        },
    })

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
                },
            }
            let formIsValid = true
            for (const inputName in updatedForm) {
                formIsValid = formIsValid && updatedForm[inputName].valid
            }
            return {
                loginForm: updatedForm,
                formIsValid: formIsValid,
            }
        })
    }

    const inputBlurHandler = (input) => {
        setState((prevState) => {
            return {
                loginForm: {
                    ...prevState.loginForm,
                    [input]: {
                        ...prevState.loginForm[input],
                        touched: true,
                    },
                },
            }
        })
    }

    const handleLogin = e => {
        e.preventDefault()
        props.onInitLogin(state.loginForm.email.value, state.loginForm.password.value)
        
    }

    return (
        <Auth login>
            <form
                onSubmit={handleLogin}
            >
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

