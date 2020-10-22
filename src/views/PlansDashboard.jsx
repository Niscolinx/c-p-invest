import React from 'react'
import { Link } from 'react-router-dom'

function PlansDashboard() {


    return (
        <>
            <div className='plans__header'>
                <h2 className='plans__header--text'>
                    Please select an investment plan
                </h2>
            </div>
            <div className='plans-dashboard'>
                <div className='plans-dashboard__container'>
                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                20%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Ruby
                            </h1>
                        </div>

                        <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                AFTER <span className='plan-dashboard__list-item--span'>1</span> DAY
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum - <span className='plan-dashboard__list-item--span'>$20</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum - <span className='plan-dashboard__list-item--span'>$499</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Principal Return - <span className='plan-dashboard__list-item--span'>YES</span>
                            </li>
                        </ul>
                        <button className='button plan-dashboard__button'>
                            <Link to='/admin/plan-order/:ruby'>Deposit Now</Link>
                        </button>
                    </div>
                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                30%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Sapphire
                            </h1>
                        </div>

                       <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                AFTER <span className='plan-dashboard__list-item--span'>1</span> DAY
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum - <span className='plan-dashboard__list-item--span'>$500</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum - <span className='plan-dashboard__list-item--span'>$999</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Principal Return - <span className='plan-dashboard__list-item--span'>YES</span>
                            </li>
                        </ul>
                        <button className='button plan-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>

                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                50%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Coral
                            </h1>
                        </div>

                       <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                AFTER <span className='plan-dashboard__list-item--span'>2</span> DAYS
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum - <span className='plan-dashboard__list-item--span'>$1000</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum - <span className='plan-dashboard__list-item--span'>$1000000</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Principal Return - <span className='plan-dashboard__list-item--span'>YES</span>
                            </li>
                        </ul>
                        <button className='button plan-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>
                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                80%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Emerald
                            </h1>
                        </div>

                       <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                AFTER <span className='plan-dashboard__list-item--span'>2</span> DAYS
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum - <span className='plan-dashboard__list-item--span'>$2000</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum - <span className='plan-dashboard__list-item--span'>$1000000</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Principal Return - <span className='plan-dashboard__list-item--span'>YES</span>
                            </li>
                        </ul>
                        <button className='button plan-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>
                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                150%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Gold
                            </h1>
                        </div>

                       <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                AFTER <span className='plan-dashboard__list-item--span'>3</span> DAYS
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum - <span className='plan-dashboard__list-item--span'>$4000</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum - <span className='plan-dashboard__list-item--span'>$1000000</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Principal Return - <span className='plan-dashboard__list-item--span'>YES</span>
                            </li>
                        </ul>
                        <button className='button plan-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>
                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                200%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Diamond
                            </h1>
                        </div>

                       <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                AFTER <span className='plan-dashboard__list-item--span'>4</span> DAYS
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum - <span className='plan-dashboard__list-item--span'>$6000</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum - <span className='plan-dashboard__list-item--span'>$1000000</span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Principal Return - <span className='plan-dashboard__list-item--span'>YES</span>
                            </li>
                        </ul>
                        <button className='button plan-dashboard__button'>
                            Deposit Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlansDashboard
