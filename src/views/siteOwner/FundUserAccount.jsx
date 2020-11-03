import React, { useState, useEffect, useRef } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/burgerIndex'

import Card from '../../components/Card/Card'
import { prototype } from 'module'
//import { thWithdrawalArray, tdWithdrawalArray } from '../../variables/Variables'

const thWithdrawalArray = [
    'No',
    'Username',
    'Amount',
    'Currency',
    'Status',
    'Date',
]

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
            if (props.getAllFunds) {
                setAllFunds(props.getAllFunds)
            }
        }
    }, [props])

    const handleApproval = (id) => {
        props.onInitFundsApproval(id)
    }

    console.log('the ids', props.idsOfFunds, props.getAllFunds)

    return (
        <div className='content'>
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            plain
                            title='Pending Funds for Approval'
                            category='Users that want to fund their account'
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
                                                        (prop) => {
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
                                                    <button
                                                        className='btn1'
                                                        onClick={handleApproval}
                                                    >
                                                        approve
                                                    </button>
                                                    <button className='btn1'>
                                                        view
                                                    </button>
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
        idsOfFunds: state.fundAccount.idsOfFunds,
        getAllFunds: state.fundAccount.fundedAccount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetFunds: (token) => dispatch(actions.initGetFunds(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PendingDeposits)
