import React from 'react'

import { CgCalendarDates } from 'react-icons/cg'
import { RiBaseStationLine } from 'react-icons/ri'
import {
    BsPeopleFill,
    BsJustifyLeft,
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
                    <h2 className='heading-2'>Started Date</h2>
                    <h3 className='heading-3'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <RiBaseStationLine className='activity__icon' />
                    <h2 className='heading-2'>Started Date</h2>
                    <h3 className='heading-3'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <BsPeopleFill className='activity__icon' />
                    <h2 className='heading-2'>Started Date</h2>
                    <h3 className='heading-3'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <BsJustifyLeft className='activity__icon' />
                    <h2 className='heading-2'>Started Date</h2>
                    <h3 className='heading-3'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonCheckFill className='activity__icon' />
                    <h2 className='heading-2'>Started Date</h2>
                    <h3 className='heading-3'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonDashFill className='activity__icon' />
                    <h2 className='heading-2'>Started Date</h2>
                    <h3 className='heading-3'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonPlusFill className='activity__icon' />
                    <h2 className='heading-2'>Started Date</h2>
                    <h3 className='heading-3'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <ImDownload className='activity__icon' />
                    <h2 className='heading-2'>Started Date</h2>
                    <h3 className='heading-3'>july 5, 2020</h3>
                </div>
                <div className='activity'>
                    <ImUpload className='activity__icon' />
                    <h2 className='heading-2'>Started Date</h2>
                    <h3 className='heading-3'>july 5, 2020</h3>
                </div>
            </div>
        </>
    )
}

export default Activities
