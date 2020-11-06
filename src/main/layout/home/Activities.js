import React, { useState, useEffect } from 'react'
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
    const [onlineDays, setOnlineDays] = useState(4005)
    const [totalMembers, setTotalMembers] = useState(642, 424)
    const [totalPaidOut, setTotalPaidOut] = useState(202, 542, 420)
    const [totalInvestments, setTotalInvestments] = useState(342, 322, 523)
    const [newestMember, setNewestMember] = useState('Lawson2')
    const [lastDepositName, setLastDepositName] = useState('Micheal04')
    const [lastDepositAmount, setLastDepositAmount] = useState('3,224')
    const [lastWithdrawalAmount, setLastWithdrawalAmount] = useState('9,032')
    const [lastWithdrawalName, setLastWithdrawalName] = useState('Johnson')

    useEffect(() => {
        if (props.activities) {
            const activity = props.activities
            console.log('the props of activities', props.activities)

            setOnlineDays(activity.onlineDays)
            setTotalMembers(activity.totalMembers)
            setTotalPaidOut(activity.totalPaidOut)
            setTotalInvestments(activity.totalInvestments)
            setNewestMember(activity.newestMember)
            setLastDepositName(activity.lastDepositAmount)
            setLastDepositAmount(activity.lastDepositAmount)
            setLastWithdrawalAmount(activity.lastWithdrawalAmount)
            setLastWithdrawalName(activity.lastWithdrawalName)
        }
    }, [props.activities])

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
                    <h3 className='heading-4__dark'>{onlineDays}</h3>
                </div>
                <div className='activity'>
                    <BsPeopleFill className='activity__icon' />
                    <h2 className='heading-4__light'>Total members</h2>
                    <h3 className='heading-4__dark'>{totalMembers}</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonCheckFill className='activity__icon' />
                    <h2 className='heading-4__light'>Newest Member</h2>
                    <h3 className='heading-4__dark'>{newestMember}</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonDashFill className='activity__icon' />
                    <h2 className='heading-4__light'>Total paid out</h2>
                    <h3 className='heading-4__dark'>${totalPaidOut}+</h3>
                </div>
                <div className='activity'>
                    <BsFillPersonPlusFill className='activity__icon' />
                    <h2 className='heading-4__light'>Total Investments</h2>
                    <h3 className='heading-4__dark'>${totalInvestments}+</h3>
                </div>
                <div className='activity'>
                    <ImDownload className='activity__icon' />
                    <h2 className='heading-4__light'>Last Deposit</h2>
                    <h3
                        className='heading-4__dark'
                        style={{ textTransform: 'uppercase' }}
                    >
                        ${lastDepositAmount} {lastDepositName}
                    </h3>
                </div>
                <div className='activity'>
                    <ImUpload className='activity__icon' />
                    <h2 className='heading-4__light'>Last withdrawal</h2>
                    <h3
                        className='heading-4__dark'
                        style={{ textTransform: 'uppercase' }}
                    >
                        ${lastWithdrawalAmount} {lastWithdrawalName}
                    </h3>
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
