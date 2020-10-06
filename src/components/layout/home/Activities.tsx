import React from 'react'

import { CgCalendarDates } from 'react-icons/cg'
import { RiBaseStationLine } from 'react-icons/ri'
import {
    BsPeopleFill,
    BsFillPersonPlusFill,
    BsFillPersonDashFill,
    BsFillPersonCheckFill,
} from 'react-icons/bs'
import { ImDownload, ImUpload } from 'react-icons/im'

const Activities = () => {
    return (
        <>
            <div className='activities'>
                <div className='activity'>
                    <CgCalendarDates className='activity__icon' />
                    <h2 className='heading-4__light'>Started Date</h2>
                    <h3 className='heading-4__dark'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <RiBaseStationLine className='activity__icon' />
                    <h2 className='heading-4__light'>Only days</h2>
                    <h3 className='heading-4__dark'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <BsPeopleFill className='activity__icon' />
                    <h2 className='heading-4__light'>Total members</h2>
                    <h3 className='heading-4__dark'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonCheckFill className='activity__icon' />
                    <h2 className='heading-4__light'>Newest Member</h2>
                    <h3 className='heading-4__dark'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonDashFill className='activity__icon' />
                    <h2 className='heading-4__light'>Total paid out</h2>
                    <h3 className='heading-4__dark'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonPlusFill className='activity__icon' />
                    <h2 className='heading-4__light'>Total Investment</h2>
                    <h3 className='heading-4__dark'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <ImDownload className='activity__icon' />
                    <h2 className='heading-4__light'>Last Deposit</h2>
                    <h3 className='heading-4__dark'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <ImUpload className='activity__icon' />
                    <h2 className='heading-4__light'>Last withdrawal</h2>
                    <h3 className='heading-4__dark'>july 5, 2020</h3>
                </div>
            </div>
        </>
    )
}

export default Activities
