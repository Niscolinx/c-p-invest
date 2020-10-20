import React from 'react'
import { Link } from 'react-router-dom'

function Features() {


    return (
        <>
            <div className='features__header'>
                <h2 className='features__header--text'>
                    Please select an investment plan
                </h2>
            </div>
            <div className='features-dashboard'>
                <div className='features-dashboard__container'>
                    <div className='feature-dashboard'>
                        <div className='feature-dashboard__icon'>
                            <h1 className='heading-1 feature-dashboard__icon-percent'>
                                20%
                            </h1>
                            <h1 className='heading-1 feature-dashboard__icon-text'>
                                Ruby
                            </h1>
                        </div>

                        <ul className='feature-dashboard__list'>
                            <li className='feature-dashboard__list-item'>
                                minimum - 1500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 2500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 3500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 4500
                            </li>
                        </ul>
                        <button className='button feature-dashboard__button'>
                            <Link to='/admin/plan-order?id=1'>Deposit Now</Link>
                        </button>
                    </div>
                    <div className='feature-dashboard'>
                        <div className='feature-dashboard__icon'>
                            <h1 className='heading-1 feature-dashboard__icon-percent'>
                                20%
                            </h1>
                            <h1 className='heading-1 feature-dashboard__icon-text'>
                                Ruby
                            </h1>
                        </div>

                        <ul className='feature-dashboard__list'>
                            <li className='feature-dashboard__list-item'>
                                minimum - 1500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 2500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 3500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 4500
                            </li>
                        </ul>
                        <button className='button feature-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>

                    <div className='feature-dashboard'>
                        <div className='feature-dashboard__icon'>
                            <h1 className='heading-1 feature-dashboard__icon-percent'>
                                20%
                            </h1>
                            <h1 className='heading-1 feature-dashboard__icon-text'>
                                Ruby
                            </h1>
                        </div>

                        <ul className='feature-dashboard__list'>
                            <li className='feature-dashboard__list-item'>
                                minimum - 1500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 2500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 3500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 4500
                            </li>
                        </ul>
                        <button className='button feature-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>
                    <div className='feature-dashboard'>
                        <div className='feature-dashboard__icon'>
                            <h1 className='heading-1 feature-dashboard__icon-percent'>
                                20%
                            </h1>
                            <h1 className='heading-1 feature-dashboard__icon-text'>
                                Ruby
                            </h1>
                        </div>

                        <ul className='feature-dashboard__list'>
                            <li className='feature-dashboard__list-item'>
                                minimum - 1500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 2500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 3500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 4500
                            </li>
                        </ul>
                        <button className='button feature-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>
                    <div className='feature-dashboard'>
                        <div className='feature-dashboard__icon'>
                            <h1 className='heading-1 feature-dashboard__icon-percent'>
                                20%
                            </h1>
                            <h1 className='heading-1 feature-dashboard__icon-text'>
                                Ruby
                            </h1>
                        </div>

                        <ul className='feature-dashboard__list'>
                            <li className='feature-dashboard__list-item'>
                                minimum - 1500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 2500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 3500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 4500
                            </li>
                        </ul>
                        <button className='button feature-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>
                    <div className='feature-dashboard'>
                        <div className='feature-dashboard__icon'>
                            <h1 className='heading-1 feature-dashboard__icon-percent'>
                                20%
                            </h1>
                            <h1 className='heading-1 feature-dashboard__icon-text'>
                                Ruby
                            </h1>
                        </div>

                        <ul className='feature-dashboard__list'>
                            <li className='feature-dashboard__list-item'>
                                minimum - 1500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 2500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 3500
                            </li>
                            <li className='feature-dashboard__list-item'>
                                minimum - 4500
                            </li>
                        </ul>
                        <button className='button feature-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
