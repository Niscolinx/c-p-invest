import React from 'react'

import { CgCalendarDates } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

import GetCurrentDate from '../util/getCurrentDate'


function SubHeader() {
    return (
        <>
            <div className='subHeader__contact'>
                <CgCalendarDates className='subHeader__contact--logo' />
                <div className='subHeader__contact--text'>
                    <GetCurrentDate />
                </div>

                <AiFillPhone className='subHeader__contact--logo' />
                <p className='subHeader__contact--text'>+32352342422</p>

                <MdEmail className='subHeader__contact--logo' />
                <p className='subHeader__contact--text'>
                    Support@coinperfectinvest.com
                </p>
            </div>

            <nav className='subHeader__nav'>
                <div className="subHeader__logo">
                    <h2>COINPERFECTINVESTMENT</h2>
                </div>
                <ul className='subHeader__list'>
                    <a href='' className='subHeader__list--item'>
                        <li>home</li>
                    </a>
                    <a href='' className='subHeader__list--item'>
                        <li>services</li>
                    </a>
                    <a href='' className='subHeader__list--item'>
                        <li>plans</li>
                    </a>
                    <a href='' className='subHeader__list--item'>
                        <li>About Us</li>
                    </a>
                    <a href='' className='subHeader__list--item'>
                        <li>login</li>
                    </a>
                    <a href='' className='subHeader__list--item'>
                        <li>signup</li>
                    </a>
                </ul>
            </nav>
        </>
    )
}

export default SubHeader
