import React from 'react'

import GetCurrentDate from '../util/getCurrentDate'

import Logo from '../images/logo.png'
import BBC from '../images/logo-bbc.png'
import Forbes from '../images/logo-forbes.png'
import Techcrunch from '../images/logo-techcrunch.png'
import BusinessInsider from '../images/logo-bi.png'

import { CgCalendarDates } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

function Header() {
    return (
        <>
            <div className='header__submenu'>
                <div className='header__submenu--1'>
                    <CgCalendarDates  className='header__submenu--logo'/>
                    <GetCurrentDate />
                </div>
                <div className='header__submenu--2'>
                    <AiFillPhone  className='header__submenu--logo'/>
                    <p>+32352342422</p>
                </div>
                <div className='header__submenu--3'>
                    <MdEmail className='header__submenu--logo'/>
                    <p>Support@coinperfectinvest.com</p>
                </div>
            </div>
            <img src={Logo} alt='' className='header__logo' />
            <h3 className='header__text'>Your own home</h3>
            <h1 className='heading-1'>The Ultimate personal freedom</h1>
            <button className='btn header__btn'>View our properties</button>
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
