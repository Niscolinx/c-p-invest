import React from 'react'
import Realtor1 from '../images/realtor-1.jpeg'
import Realtor2 from '../images/realtor-2.jpeg'
import Realtor3 from '../images/realtor-3.jpeg'

function Realtors() {
    return (
        <>
            <h3 className='heading-3 realtors__heading'>Top 3 Realtors</h3>
            <div className='realtor__list'>

                <img src={Realtor1} alt='' className='realtor__img' />
                <div className='realtor__details'>
                    <h4 className='heading-4 realtor__name'>Erik Fienman</h4>
                    <p className='realtor__house'>245 Houses sold</p>
                </div>

                <img src={Realtor2} alt='' className='realtor__img' />
                <div className='realtor__details'>
                    <h4 className='heading-4 realtor__name'>Frank Richard</h4>
                    <p className='realtor__house'>215 Houses sold</p>
                </div>

                <img src={Realtor3} alt='' className='realtor__img' />
                <div className='realtor__details'>
                    <h4 className='heading-4 realtor__name'>Tom Ramsey</h4>
                    <p className='realtor__house'>184 Houses sold</p>
                </div>
            </div>
        </>
    )
}

export default Realtors
