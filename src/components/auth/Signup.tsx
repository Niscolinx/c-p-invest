import React, { useState } from 'react'

import Input from '../../components//Input'
import Button from '../../components/Button'
import { required, length, email } from '../../util/validators'
import Auth from './Auth'

const Signup = (props:any) => {
    const [state, setState] = useState({
        signupForm: {
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
            username: {
                value: '',
                valid: false,
                touched: false,
                validators: [required],
            },
            formIsValid: false,
        },
    })

    const inputChangeHandler = (input:any, value:any) => {
        setState((prevState) => {
            let isValid = true
            for (const validator of prevState.signupForm[input].validators) {
                isValid = isValid && validator(value)
            }
            const updatedForm = {
                ...prevState.signupForm,
                [input]: {
                    ...prevState.signupForm[input],
                    valid: isValid,
                    value: value,
                },
            }
            let formIsValid = true
            for (const inputName in updatedForm) {
                formIsValid = formIsValid && updatedForm[inputName].valid
            }
            return {
                signupForm: updatedForm,
                formIsValid: formIsValid,
            }
        })
    }

   const inputBlurHandler = (input:any) => {
        setState((prevState) => {
            return {
                signupForm: {
                    ...prevState.signupForm,
                    [input]: {
                        ...prevState.signupForm[input],
                        touched: true,
                    },
                },
            }
        })
    }

        return (
            <Auth>
                <form onSubmit={(e) => props.onSignup(e, state)}>
                    <Input
                        id='email'
                        label='E-Mail'
                        type='email'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind( 'email')}
                        value={state.signupForm['email'].value}
                        valid={state.signupForm['email'].valid}
                        touched={state.signupForm['email'].touched}
                    />
                    <Input
                        id='username'
                        label='Username'
                        type='text'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind( 'username')}
                        value={state.signupForm['username'].value}
                        valid={state.signupForm['username'].valid}
                        touched={state.signupForm['username'].touched}
                    />
                    <Input
                        id='password'
                        label='Password'
                        type='password'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind( 'password')}
                        value={state.signupForm['password'].value}
                        valid={state.signupForm['password'].valid}
                        touched={state.signupForm['password'].touched}
                    />
                    <Button
                        design='raised'
                        type='submit'
                        loading={props.loading}
                    >
                        Signup
                    </Button>
                </form>
            </Auth>
        )
}

export default Signup
