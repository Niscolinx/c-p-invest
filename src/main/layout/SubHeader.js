import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { CgCalendarDates } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

import GetCurrentDate from '../../util/getCurrentDate'

function SubHeader(props) {
    const [checked, setChecked] = useState(false)

    const collapseMenu = () => {
        setChecked((old) => !old)
    }

    const auth = 'sjfsfsfsfdssf'

    let nav = (
        <>
            <li className='navigation__item'>
                <Link
                    to='/Auth/login'
                    className='navigation__link'
                    onClick={() => {
                        collapseMenu()
                    }}
                >
                    Login
                </Link>
            </li>
            <li className='navigation__item'>
                <Link
                    to='/Auth/signup'
                    className='navigation__link'
                    onClick={() => {
                        collapseMenu()
                    }}
                >
                    Signup
                </Link>
            </li>
        </>
    )

    let mobileNav = (
        <>
            <Link to='/Auth/login' className='subHeader__list--item'>
                <li>login</li>
            </Link>
            <Link to='/Auth/signup' className='subHeader__list--item'>
                <li>signup</li>
            </Link>
        </>
    )

    if (auth) {
        nav = (
            <>
                <li className='navigation__item'>
                    <Link
                        to='/admin/dashboard'
                        className='navigation__link'
                        onClick={() => {
                            collapseMenu()
                        }}
                    >
                        Dashboard
                    </Link>
                </li>
            </>
        )

        mobileNav = (
            <>
                <Link
                    to='/admin/dashboard'
                    className='subHeader__list--item subHeader__list-item--dashboard'
                >
                    <li>Dashboard</li>
                </Link>
            </>
        )
    }

    console.log('the auth nav', auth)
    return (
        <>
            <div className='navigation'>
                <input
                    onClick={() => {
                        collapseMenu()
                    }}
                    checked={checked}
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
                        {nav}
                        <li className='navigation__item'>
                            <Link
                                to='/about-us'
                                className='navigation__link'
                                onClick={() => {
                                    collapseMenu()
                                }}
                            >
                                About Us
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <Link
                                to='/Auth/account'
                                className='navigation__link'
                                onClick={() => {
                                    collapseMenu()
                                }}
                            >
                                FAQ
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <Link
                                to='#blank'
                                className='navigation__link'
                                onClick={() => {
                                    collapseMenu()
                                }}
                            >
                                Services
                            </Link>
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
                    <Link to='/' className='subHeader__list--item'>
                        <li>home</li>
                    </Link>
                    <Link to='/' className='subHeader__list--item'>
                        <li>services</li>
                    </Link>
                    <Link to='#blank' className='subHeader__list--item'>
                        <li>FAQ</li>
                    </Link>
                    <Link to='/about-us' className='subHeader__list--item'>
                        <li>About Us</li>
                    </Link>
                </ul>
                <ul className='subHeader__list'>{mobileNav}</ul>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.tokenId,
    }
}

export default connect(mapStateToProps)(SubHeader)
