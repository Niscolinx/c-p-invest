import React, { useState } from 'react'

import Input from '../Input'
import Button from '../Button'
import { required, length, email } from '../../util/validators'
import Auth from './Auth'

const Signup = (props: any) => {
    const [state, setState] = useState({
        signupForm: {
            fullName: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 5 })],
            },
            username: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 3 })],
            },
            email: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, email],
            },
            confirmEmail: {
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
            confirmPassword: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            secretQuestion: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 8 })],
            },
            secretAnswer: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            bitcoinAccount: {
                value: '',
                valid: false,
                touched: false,
                validators: [length({ min: 6 })],
            },
            perfectMoney: {
                value: '',
                valid: false,
                touched: false,
                validators: [length({ min: 6 })],
            },

            formValid: false,
        },
    })

    const [checked, setChecked] = useState(false)

    const inputChangeHandler = (input: any, value: any) => {
        setState((prevState) => {
            let isValid = true
            for (const validator of prevState.signupForm[input].validators) {
                const emailValue = prevState.signupForm.email.value
                const passwordValue = prevState.signupForm.password.value

                if (input === 'confirmEmail') {
                    if (emailValue !== value) {
                        isValid = false
                    } else {
                        isValid = true
                    }
                }
                if (input === 'confirmPassword') {
                    if (passwordValue !== value) {
                        isValid = false
                    } else {
                        isValid = true
                    }
                }

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
                if (
                    inputName !== 'formValid' &&
                    inputName !== '[object Object]' &&
                    inputName !== 'bitcoinAccount' &&
                    inputName !== 'perfectMoney'
                ) {
                    formIsValid = formIsValid && updatedForm[inputName].valid
                }
            }
            return {
                signupForm: updatedForm,
                formValid: formIsValid,
            }
        })
    }

    const inputBlurHandler = (input: any) => {
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

    const checkboxHandler = (id:any, isChecked: any) => {
        setChecked(isChecked)
    }

    console.log('checked', checked)

    return (
        <Auth>
            <form
                onSubmit={(e) => props.onSignup(e, state)}
                className='form__box'
            >
                <div className='form-1'>
                    <h3 className='heading-3 form__heading'>
                        Personal Information
                    </h3>
                    <Input
                        id='fullName'
                        label='Fullname'
                        type='text'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('fullName')}
                        value={state.signupForm['fullName'].value}
                        valid={state.signupForm['fullName'].valid}
                        touched={state.signupForm['fullName'].touched}
                    />
                    <Input
                        id='username'
                        label='Username'
                        type='text'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('username')}
                        value={state.signupForm['username'].value}
                        valid={state.signupForm['username'].valid}
                        touched={state.signupForm['username'].touched}
                    />

                    <Input
                        id='email'
                        label='E-Mail'
                        type='email'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('email')}
                        value={state.signupForm['email'].value}
                        valid={state.signupForm['email'].valid}
                        touched={state.signupForm['email'].touched}
                    />
                    <Input
                        id='confirmEmail'
                        label='Confirm E-Mail'
                        type='email'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('confirmEmail')}
                        value={state.signupForm['confirmEmail'].value}
                        valid={state.signupForm['confirmEmail'].valid}
                        touched={state.signupForm['confirmEmail'].touched}
                    />
                </div>
                <div className='form-2'>
                    <h3 className='heading-3 form__heading'>
                        Account Information
                    </h3>

                    <Input
                        id='password'
                        label='Password'
                        type='password'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('password')}
                        value={state.signupForm['password'].value}
                        valid={state.signupForm['password'].valid}
                        touched={state.signupForm['password'].touched}
                    />
                    <Input
                        id='confirmPassword'
                        label='confirm Password'
                        type='password'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('confirmPassword')}
                        value={state.signupForm['confirmPassword'].value}
                        valid={state.signupForm['confirmPassword'].valid}
                        touched={state.signupForm['confirmPassword'].touched}
                    />
                    <Input
                        id='secretQuestion'
                        label='Secret Question'
                        type='text'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('secretQuestion')}
                        value={state.signupForm['secretQuestion'].value}
                        valid={state.signupForm['secretQuestion'].valid}
                        touched={state.signupForm['secretQuestion'].touched}
                    />
                    <Input
                        id='secretAnswer'
                        label='Secret Answer'
                        type='text'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('secretAnswer')}
                        value={state.signupForm['secretAnswer'].value}
                        valid={state.signupForm['secretAnswer'].valid}
                        touched={state.signupForm['secretAnswer'].touched}
                    />
                </div>
                <div className='form-3'>
                    <h3 className='heading-3 form__heading'>
                        Currency Information
                    </h3>

                    <Input
                        id='bitcoinAccount'
                        label='Bitcoin Account'
                        type='text'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('bitcoinAccount')}
                        value={state.signupForm['bitcoinAccount'].value}
                        valid={state.signupForm['bitcoinAccount'].valid}
                        touched={state.signupForm['bitcoinAccount'].touched}
                    />
                    <Input
                        id='perfectMoney'
                        label='Perfect Money'
                        type='perfectMoney'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('perfectMoney')}
                        value={state.signupForm['perfectMoney'].value}
                        valid={state.signupForm['perfectMoney'].valid}
                        touched={state.signupForm['perfectMoney'].touched}
                    />
                </div>

                <div className='form-btn'>
                    <Input
                        id='signupCheckbox'
                        label='checkbox'
                        type='checkbox'
                        control='checkbox'
                        onChange={checkboxHandler}
                    />
                    <Button
                        design='raised'
                        type='submit'
                        loading={props.loading}
                    >
                        Signup
                    </Button>
                </div>
            </form>
        </Auth>
    )
}

export default Signup
