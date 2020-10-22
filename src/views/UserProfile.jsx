import React, { useState } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { Card } from '../components/Card/Card'
import { FormInputs } from '../components/FormInputs/FormInputs'
import { UserCard } from '../components/UserCard/UserCard'
import Button from '../components/CustomButton/CustomButton'
import { connect } from 'react-redux'

import { generateBase64FromImage } from '../util/image'
import * as orderAction from '../store/actions/burgerIndex'

import avatar from '../assets/img/faces/face-3.jpg'

const UserProfile = (props) => {
    const [amount, setAmount] = useState('')
    const [currency, setCurrency] = useState('Bitcoin')
    const [file, setFile] = useState('')


    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSelectChange = (e) => {
        setCurrency(e.target.value)
    }
    const handleChange = (e) => {
        console.log('changed the input', e.target.value)
    }
    const handleFileChange = (e) => {
        const files = e.target.files
        if (files) {
            console.log('the files', files)
            generateBase64FromImage(files[0])
                .then((b64) => {
                    //this.setState({ imagePreview: b64 })
                })
                .catch((e) => {
                    //  this.setState({ imagePreview: null })
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
        console.log('the values', amount, currency, file)
    }


    return (
        <div className='content'>
            <Grid fluid>
                <Row>
                    <Col md={4}>
                        <UserCard
                            bgImage='https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400'
                            avatar={avatar}
                            name='Mike Andrew'
                            userName='michael24'
                        />
                    </Col>
                    <Col md={8}>
                        <Card
                            title='Edit Profile'
                            content={
                                <form>
                                    <FormInputs
                                        onChange={handleChange}
                                        ncols={['col-md-6', 'col-md-6']}
                                        properties={[
                                            {
                                                label: 'Username',
                                                type: 'text',
                                                bsClass: 'form-control',
                                                placeholder: 'Username',
                                                defaultValue: 'michael23'
                                            },
                                            {
                                                label: 'Email address',
                                                type: 'email',
                                                bsClass: 'form-control',
                                                placeholder: 'Email'
                                            },
                                        ]}
                                    />
                                    <FormInputs
                                        ncols={['col-md-6', 'col-md-6']}
                                        properties={[
                                            {
                                                label: 'First name',
                                                type: 'text',
                                                bsClass: 'form-control',
                                                placeholder: 'First name',
                                                defaultValue: 'Mike',
                                            },
                                            {
                                                label: 'Last name',
                                                type: 'text',
                                                bsClass: 'form-control',
                                                placeholder: 'Last name',
                                                defaultValue: 'Andrew',
                                            },
                                        ]}
                                    />
                                    <FormInputs
                                        ncols={['col-md-12', 'col-md-12']}
                                        properties={[
                                            {
                                                label: 'Bitcoin Address',
                                                type: 'text',
                                                bsClass: 'form-control',
                                                placeholder: 'Bitcoin Address',
                                                defaultValue:
                                                    'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
                                            },
                                            {
                                                label: 'Ethereum Address',
                                                type: 'text',
                                                bsClass: 'form-control',
                                                placeholder: 'Ethereum Address',
                                                defaultValue:
                                                    'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
                                            },
                                        ]}
                                    />
                                    <FormInputs
                                        ncols={[
                                            'col-md-4',
                                            'col-md-4',
                                            'col-md-4',
                                        ]}
                                        properties={[
                                            {
                                                label: 'Phone Number',
                                                type: 'number',
                                                bsClass: 'form-control',
                                            },
                                            {
                                                label: 'Country',
                                                type: 'text',
                                                bsClass: 'form-control',
                                            },
                                            {
                                                label: 'Postal Code',
                                                type: 'number',
                                                bsClass: 'form-control',
                                            },
                                        ]}
                                    />
                                    <div>
                                        <h4>Change Password</h4>
                                    </div>
                                    <FormInputs
                                        ncols={['col-md-12', 'col-md-12']}
                                        properties={[
                                            {
                                                label: 'New Password',
                                                type: 'text',
                                                bsClass: 'form-control',
                                                placeholder: 'password',
                                            },
                                            {
                                                label: 'Retype Password',
                                                type: 'text',
                                                bsClass: 'form-control',
                                                placeholder: 'password',
                                            },
                                        ]}
                                    />

                                    <Button
                                        bsStyle='info'
                                        pullRight
                                        fill
                                        type='submit'
                                    >
                                        Update Profile
                                    </Button>
                                    <div className='clearfix' />
                                </form>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
