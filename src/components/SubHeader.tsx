import React from 'react'

import { CgCalendarDates } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

import GetCurrentDate from '../util/getCurrentDate'


function SubHeader() {
    return (
        <>
            <div className='header__submenu'>
                <CgCalendarDates className='header__submenu--logo' />
                <div className='header__submenu--text'>
                    <GetCurrentDate />
                </div>

                <AiFillPhone className='header__submenu--logo' />
                <p className='header__submenu--text'>+32352342422</p>

                <MdEmail className='header__submenu--logo' />
                <p className='header__submenu--text'>
                    Support@coinperfectinvest.com
                </p>
            </div>

            <nav className='header__nav'>
                <ul className='header__list'>
                    <a href='' className='header__list--item'>
                        <li>home</li>
                    </a>
                    <a href='' className='header__list--item'>
                        <li>home</li>
                    </a>
                    <a href='' className='header__list--item'>
                        <li>home</li>
                    </a>
                    <a href='' className='header__list--item'>
                        <li>home</li>
                    </a>
                    <a href='' className='header__list--item'>
                        <li>home</li>
                    </a>
                    <a href='' className='header__list--item'>
                        <li>home</li>
                    </a>
                </ul>
            </nav>
        </>
    )
}

export default SubHeader
