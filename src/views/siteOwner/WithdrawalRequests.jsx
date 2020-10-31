import React, { useState } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'

import Card from '../../components/Card/Card'
import { thWithdrawalArray, tdWithdrawalArray } from '../../variables/Variables'

function WithdrawalRequests(props) {
    const [withdrawalFromDate, setWithdrawalFromDate] = useState('')
    const [withdrawalToDate, setWithdrawalToDate] = useState('')
    const [fromAmount, setFromAmount] = useState('')
    const [toAmount, setToAmount] = useState('')
    const [perPage, setPerPage] = useState('10')
    const [currency, setCurrency] = useState('All Currencies')

    const withdrawalFromDateChange = (e) => {
        setWithdrawalFromDate(e.target.value)
    }
    const withdrawalToDateChange = (e) => {
        setWithdrawalToDate(e.target.value)
    }
    const handleSelectChange = (e) => {
        setCurrency(e.target.value)
    }
    const handleFromAmount = (e) => {
        setFromAmount(e.target.value)
    }
    const handleToAmount = (e) => {
        setToAmount(e.target.value)
    }
    const handlePerPage = (e) => {
        setPerPage(e.target.value)
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
                    className='withdrawalRequest__form'
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

                    <input
                        type='input'
                        className='withdrawalRequest__form--input'
                        name='perPage'
                        placeholder='per page'
                        id='perPage'
                        onChange={handlePerPage}
                        value={perPage}
                    />

                    <div className='withdrawalRequest-right'>
                        <label className='withdrawalRequest__label'>
                            Amount
                        </label>
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
                            <option value='All Currencies'>
                                All Currencies
                            </option>
                            <option value='Bitcoin'>Bitcoin</option>
                            <option value='Ethereum'>Ethereum</option>
                        </select>
                    </div>

                    <div className='withdrawalRequest__form--btn'>
                        <button type='submit' className='button'>
                            Proceed
                        </button>
                    </div>
                </form>
            </div>
            <div className='withdrawalRequest-details'>
                <div className='content'>
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                <Card
                                    plain
                                    title='Your investment'
                                    category='History'
                                    ctTableFullWidth
                                    ctTableResponsive
                                    content={
                                        <Table>
                                            <thead>
                                                <tr>
                                                    {thWithdrawalArray.map(
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
                                                {tdWithdrawalArray.map(
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
