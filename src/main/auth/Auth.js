import React from 'react'

const Auth = (props) => {    
    let messageToDisplay = props.message ? Object.values(props.message) : null
    

    const messageStyle = {
        width: messageToDisplay ? 'translateX(0)' : 'translateX(100%)',
    }


    const authMessage = ['auth__message']

    if (messageToDisplay && props.message.error) {
        authMessage.length > 1
            ? authMessage.pop() && authMessage.push('auth__message--error')
            : authMessage.push('auth__message--error')
    }

    if (messageToDisplay && props.message.success) {
        authMessage.length > 1
            ? authMessage.pop() && authMessage.push('auth__message--success')
            : authMessage.push('auth__message--success')
    }


    return (
        <section
            className={props.login ? 'auth-form auth-form__login' : 'auth-form'}
        >
            <p className={authMessage.join(' ')} style={messageStyle}>
                {messageToDisplay}
            </p>
            {props.children}
            {props.children}
        </section>
    )
}

export default Auth
