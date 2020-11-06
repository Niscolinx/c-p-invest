import React from 'react'
import { connect } from 'react-redux'

import { CgCalendarDates } from 'react-icons/cg'
import { RiBaseStationLine } from 'react-icons/ri'
import {
    BsPeopleFill,
    BsFillPersonPlusFill,
    BsFillPersonDashFill,
    BsFillPersonCheckFill,
} from 'react-icons/bs'
import { ImDownload, ImUpload } from 'react-icons/im'

const Activities = (props) => {
    

    if(props.activities){
        console.log('the props of activities', props.activities)
    }
    return (
        <>
            <div className='activities'>
                <div className='activity'>
                    <CgCalendarDates className='activity__icon' />
                    <h2 className='heading-4__light'>Started Date</h2>
                    <h3 className='heading-4__dark'>july 5, 2010</h3>
                </div>
                <div className='activity'>
                    <RiBaseStationLine className='activity__icon' />
                    <h2 className='heading-4__light'>Online days</h2>
                    <h3 className='heading-4__dark'>4005</h3>
                </div>
                <div className='activity'>
                    <BsPeopleFill className='activity__icon' />
                    <h2 className='heading-4__light'>Total members</h2>
                    <h3 className='heading-4__dark'>679,579</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonCheckFill className='activity__icon' />
                    <h2 className='heading-4__light'>Newest Member</h2>
                    <h3 className='heading-4__dark'>LAWSON23</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonDashFill className='activity__icon' />
                    <h2 className='heading-4__light'>Total paid out</h2>
                    <h3 className='heading-4__dark'>$213,879,015+</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonPlusFill className='activity__icon' />
                    <h2 className='heading-4__light'>Total Investments</h2>
                    <h3 className='heading-4__dark'>$355,406,804+</h3>
                </div>
                <div className='activity'>
                    <ImDownload className='activity__icon' />
                    <h2 className='heading-4__light'>Last Deposit</h2>
                    <h3 className='heading-4__dark'>$57 (Francis1)</h3>
                </div>
                <div className='activity'>
                    <ImUpload className='activity__icon' />
                    <h2 className='heading-4__light'>Last withdrawal</h2>
                    <h3 className='heading-4__dark'>$4821 (MICHEAL12)</h3>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log('the state of Activities', state)
    return {
        activities: state.auth.activities,
    }
}

export default connect(mapStateToProps)(Activities)
