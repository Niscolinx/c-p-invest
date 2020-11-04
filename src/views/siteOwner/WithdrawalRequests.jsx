import React, { useState } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'

import Card from '../../components/Card/Card'
import {
    thWithdrawalRequestArray,
    tdWithdrawalRequestArray,
} from '../../variables/Variables'

function WithdrawalRequests(props) {
    const [withdrawalFromDate, setWithdrawalFromDate] = useState('')
    const [withdrawalToDate, setWithdrawalToDate] = useState('')
    const [fromAmount, setFromAmount] = useState('')
    const [toAmount, setToAmount] = useState('')
    const [perPage, setPerPage] = useState('10')
    const [allRequests, setAllRequests] = useState('All Requests')
    const [currency, setCurrency] = useState('All Currencies')

    // const withdrawalFromDateChange = (e) => {
    //     setWithdrawalFromDate(e.target.value)
    // }
    // const withdrawalToDateChange = (e) => {
    //     setWithdrawalToDate(e.target.value)
    // }
    // const handleSelectChange = (e) => {
    //     setCurrency(e.target.value)
    // }
    // const handleFromAmount = (e) => {
    //     setFromAmount(e.target.value)
    // }
    // const handleAllRequests = (e) => {
    //     setAllRequests(e.target.value)
    // }
    // const handleToAmount = (e) => {
    //     setToAmount(e.target.value)
    // }
    // const handlePerPage = (e) => {
    //     setPerPage(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     console.log(withdrawalFromDate, withdrawalToDate)
    //     e.preventDefault()
    //     const formData = {
    //         currency,
    //     }
    // }
    return (
        <div className='withdrawalRequest'>
            {/* <form className='withdrawalRequest__form' onSubmit={handleSubmit}>
                <div className='withdrawalRequest__form--left'>
                    <select
                        name='select'
                        id='select'
                        onChange={handleAllRequests}
                        value={allRequests}
                        className='withdrawalRequest__form--select'
                    >
                        <option value='All Requests'>All Requests</option>
                        <option value='Pending'>Pending</option>
                        <option value='Approved'>Approved</option>
                    </select>
                    <input
                        type='date'
                        className='withdrawalRequest__form--input'
                        name='withdrawalFromDate'
                        id='withdrawalFromDate'
                        onChange={withdrawalFromDateChange}
                        value={withdrawalFromDate}
                    />
                    <input
                        type='date'
                        className='withdrawalRequest__form--input'
                        name='withdrawalToDate'
                        id='withdrawalToDate'
                        onChange={withdrawalToDateChange}
                        value={withdrawalToDate}
                    />

                    <input
                        type='input'
                        className='withdrawalRequest__form--input'
                        name='perPage'
                        placeholder='per page'
                        id='perPage'
                        onChange={handlePerPage}
                        value={perPage}
                    />
                </div>
                <div className='withdrawalRequest__form--right'>
                    <label className='withdrawalRequest__form--label'>Amount</label>
                    <input
                        type='number'
                        className='withdrawalRequest__form--input'
                        name='fromAmount'
                        placeholder='From 0.00'
                        id='fromAmount'
                        onChange={handleFromAmount}
                        value={fromAmount}
                    />
                    <input
                        type='number'
                        className='withdrawalRequest__form--input'
                        name='toAmount'
                        placeholder='To 0.00'
                        id='toAmount'
                        onChange={handleToAmount}
                        value={toAmount}
                    />
                    <select
                        name='select'
                        id='select'
                        onChange={handleSelectChange}
                        value={currency}
                        className='withdrawalRequest__form--select'
                    >
                        <option value='All Currencies'>All Currencies</option>
                        <option value='Bitcoin'>Bitcoin</option>
                        <option value='Ethereum'>Ethereum</option>
                    </select>
                </div>

                <div className='withdrawalRequest__form--btn'>
                    <button type='submit' className='button'>
                        Go
                    </button>
                </div>
            </form> */}
            <div className='withdrawalRequest-details'>
                <div className='content'>
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                <Card
                                    plain
                                    title='Withdrawal Requests'
                                    category='All Users'
                                    ctTableFullWidth
                                    ctTableResponsive
                                    content={
                                        <Table>
                                            <thead>
                                                <tr>
                                                    {thWithdrawalRequestArray.map(
                                                        (prop, key) => {
                                                            return (
                                                                <th key={key}>
                                                                    {prop}
                                                                </th>
                                                            )
                                                        }
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tdWithdrawalRequestArray.map(
                                                    (prop, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                {prop.map(
                                                                    (
                                                                        prop,
                                                                        key
                                                                    ) => {
                                                                        return (
                                                                            <td
                                                                                key={
                                                                                    key
                                                                                }
                                                                            >
                                                                                {
                                                                                    prop
                                                                                }
                                                                            </td>
                                                                        )
                                                                    }
                                                                )}
                                                            </tr>
                                                        )
                                                    }
                                                )}
                                            </tbody>
                                        </Table>
                                    }
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default WithdrawalRequests
