import React, { useState } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'

import { generateBase64FromImage } from '../util/image'
import * as orderAction from '../store/actions/burgerIndex'

function FundAccount(props) {
    const [amount, setAmount] = useState('')
    const [currency, setCurrency] = useState('Bitcoin')
    const [file, setFile] = useState('')
    const [imagePreview, setImagePreview] = useState(null)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            amount,
            currency,
            file,
        }

        props.onInitFundAccount(formData, props.tokenId, props.userId)
    }

    return (
        <div className='fundAccount'>
            <div className='fundAccount__balance'>
                <h3 className='fundAccount__balance--text'>
                    Available Balance: <span>$2321</span>
                </h3>
            </div>
            <form className='fundAccount__form' onSubmit={handleSubmit}>
                <input
                    type='number'
                    className='fundAccount__form--input'
                    placeholder='Enter amount - USD'
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
                        INSTRUCTIONS: Transfer the equivalent amount in bitcoin
                        or ethereum(depending on your selection) to the above
                        wallet address. After payment upload the payment proof
                        below.
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
                            <img src={imagePreview} alt='...' style={{width:'100%'}}/>
                        </div>
                    </>
                )}
                </div>
                <div className='fundAccount__form--btn'>
                    <button
                        type='submit'
                        className='fundAccount__form--btn-item'
                    >
                        Submit
                    </button>
                </div>
            </form>

            <div className='fundAccount__form'>
                <FormGroup className='fundAccount__form--contact'>
                    <FormControl.Static>
                        Contact management at support@coinperfectinvestment.com
                        for other payment methods
                    </FormControl.Static>
                </FormGroup>
            </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FundAccount)
