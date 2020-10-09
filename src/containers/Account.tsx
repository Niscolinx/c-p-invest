import React from 'react'
import {Link} from 'react-router-dom'
import {FaWarehouse} from 'react-icons/fa'
import { ImDownload, ImUpload, ImHistory } from 'react-icons/im'
import { BsGearFill, BsPeopleFill } from 'react-icons/bs'
import {GiGears} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {GrMoney} from 'react-icons/gr'

const Account = (props:any) => {
    return (
        <div className='account'>
            <h1 className="heading-3">This is the dashboard</h1>   
            <div className="account__sidebar">
                <li className="account__list">
                    <FaWarehouse className='account__list--icon'/>
                    <Link to='/' className='account__link'>
                        Account Overview
                    </Link>
                </li>
                <li className="account__list">
                    <Link to='/' className='account__link'>
                        My Investments
                    </Link>
                </li>
                <li className="account__list">
                    <Link to='/' className='account__link'>
                        Make Deposit
                    </Link>
                </li>
                <li className="account__list">
                    <Link to='/' className='account__link'>
                        Make Withdrawal
                    </Link>
                </li>
                <li className="account__list">
                    <Link to='/' className='account__link'>
                        Investment History
                    </Link>
                </li>
                <li className="account__list">
                    <Link to='/' className='account__link'>
                        Withdrawal History
                    </Link>
                </li>
                <li className="account__list">
                    <Link to='/' className='account__link'>
                        Referrals
                    </Link>
                </li>
                <li className="account__list">
                    <Link to='/' className='account__link'>
                        Edit Account
                    </Link>
                </li>
                <li className="account__list">
                    <Link to='/' className='account__link'>
                        Security Settings
                    </Link>
                </li>
                <li className="account__list">
                    <Link to='/' className='account__link'>
                        Logout
                    </Link>
                </li>
                </div>         
        </div>
    )
}

export default Account
