import React, { Component } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'

import Card from '../../components/Card/Card'
//import { thWithdrawalArray, tdWithdrawalArray } from '../../variables/Variables'

const thWithdrawalArray = ['ID', 'Amount', 'Status', 'Method', 'Date']
const tdWithdrawalArray = [
    ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout', 'October'],
    ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout', 'October'],
    ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout', 'October'],
]

class TableList extends Component {
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

export default TableList
