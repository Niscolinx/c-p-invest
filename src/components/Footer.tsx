import React from 'react'

import { AiFillPhone } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer__col'>
                    <h4 className='heading-4__light footer__header'>
                        Useful Links
                    </h4>
                    <ul className='footer__list'>
                        <a href='' className='footer__link'>
                            {' '}
                            <li>Terms and Conditions</li>
                        </a>
                        <a href='' className='footer__link'>
                            {' '}
                            <li>About Us</li>
                        </a>
                        <a href='' className='footer__link'>
                            {' '}
                            <li>Contact Us</li>
                        </a>
                    </ul>
                </div>
                <div className='footer__col'>
                    <h4 className='heading-4__light footer__header'>
                        Company Info
                    </h4>
                    <ul className='footer__list'>
                        <li className='footer__list--item'>
                            THE REDWOOD SUPPLIER (FL) LIMITED
                        </li>
                        <li className='footer__list--item'>
                            FINNISH COMPANY #10594357
                        </li>
                    </ul>
                </div>
                <div className='footer__col'>
                    <h4 className='heading-4__light footer__header'>
                        contact Us
                    </h4>
                    <ul className='footer__list'>
                        <li className='footer__list--item'>
                            <ImLocation2 className='footer__list--icon' />
                            MARTINPOLKU 74, KOUVOLA, FINLAND
                        </li>
                        <li className='footer__list--item'>
                            <AiFillPhone className='footer__list--icon' />
                            +358407046126
                        </li>
                    </ul>
                </div>
            </div>

            <div className='footer__copyright'>
                <p className='footer__copy'>
                    copyright 2020 &copy; coinperfectinvestment.com all rights
                    reserved
                </p>
            </div>
        </>
    )
}

export default Footer
