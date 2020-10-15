import React from 'react'
import FlashMessage from 'react-flash-message'

const Auth = (props) => {    
    let messageToDisplay = props.message ? Object.values(props.message) : null
    

    const messageStyle = {
        width: messageToDisplay ? 'translateX(0)' : 'translateX(100%)',
    }

    let alertMessage;

    const authMessage = ['auth__message']

    if (messageToDisplay && props.message.error) {
        authMessage.length > 1
            ? authMessage.pop() && authMessage.push('auth__message--error')
            : authMessage.push('auth__message--error')

            alertMessage = (
                <FlashMessage
                    persistOnHover={true}
                >
                </FlashMessage>
            )
    }

    if (messageToDisplay && props.message.success) {
        authMessage.length > 1
            ? authMessage.pop() && authMessage.push('auth__message--success')
            : authMessage.push('auth__message--success')

            alertMessage = (
                <FlashMessage
                    className='auth__alert'
                    persistOnHover={true}
                >
                    <p className={authMessage.join(' ')}>{messageToDisplay}</p>{' '}
                </FlashMessage>
            )
    }

    console.log('the alert message', alertMessage)


    return (
        <section
            className={props.login ? 'auth-form auth-form__login' : 'auth-form'}
        >
            {alertMessage}

            {props.children}
        </section>
    )
}

export default Auth
