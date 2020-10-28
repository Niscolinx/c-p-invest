import React from 'react'

function PlanConfirmation(props) {
    console.log('confirmation props', props)
    return (
        <div className='deposit'>
            <h3 className='deposit__heading'>Deposit Confirmation</h3>

            <div className='deposit__info'>
                <p className='deposit__info--left'>Plan</p>
                <p className='deposit__info--right'>Diamond</p>
                <p className='deposit__info--left'>Profit</p>
                <p className='deposit__info--right'>Diamond</p>
                <p className='deposit__info--left'>Plan</p>
                <p className='deposit__info--right'>Diamond</p>
                <p className='deposit__info--left'>Plan</p>
                <p className='deposit__info--right'>Diamond</p>
                <p className='deposit__info--left'>Plan</p>
                <p className='deposit__info--right'>Diamond</p>
                <p className='deposit__info--left'>Plan</p>
                <p className='deposit__info--right'>Diamond</p>
            </div>
          
        </div>
    )
}

export default PlanConfirmation
