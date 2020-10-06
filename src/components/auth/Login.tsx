import React, { useState } from 'react'
import { connect } from 'react-redux'

import withErrorHandler from '../hoc/withErrorHandler'
import axios from '../../axios'
import Button from '../../components/Button'
import Spinner from '../../components/spinner'
import Input from '../../components/Input'
import * as orderAction from '../../store/actions/burgerIndex'

const Login = (props:any) => {
   const [state, setState] = useState({
        orderForm: {
            name: {
                elementType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                isTouched: false,
            },
            zipcode: {
                elementType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Zip Code',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 6,
                },
                valid: false,
                isTouched: false,
            },
            street: {
                elementType: 'input',
                config: {
                    type: 'textarea',
                    placeholder: 'Your Street',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                isTouched: false,
            },
            country: {
                elementType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Your Country',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                isTouched: false,
            },
            email: {
                elementType: 'input',
                config: {
                    type: 'email',
                    placeholder: 'Your Email',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                isTouched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                config: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'normal', displayValue: 'Normal' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                    ],
                },
                value: 'fastest',
                validation: {},
            },
        },
        loading: false,
    })

    const {orderForm} = state

   const checkValidity = (value:string, rules:any) => {
        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        return isValid
    }

   const nameHandler = (e:any, id:any) => {
        const updatedOrderForm = {...orderForm}
        const updatedKeys = {...updatedOrderForm[id]}
        updatedKeys.value = e.target.value
        updatedKeys.valid = checkValidity(
            updatedKeys.value,
            updatedKeys.validation
        )
        updatedKeys.isTouched = true
        updatedOrderForm[id] = updatedKeys

        setState({
            ...state,
            orderForm: updatedOrderForm,
        })
    }

   const orderedBurger = (e:any) => {
        e.preventDefault()
        let orderData = {}
        for (let formValue in state.orderForm) {
            orderData[formValue] = state.orderForm[formValue].value
        }
        const data = {
            ingredients: props.ingredients,
            price: props.totalPrice,
            contactform: orderData,
            userId: props.userId,
        }
        props.onInitBurgerStart(props.tokenId, data)
    }

   const buttonProps = () => {
        let buttonProps = 'disAbled'
        let disabledArr = []
        let buttonKeys = { ...state.orderForm }
        for (let ifValid in buttonKeys) {
            if (buttonKeys[ifValid].valid === true) {
                disabledArr.push(ifValid)
            }
            if (disabledArr.length === 5) {
                buttonProps = 'Success'
            }
        }
        return buttonProps
    }

        let elementTypeArr = []
        for (let key in state.orderForm) {
            elementTypeArr.push({
                id: key,
                config: state.orderForm[key],
            })
        }
        let form:any = ''
        if (props.loading) {
            form = <Spinner />
        } else {
            form = (
                <form className='contactForm'>
                    {elementTypeArr.map((elementType) => {
                        return (
                            <Input
                                isTouched={elementType.config.isTouched}
                                validate={elementType.config.valid}
                                key={elementType.id}
                                config={elementType.config.config}
                                inputtype={elementType.config.elementType}
                                value={elementType.config.value}
                                changed={(e) =>
                                    nameHandler(e, elementType.id)
                                }
                            />
                        )
                    })}
                    <Button
                        btnType={buttonProps()}
                        clicked={orderedBurger}
                    >
                        ORDER NOW
                    </Button>
                </form>
            )
        

        return (
            <div className='login'>
                <h3>Please enter your details below</h3>
                {form}
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        loading: state.order.loading,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onInitBurgerStart: (token:any, data:any) =>
            dispatch(orderAction.initBurgerStart(token, data)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Login, axios))
