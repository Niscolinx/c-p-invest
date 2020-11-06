import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import EthereumGif from '../../../images/ethereum.png'
import BitcoinGif from '../../../images/bitcoin-gif.gif'

function Transactions(props) {
    const [latestDeposits, setLatestDeposits] = useState([])
    const [latestWithdrawals, setLatestWithdrawals] = useState([])

    useEffect(() => {
        if (props.latestDeposits) {
            setLatestDeposits(props.latestDeposits)
        }

        if(props.latestWithdrawals){
            setLatestWithdrawals(props.latestWithdrawals)
        }
    }, [props])

    console.log('the transaction', latestDeposits, latestWithdrawals)

    return (
        <>
            <div className='transactions'>
                <h4 className='heading-4 transactions__heading mb-sm'>
                    Latest Deposits
                </h4>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$57.00</p>

                    <p className='transactions__date'>Oct-28-2020</p>
                    <h4 className='transactions__name'>Francis1</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$853.00</p>

                    <p className='transactions__date'>Oct-28-2020</p>
                    <h4 className='transactions__name'>Peter107</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$902.00</p>

                    <p className='transactions__date'>Oct-28-2020</p>
                    <h4 className='transactions__name'>Reginald89</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$5392.00</p>

                    <p className='transactions__date'>Oct-28-2020</p>
                    <h4 className='transactions__name'>Angelia</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$892.00</p>

                    <p className='transactions__date'>Oct-27-2020</p>
                    <h4 className='transactions__name'>Bahk103</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$719.00</p>

                    <p className='transactions__date'>Oct-27-2020</p>
                    <h4 className='transactions__name'>Stephen01</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$3092.00</p>

                    <p className='transactions__date'>Oct-27-2020</p>
                    <h4 className='transactions__name'>Lee</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$112.00</p>

                    <p className='transactions__date'>Oct-26-2020</p>
                    <h4 className='transactions__name'>AslanLion</h4>
                </div>
            </div>
            <div className='transactions'>
                <h4 className='heading-4 transactions__heading mb-sm'>
                    Latest Withdrawals
                </h4>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$4821.00</p>

                    <p className='transactions__date'>Oct-28-2020</p>
                    <h4 className='transactions__name'>MICHEAL12</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$780.00</p>

                    <p className='transactions__date'>Oct-28-2020</p>
                    <h4 className='transactions__name'>Henry2</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$1231.00</p>

                    <p className='transactions__date'>Oct-28-2020</p>
                    <h4 className='transactions__name'>Lion001</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$630.00</p>

                    <p className='transactions__date'>Oct-27-2020</p>
                    <h4 className='transactions__name'>Fabio</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$28.00</p>

                    <p className='transactions__date'>Oct-27-2020</p>
                    <h4 className='transactions__name'>Joan</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$4651.00</p>

                    <p className='transactions__date'>Oct-27-2020</p>
                    <h4 className='transactions__name'>Loveline112</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$117.00</p>

                    <p className='transactions__date'>Oct-27-2020</p>
                    <h4 className='transactions__name'>Lugard32</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$49.00</p>

                    <p className='transactions__date'>Oct-26-2020</p>
                    <h4 className='transactions__name'>Timothy</h4>
                </div>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$312.00</p>

                    <p className='transactions__date'>Oct-26-2020</p>
                    <h4 className='transactions__name'>Elizabeth</h4>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        latestWithdrawals: state.auth.latestWithdrawals,
        latestDeposits: state.auth.latestDeposits,
    }
}

export default connect(mapStateToProps)(Transactions)
