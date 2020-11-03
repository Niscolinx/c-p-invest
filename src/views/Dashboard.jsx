import React, { useState, useEffect } from 'react'
import ChartistGraph from 'react-chartist'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { Card } from '../components/Card/Card'
import { StatsCard } from '../components/StatsCard/StatsCard'
import { dataPie, legendPie } from '../variables/Variables'

import CrytoMarketWatch from '../tradeviewWidgets/CryptoMarketWatch'

const Dashboard = (props) => {
   const createLegend = (json) =>{
        var legend = []
        for (var i = 0; i < json['names'].length; i++) {
            var type = 'fa fa-circle text-' + json['types'][i]
            legend.push(<i className={type} key={i} />)
            legend.push(' ')
            legend.push(json['names'][i])
        }
        return legend
    }

    //Have to fetch the user account balance
    const [userFunds, setUserFunds] = useState(0)

    useEffect(() => {
        let fundedAmount = userFunds
        if(props.userFundAccount.length > 0){
            console.log('the props of funds', props.userFundAccount)

            props.userFundAccount.map(f => {
                console.log('the inner', f.amount)
               fundedAmount += Number(f.amount)
            })

            console.log('the fund amount', fundedAmount)
            setUserFunds(fundedAmount)
        }
    }, [props])

    const displayUserFunds = `$${userFunds}`

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
                                statsValue= {displayUserFunds}
                                statsIcon={<i className='fa fa-refresh' />}
                                statsIconText='Updated now'
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
                                statsIconText='Updated now'
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
                                statsIconText='Updated now'
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className='pe-7s-cash text-info' />}
                                statsText='Total Earnings'
                                statsValue='$0'
                                statsIcon={<i className='fa fa-refresh' />}
                                statsIconText='Updated now'
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
                                stats='Updated now'
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
                                        {createLegend(legendPie)}
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
}

const mapStateToProps = (state) => {
    console.log('dashboard state', state)
    return {
        err: state.auth.error,
        loading: state.user.loading,
        redirectToLoginPage: state.auth.redirect,
        tokenId: state.auth.tokenId,
        userFundAccount: state.auth.userFundAccount,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //onInitGetUser: (token) => dispatch(actionTypes.initGetUser(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
