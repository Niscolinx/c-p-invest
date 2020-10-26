import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'

const AdvancedRealChart = () => (
    <TradingViewWidget
        symbol='NASDAQ:AAPL'
        theme={Themes.DARK}
        locale='en'
        autosize
    />
)

export default AdvancedRealChart
