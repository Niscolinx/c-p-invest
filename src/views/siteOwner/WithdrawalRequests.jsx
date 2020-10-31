import React, { useState } from 'react'

function WithdrawalRequests(props) {
    const [withdrawalFromDate, setWithdrawalFromDate] = useState('')
    const [withdrawalToDate, setWithdrawalToDate] = useState('')
    const [currency, setCurrency] = useState('Bitcoin')

    const withdrawalFromDateChange = (e) => {
        setWithdrawalFromDate(e.target.value)
    }
    const withdrawalToDateChange = (e) => {
        setWithdrawalToDate(e.target.value)
    }
    const handleSelectChange = (e) => {
        setCurrency(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(withdrawalFromDate, withdrawalToDate)
        e.preventDefault()
        const formData = {
            currency,
        }
    }
    return (
        <div className='withdrawalRequest'>
            <div className='withdrawalRequest-left'>
                <form
                    className='withdrawalRequest-left__form'
                    onSubmit={handleSubmit}
                >
                    <input
                        type='date'
                        className='withdrawalRequest-left__form--input'
                        name='withdrawalFromDate'
                        id='withdrawalFromDate'
                        onChange={withdrawalFromDateChange}
                        value={withdrawalFromDate}
                    />
                    <input
                        type='date'
                        className='withdrawalRequest-left__form--input'
                        name='withdrawalToDate'
                        id='withdrawalToDate'
                        onChange={withdrawalToDateChange}
                        value={withdrawalToDate}
                    />

                    <select
                        name='select'
                        id='select'
                        onChange={handleSelectChange}
                        value={currency}
                        className='withdrawalRequest-left__form--select'
                    >
                        <option value='Bitcoin'>All e-currencies</option>
                        <option value='Bitcoin'>Bitcoin</option>
                        <option value='Ethereum'>Ethereum</option>
                    </select>

                    <div className='withdrawalRequest-left__form--btn'>
                        {/* <button
                            type='submit'
                            className='withdrawalRequest-left__form--btn-item'
                        >
                            Submit
                        </button> */}

                        <button type='submit' className='button'>
                            Proceed
                        </button>
                    </div>
                </form>
            </div>
            <div className='withdrawalRequest-right'></div>
            <div className='withdrawalRequest-details'></div>
        </div>
    )
}

export default WithdrawalRequests
