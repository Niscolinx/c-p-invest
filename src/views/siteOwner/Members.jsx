import React, { Component } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import * as orderAction from '../../store/actions/burgerIndex'

import Card from '../../components/Card/Card'
//import { thWithdrawalArray, tdWithdrawalArray } from '../../variables/Variables'

const thWithdrawalArray = ['ID', 'Amount', 'Status', 'Method', 'Date']
const tdWithdrawalArray = [
    ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout', 'October'],
    ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout', 'October'],
    ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout', 'October'],
]

class Members extends Component {
    componentDidMount() {
        if (this.props.tokenId) {
            this.props.onInitGetUsers(this.props.tokenId)
        }

        console.log('get all users', this.props.getUsers)
    }

    render() {
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
                                            {tdWithdrawalArray.map(
                                                (prop, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            {prop.map(
                                                                (prop, key) => {
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        getUsers: state.user.getUsers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetUsers: (token) => dispatch(orderAction.initGetUsers(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Members)
