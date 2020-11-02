import React, { useState, useEffect } from 'react'
import {
    Grid,
    Row,
    Col,
    ControlLabel,
    FormControl,
    FormGroup,
} from 'react-bootstrap'

import { Card } from '../../components/Card/Card'
import UserCard from '../../components/UserCard/UserCard'
import { connect } from 'react-redux'

import * as orderAction from '../../store/actions/burgerIndex'

import avatar from '../../assets/img/faces/face-1.jpg'

const UserProfile = (props) => {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [bitcoin, setBitcoin] = useState('')
    const [ethereum, setEthereum] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

     const [message, setMessage] = useState('')
     const [error, setError] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === 'fullname') {
            setFullname(value)
        }
        if (name === 'username') {
            setUsername(value)
        }
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'bitcoin') {
            setBitcoin(value)
        }
        if (name === 'ethereum') {
            setEthereum(value)
        }
        if (name === 'phone') {
            setPhone(value)
        }
        if (name === 'country') {
            setCountry(value)
        }
        if (name === 'city') {
            setCity(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
        if (name === 'confirmPassword') {
            setConfirmPassword(value)
        }
    }

    useEffect(() => {
        if (props.userData) {
            const fetchedBitcoin = props.userData.bitcoinAccount
            const fetchedCreatedAt = props.userData.createdAt
            const fetchedUpdatedAt = props.userData.updatedAt
            const fetchedEmail = props.userData.email
            const fetchedEthereum = props.userData.ethereumAccount
            const fetchedFullname = props.userData.fullname
            const fetchedRole = props.userData.role
            const fetchedStatus = props.userData.status
            const fetchedUsername = props.userData.username

            setFullname(fetchedFullname)

            setUsername(fetchedUsername)

            setEmail(fetchedEmail)
            setBitcoin(fetchedBitcoin)

            setEthereum(fetchedEthereum)
        }
    }, [props])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
                setMessage('Passwords do not match')
                setError(true)
            
        } else {
            setMessage(
                'Updated successfully'
            )
            setError(false)
        }
        const formData = {
            profilePic,
            fullname,
            username,
            password,
            email,
            phone,
            bitcoin,
            confirmPassword,
        }

        console.log('the form data', formData)

        // props.onInitFundAccount(formData, props.tokenId, props.userId)
    }

    return (
        <div className='content'>
            <Grid fluid>
                <Row>
                    <Col md={4}>
                        <UserCard
                            bgImage='https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400'
                            avatar={avatar}
                            name={props.userData ? props.userData.fullname : ''}
                            userName={
                                props.userData ? props.userData.username : ''
                            }
                        />
                    </Col>
                    <Col md={8}>
                        <Card
                            title='Edit Profile'
                            content={
                                <form onSubmit={handleSubmit}>
                                    {message && (
                                        <p
                                            className={
                                                error
                                                    ? 'message message__error'
                                                    : 'message'
                                            }
                                        >
                                            {message}
                                        </p>
                                    )}
                                    <Row>
                                        <FormGroup className='col-md-12 col-sm-12 col-xs-12'>
                                            <ControlLabel>
                                                Full Name
                                            </ControlLabel>
                                            <FormControl
                                                type='text'
                                                name='fullname'
                                                onChange={handleChange}
                                                value={fullname}
                                            />
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup className='col-md-6 col-sm-12 col-xs-12'>
                                            <ControlLabel>
                                                Username
                                            </ControlLabel>
                                            <FormControl
                                                name='username'
                                                type='text'
                                                value={username}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                        <FormGroup className='col-md-6 col-sm-12 col-xs-12'>
                                            <ControlLabel>Email</ControlLabel>
                                            <FormControl
                                                minLength={5}
                                                type='text'
                                                name='email'
                                                value={email}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup className='col-md-6 col-sm-12 col-xs-12'>
                                            <ControlLabel>
                                                Phone Number
                                            </ControlLabel>
                                            <FormControl
                                                type='number'
                                                name='phone'
                                                value={phone}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                        <FormGroup className='col-md-6 col-sm-12 col-xs-12'>
                                            <ControlLabel>City</ControlLabel>
                                            <FormControl
                                                type='text'
                                                name='city'
                                                value={city}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>

                                        <FormGroup className='col-md-6 col-sm-12 col-xs-12'>
                                            <ControlLabel>Country</ControlLabel>
                                            <FormControl
                                                type='text'
                                                name='country'
                                                value={country}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup className='col-md-12 col-sm-12 col-xs-12'>
                                            <ControlLabel>
                                                Bitcoin Address
                                            </ControlLabel>
                                            <FormControl
                                                type='text'
                                                name='bitcoin'
                                                value={bitcoin}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                        <FormGroup className='col-md-12 col-sm-12 col-xs-12'>
                                            <ControlLabel>
                                                Ethereum Address
                                            </ControlLabel>
                                            <FormControl
                                                type='text'
                                                value={ethereum}
                                                name='ethereum'
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Row>
                                    <div>
                                        <h4>Change Password</h4>
                                    </div>
                                    <Row>
                                        <FormGroup className='col-md-12 col-sm-12 col-xs-12'>
                                            <ControlLabel>
                                                New Password
                                            </ControlLabel>
                                            <FormControl
                                                type='text'
                                                name='password'
                                                value={password}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>

                                        <FormGroup className='col-md-12 col-sm-12 col-xs-12'>
                                            <ControlLabel>
                                                Retype Password
                                            </ControlLabel>
                                            <FormControl
                                                type='text'
                                                name='confirmPassword'
                                                value={confirmPassword}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Row>
                                    <button
                                        className='button btn__profile'
                                        type='submit'
                                    >
                                        Update Profile
                                    </button>
                                    {/* <div className='clearfix' /> */}
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
        loading: state.auth.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        userData: state.auth.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onInitUpdateSettings: (token) => dispatch(orderAction.initUpdateSettings(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
