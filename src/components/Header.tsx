import React from 'react'

import Logo from '../images/logo.png'
import Bitcoin from '../images/bitcoin.png'
import Dash from '../images/dash.png'
import Dogecoin from '../images/dogecoin.png'
import Ethereum from '../images/ethereum.png'
import Litecoin from '../images/litecoin.png'
import Payeer from '../images/payeer.png'
import PerfectMoney from '../images/perfectMoney.png'

function Header() {
    return (
        <>
            <img src={Logo} alt='' className='header__logo' />
            <h3 className='heading-3 header__text'>Large auctions. Huge profit</h3>
            <h1 className='heading-1'>Welcome to coinperfectinvestment.com</h1>

            <div className='header__cta'>
                <button className='btn header__btn'>Sign In</button>
                <button className='btn header__btn'>Open an account</button>
            </div>
            <div className='header__seen-on'>As seen on</div>
            <div className='header__logos'>
                <img src={Bitcoin} alt='' className='header__item' />
                <img src={Ethereum} alt='' className='header__item' />
                <img src={Dogecoin} alt='' className='header__item' />
                <img src={Dash} alt='' className='header__item' />
                <img src={Payeer} alt='' className='header__item' />
                <img src={PerfectMoney} alt='' className='header__item' />
                <img src={Litecoin} alt='' className='header__item' />
            </div>
        </>
    )
}

export default Header
