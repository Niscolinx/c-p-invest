import React from 'react'

const Auth = (props) => {    
    let messageToDisplay = props.message ? Object.values(props.message) : null
    
// const timeOut = () => {
//     setTime({ text: 'Loading...' }, () => {
//         setTimeout(() => {
//             setTime({ text: 'view cart', showParagraph: true })
//         }, 2000)
//     })
// }
   // const timeOut = () => setTimeout(() => localStorage.setItem('clearError', 'true'), 2000)
    
   // console.log('the time', messageToDisplay)
    const messageStyle = {
        display: messageToDisplay ? 'block' : 'none',
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
            <p className={authMessage.join(' ')} style={messageStyle}>{messageToDisplay}</p>
            {props.children}
        </section>
    )
}

export default Auth
