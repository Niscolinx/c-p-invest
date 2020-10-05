import React from 'react'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer__col'>
                    <h4 className='heading-4__light'>Hello</h4>
                    <ul className='heading__list'>
                        <a href='' className='heading__link'>
                            {' '}
                            <li>Home</li>
                        </a>
                        <a href='' className='heading__link'>
                            {' '}
                            <li>Home</li>
                        </a>
                    </ul>
                </div>
                <div className='footer__col'>
                    <h4 className='heading-4__light'>Hello</h4>
                    <ul className='heading__list'>
                        <a href='' className='heading__link'>
                            <li>Home</li>
                        </a>
                        <a href='' className='heading__link'>
                            {' '}
                            <li>Home</li>
                        </a>
                        <li className='heading__list-item'>About Us</li>
                    </ul>
                </div>
                <div className='footer__col'>
                    <h4 className='heading-4__light'>Hello</h4>
                    <ul className='heading__list'>
                        <a href='' className='heading__link'>
                            {' '}
                            <li>Home</li>
                        </a>
                        <a href='' className='heading__link'>
                            {' '}
                            <li>Home</li>
                        </a>
                        <li className='heading__list-item'>About Us</li>
                    </ul>
                </div>
            </div>

            <div className='footer__copy'>
                <p className='footer__copyright'>
                    &copy; 2020 Wesycle Bringing about a more conductive
                    environment
                </p>
            </div>
        </>
    )
}

export default Footer
