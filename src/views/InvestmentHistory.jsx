import React, { useState, useEffect, useRef } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import * as orderAction from '../store/actions/burgerIndex'

import Card from '../components/Card/Card'
//import { thWithdrawalArray, tdWithdrawalArray } from '../../variables/Variables'

const thWithdrawalArray = ['No', 'Username', 'Email', 'Status', 'Date']

const Members = (props) => {
    const [allUsers, setAllUsers] = useState([])

    const gottenAllUsers = useRef()
    useEffect(() => {
        if (!gottenAllUsers.current) {
            if (props.tokenId) {
                props.onInitGetUserHistory(props.tokenId)
            }
            gottenAllUsers.current = true
        } else {
            if (props.getUsers) {
                setAllUsers(props.getUsers)
            }
        }
    }, [props])

    console.log('the get all users', allUsers)

    return (
        <div className='content'>
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            plain
                            title='Your Investment'
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
                                        {allUsers.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    {Object.values(prop).map(
                                                        (prop, key) => {
                                                            console.log(
                                                                'prop',
                                                                prop
                                                            )
                                                            return (
                                                                <td key={key}>
                                                                    {prop}
                                                                </td>
                                                            )
                                                        }
                                                    )}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('the state of investment history', state)
    return {
        loading: state.user.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetUserHistory: (token) => dispatch(orderAction.initGetUserHistory(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Members)
