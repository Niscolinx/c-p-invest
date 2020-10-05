import React from 'react'
import BitcoinGif from '../images/bitcoin-gif.gif'

function Transactions() {
    return (
        <>
            <div className='transactions'>
                <h4 className='heading-4'>Latest Deposits</h4>
                <div className='transactions__col'>
                    <img
                        src={BitcoinGif}
                        alt=''
                        className='transactions__currency'
                    />
                    <p className='transactions__amount'>$85392.00</p>
                    <h4 className='transactions__name'>Henry</h4>
                </div>
            </div>
            <div className='trasactions'>withdrawals</div>
        </>
    )
}

export default Transactions
