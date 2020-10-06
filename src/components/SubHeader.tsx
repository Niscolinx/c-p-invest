import React from 'react'
import {Link} from 'react-router-dom'

import { CgCalendarDates } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

import GetCurrentDate from '../util/getCurrentDate'

function SubHeader() {
    return (
        <>
            <div className='navigation'>
                <input
                    type='checkbox'
                    className='navigation__checkbox'
                    id='navi-toggle'
                />
                <label htmlFor='navi-toggle' className='navigation__button'>
                    <span className='navigation__icon'></span>
                </label>
                <div className='navigation__background'>&nbsp;</div>
                <nav className='navigation__nav'>
                    <ul className='navigation__list'>
                        <li className='navigation__item'>
                            <a href='#blank' className='navigation__link'>
                                Login
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a href='#blank' className='navigation__link'>
                                Logout
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a href='#blank' className='navigation__link'>
                                About Us
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a href='#blank' className='navigation__link'>
                                FAQ
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a href='#blank' className='navigation__link'>
                                Services
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

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
                <div className='subHeader__logo'>
                    <h2>COINPERFECTINVESTMENT</h2>
                </div>
                <ul className='subHeader__list'>
                    <a href='/' className='subHeader__list--item'>
                        <li>home</li>
                    </a>
                    <a href='/' className='subHeader__list--item'>
                        <li>services</li>
                    </a>
                    <a href='/' className='subHeader__list--item'>
                        <li>FAQ</li>
                    </a>
                    <a href='/' className='subHeader__list--item'>
                        <li>About Us</li>
                    </a>
                    <Link to='/Auth/login' className='subHeader__list--item'>
                        <li>login</li>
                    </Link>
                    <Link to='/Auth/register' className='subHeader__list--item'>
                        <li>signup</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default SubHeader
