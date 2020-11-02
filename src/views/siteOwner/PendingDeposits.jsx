import React, { useState, useEffect, useRef } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/burgerIndex'

import Card from '../../components/Card/Card'
//import { thWithdrawalArray, tdWithdrawalArray } from '../../variables/Variables'

const thWithdrawalArray = ['No', 'Username', 'Email', 'Status', 'Date']

const PendingDeposits = (props) => {
    const [allFunds, setAllFunds] = useState([])

    const gottenAllFunds = useRef()
    useEffect(() => {
        if (!gottenAllFunds.current) {
            if (props.tokenId) {
                props.onInitGetFunds(props.tokenId)
            }
            gottenAllFunds.current = true
        } else {
            if (props.getUsers) {
                setAllFunds(props.getUsers)
            }
        }
    }, [props])

    console.log('the get all users', allFunds)

    return (
        <div className='content'>
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            plain
                            title='Members'
                            category=''
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
                                        {allFunds.map((prop, key) => {
                                            console.log('props', prop)
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
    console.log('pending deposits', state)
    return {
        loading: state.user.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        getFunds: state.dashboard.fundedAccount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetFunds: (token) => dispatch(actions.initGetFunds(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PendingDeposits)
