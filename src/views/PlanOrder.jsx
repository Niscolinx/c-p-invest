import React, { useState, useEffect } from 'react'
import { FormGroup, FormControl, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { StatsCard } from '../components/StatsCard/StatsCard'

import { generateBase64FromImage } from '../util/image'
import * as orderAction from '../store/actions/burgerIndex'

const PlanOrder = (props) => {
    const [amount, setAmount] = useState('')
    const [currency, setCurrency] = useState('Bitcoin')
    const [file, setFile] = useState('')
    const [imagePreview, setImagePreview] = useState(null)
    const [planDetails, setPlanDetails] = useState({})

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSelectChange = (e) => {
        setCurrency(e.target.value)
    }
    const handleFileChange = (e) => {
        const files = e.target.files
        if (files) {
            generateBase64FromImage(files[0])
            generateBase64FromImage(files[0])
                .then((b64) => {
                    setImagePreview(b64)
                })
                .catch((e) => {
                    setImagePreview(null)
                })
        }
        setFile(e.target.files)
    }

    const selectedPlan = props.match.params.id.split(':')[1]

    useEffect(() => {
        switch (selectedPlan) {
            case 'ruby':
                setPlanDetails({
                    name: 'ruby',
                    percent: 20,
                    hours: 24,
                    minimum: 20,
                    maximum: 499,
                })
                break
            case 'sapphire':
                setPlanDetails({
                    name: 'sapphire',
                    percent: 30,
                    hours: 24,
                    minimum: 500,
                    maximum: 999,
                })
                break
            case 'coral':
                setPlanDetails({
                    name: 'coral',
                    percent: 50,
                    hours: 24,
                    minimum: 999,
                    maximum: 1000000,
                })
                break
            case 'emerald':
                setPlanDetails({
                    name: 'emerald',
                    percent: 80,
                    hours: 48,
                    minimum: 2000,
                    maximum: 1000000,
                })
                break
            case 'gold':
                setPlanDetails({
                    name: 'gold',
                    percent: 150,
                    hours: 72,
                    minimum: 4000,
                    maximum: 1000000,
                })
                break
            case 'diamond':
                setPlanDetails({
                    name: 'diamond',
                    percent: 200,
                    hours: 96,
                    minimum: 6000,
                    maximum: 1000000,
                })
                break

            default:
                setPlanDetails({})
                break
        }
    }, [selectedPlan])

    const handleSubmit = (e) => {

        e.preventDefault()
        const formData = {
            amount,
            currency,
            file,
        }

        // props.onInitFundAccount(formData, props.tokenId, props.userId)

        props.history.push('/admin/plan-confirmation/:' + selectedPlan, {
            ...formData,
            selectedPlan,
            planDetails
        })
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
                            statsValue='$0'
                            statsIcon={<i className='fa fa-refresh' />}
                            statsIconText='Updated now'
                        />
                    </Col>
                </Row>

                <div className='fundAccount__package'>
                    <h3 className='fundAccount__package--text'>
                        SELECTED PLAN:{' '}
                        <span style={{ textTransform: 'uppercase' }}>
                            {selectedPlan}
                        </span>
                    </h3>
                </div>
                <form className='fundAccount__form' onSubmit={handleSubmit}>
                    <input
                        type='number'
                        className='fundAccount__form--input'
                        placeholder='Amount to Spend - USD'
                        name='amount'
                        id='amount'
                        onChange={handleAmountChange}
                        value={amount}
                    />

                    <select
                        name='select'
                        id='select'
                        onChange={handleSelectChange}
                        value={currency}
                        className='fundAccount__form--select'
                    >
                        <option value='Bitcoin'>Bitcoin</option>
                        <option value='Ethereum'>Ethereum</option>
                    </select>

                    <FormGroup className='fundAccount__form--instruction'>
                        <FormControl.Static>
                            INSTRUCTIONS: Transfer the equivalent amount in
                            bitcoin or ethereum(depending on your selection) to
                            the above wallet address. After payment upload the
                            payment proof below.
                        </FormControl.Static>
                    </FormGroup>

                    <div>
                        <label className='fundAccount__controlLabel'>
                            Proof of Payment (Image or PDF)
                        </label>
                        <input
                            type='file'
                            id='file'
                            name='file'
                            onChange={handleFileChange}
                            className='fundAccount__form--file'
                        />
                        {imagePreview && (
                            <>
                                <div className='image'>
                                    <img
                                        src={imagePreview}
                                        alt='...'
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <div className='fundAccount__form--btn'>
                        {/* <button
                            type='submit'
                            className='fundAccount__form--btn-item'
                        >
                            Submit
                        </button> */}

                        <button type='submit' className='button'>
                            Proceed
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.order.loading,
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
