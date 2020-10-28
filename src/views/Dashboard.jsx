import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { Card } from '../components/Card/Card'
import { StatsCard } from '../components/StatsCard/StatsCard'
import {
    dataPie,
    legendPie,
} from '../variables/Variables'

import CrytoMarketWatch from '../tradeviewWidgets/CryptoMarketWatch'

class Dashboard extends Component {
    createLegend(json) {
        var legend = []
        for (var i = 0; i < json['names'].length; i++) {
            var type = 'fa fa-circle text-' + json['types'][i]
            legend.push(<i className={type} key={i} />)
            legend.push(' ')
            legend.push(json['names'][i])
        }
        return legend
    }



    render() {
        return (
            <div className='content'>
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={
                                    <i className='pe-7s-server text-warning' />
                                }
                                statsText='Account Balance'
                                statsValue='$0'
                                statsIcon={<i className='fa fa-refresh' />}
                                statsIconText='Always updated'
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={
                                    <i className='pe-7s-wallet text-success' />
                                }
                                statsText='Total Withdrawal'
                                statsValue='$0'
                                statsIcon={<i className='fa fa-calendar-o' />}
                                statsIconText='Always updated'
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={
                                    <i className='pe-7s-graph1 text-danger' />
                                }
                                statsText='Total Deposit'
                                statsValue='$0'
                                statsIcon={<i className='fa fa-clock-o' />}
                                statsIconText='Always updated'
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className='pe-7s-cash text-info' />}
                                statsText='Total Earnings'
                                statsValue='$0'
                                statsIcon={<i className='fa fa-refresh' />}
                                statsIconText='Always updated'
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '4rem' }}>
                        <Col md={8}>
                            <div style={{ height: '70vh' }}>
                                <CrytoMarketWatch />
                            </div>
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon='fa fa-clock-o'
                                title='Transactions'
                                category='investment activities'
                                stats='Always Updated'
                                content={
                                    <div
                                        id='chartPreferences'
                                        className='ct-chart ct-perfect-fourth'
                                    >
                                        <ChartistGraph
                                            data={dataPie}
                                            type='Pie'
                                        />
                                    </div>
                                }
                                legend={
                                    <div className='legend'>
                                        {this.createLegend(legendPie)}
                                    </div>
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
        err: state.auth.error,
        loading: state.order.loading,
        redirectToLoginPage: state.auth.redirect,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //onInitGetUser: (token) => dispatch(actionTypes.initGetUser(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
