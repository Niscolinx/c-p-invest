import React from 'react'
import {
    Checkbox,
    Radio,
    FormGroup,
    FormControl,
    Button,
    HelpBlock,
} from 'react-bootstrap'

function FundAccount() {
    function FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
                <FormControl {...props} className='fundAccount__form--input' />
                {help && <HelpBlock>Hello world</HelpBlock>}
            </FormGroup>
        )
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
                />

                <FormGroup controlId='formControlsSelect'>
                    <FormControl componentClass='select' placeholder='select'>
                        <option value='Bitcoin'>Bitcoin</option>
                        <option value='Ethereum'>Ethereum</option>
                    </FormControl>
                </FormGroup>
            </form>

            <div className='fundAccount__upload'>
                <form>
                    <FieldGroup
                        id='formControlsFile'
                        type='file'
                        label='File'
                        help='Example block-level help text here.'
                    />

                    <Checkbox checked readOnly>
                        Checkbox
                    </Checkbox>
                    <Radio checked readOnly>
                        Radio
                    </Radio>

                    <FormGroup className='fundAccount__form--contact'>
                        <FormControl.Static>
                            Contact management at
                            support@coinperfectinvestment.com for other payment
                            methods
                        </FormControl.Static>
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default FundAccount
