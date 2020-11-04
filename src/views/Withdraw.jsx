import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { StatsCard } from '../components/StatsCard/StatsCard'
import * as orderAction from '../store/actions/burgerIndex'

const PlanOrder = (props) => {
    let [amount, setAmount] = useState('')
    const [password, setPassword] = useState('')
    const [currency, setCurrency] = useState('Bitcoin')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    let [accountBalance] = useState('0')

    useEffect(() => {}, [amount])

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSelectChange = (e) => {
        setCurrency(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        accountBalance = Number(accountBalance)
        amount = Number(amount)

        if (amount < 1 || accountBalance < amount) {
            setMessage('Insufficiant Balance')
            setError(true)
        } else {
            setMessage(
                'Withdrawal sent, Your withdrawal will reflect in your account after we have confirmed it, thanks!! '
            )
            setError(false)
        }
        // const formData = {
        //     amount,
        //     currency,
        // }

        // props.onInitFundAccount(formData, props.tokenId, props.userId)
    }

    return (
        <>
            <div className='fundAccount'>
                <Row className='fundAccount__balance'>
                    <Col lg={12} sm={12}>
                        <StatsCard
                            bigIcon={
                                <i className='pe-7s-server text-warning' />
                            }
                            statsText='Account Balance'
                            statsValue={'$' + accountBalance}
                            statsIcon={<i className='fa fa-refresh' />}
                            statsIconText='Updated now'
                        />
                    </Col>
                </Row>
                <form className='fundAccount__form' onSubmit={handleSubmit}>
                    {message && (
                        <p
                            className={
                                error ? 'message message__error' : 'message'
                            }
                        >
                            {message}
                        </p>
                    )}
                    <input
                        type='number'
                        className='fundAccount__form--input'
                        placeholder='Amount to Withdraw'
                        name='amount'
                        id='amount'
                        onChange={handleAmountChange}
                        value={amount}
                    />
                    <input
                        type='password'
                        minLength='6'
                        className='fundAccount__form--input'
                        placeholder='Enter your password'
                        name='password'
                        id='password'
                        onChange={handlePasswordChange}
                        value={password}
                    />

                    <select
                        name='select'
                        id='select'
                        onChange={handleSelectChange}
                        value={currency}
                        className='fundAccount__form--select'
                    >
                        <option value='Bitcoin'>Select Payment Method</option>
                        <option value='Bitcoin'>Bitcoin</option>
                        <option value='Ethereum'>Ethereum</option>
                    </select>

                    <div className='fundAccount__form--btn'>
                        <button className='button' type='submit'>
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitFundAccount: (data, token, userId) =>
            dispatch(orderAction.initFundAccount(data, token, userId)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlanOrder)
