import React from 'react'

import Logo from '../images/logo.png'
import BBC from '../images/logo-bbc.png'
import Forbes from '../images/logo-forbes.png'
import Techcrunch from '../images/logo-techcrunch.png'
import BusinessInsider from '../images/logo-bi.png'

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
                <img src={BBC} alt='' className='header__item' />
                <img src={Forbes} alt='' className='header__item' />
                <img src={Techcrunch} alt='' className='header__item' />
                <img src={BusinessInsider} alt='' className='header__item' />
            </div>
        </>
    )
}

export default Header
