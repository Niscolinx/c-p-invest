import React, { useState } from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'

import { required, length, email } from '../../util/validators'
import Auth from './Auth'

const Login = (props:any) => {
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

    const inputChangeHandler = (input:any, value:any) => {
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

    const inputBlurHandler = (input:any) => {
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

        return (
            <Auth login>
                <form
                    onSubmit={(e) =>
                        props.onLogin(e, {
                            email: state.loginForm.email.value,
                            password: state.loginForm.password.value,
                        })
                    }
                >
                    <Input
                        id='email'
                        label='E-Mail'
                        type='email'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind( 'email')}
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
                        onBlur={inputBlurHandler.bind( 'password')}
                        value={state.loginForm['password'].value}
                        valid={state.loginForm['password'].valid}
                        touched={state.loginForm['password'].touched}
                    />
                    <div className="form-btn">

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


export default Login
