import React, {useState} from 'react'
import {
    ControlLabel,
    FormGroup,
    FormControl,
    Button,
} from 'react-bootstrap'


function FundAccount() {

    const [formInput, setFormInput] = useState({
        value: ''
    })

    function FieldGroup({ id, label, upload, ...props }) {
        return (
            <FormGroup controlId={id}>
                {upload && (
                    <ControlLabel className='fundAccount__controlLabel'>
                        {upload}
                    </ControlLabel>
                )}

                <FormControl
                    {...props}
                    className='fundAccount__form--input'
                    onChange={handleChange}
                />
            </FormGroup>
        )
    }

    const handleChange = e => {
        setFormInput({
            value: e.target.value
        })
        console.log('changedggg', e.target.value)
    }

    return (
        <div className='fundAccount'>
            <div className='fundAccount__balance'>
                <h3 className='fundAccount__balance--text'>
                    Available Balance: <span>$2321</span>
                </h3>
            </div>
            <form className='fundAccount__form'>
                <FieldGroup
                    id='formControlsText'
                    type='number'
                    label='Text'
                    placeholder='Enter amount - USD'
                    value={formInput.value}
                />

                <FormGroup controlId='formControlsSelect'>
                    <FormControl
                        componentClass='select'
                        placeholder='select'
                        onChange={handleChange}
                    >
                        <option value='Bitcoin'>Bitcoin</option>
                        <option value='Ethereum'>Ethereum</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className='fundAccount__form--instruction'>
                    <FormControl.Static>
                        INSTRUCTIONS: Transfer the equivalent amount in bitcoin
                        or ethereum(depending on your selection) to the above
                        wallet address. After payment upload the payment proof
                        below.
                    </FormControl.Static>
                </FormGroup>
            </form>

            <div className='fundAccount__form'>
                <form>
                    <FieldGroup
                        id='formControlsFile'
                        type='file'
                        label='File'
                        upload='Proof of payment (image or PDF)'
                    />

                    <Button type='submit'>Submit</Button>
                </form>

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

export default FundAccount
