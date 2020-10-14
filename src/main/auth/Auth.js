import React, {useState} from 'react'

const Auth = (props) => {
    console.log('the props', props.message)
    
    const [time, setTime] = useState(false)
    let messageToDisplay = props.message ? Object.values(props.message) : null
    
const timeOut = () => {
    setTime({ text: 'Loading...' }, () => {
        setTimeout(() => {
            setTime({ text: 'view cart', showParagraph: true })
        }, 2000)
    })
}
   // const timeOut = () => setTimeout(() => localStorage.setItem('clearError', 'true'), 2000)
    
   // console.log('the time', messageToDisplay)
    console.log('the state', time)
    const messageStyle = {
        display: messageToDisplay ? 'block' : 'none',
    }

    const authMessage = ['auth__message']

    if (messageToDisplay && props.message.error) {
        authMessage.length > 1
            ? authMessage.pop() && authMessage.push('auth__message--error')
            : authMessage.push('auth__message--error')
            timeOut('hello')
    }

    if (messageToDisplay && props.message.success) {
        authMessage.length > 1
            ? authMessage.pop() && authMessage.push('auth__message--success')
            : authMessage.push('auth__message--success')
            timeOut()
    }

    console.log('message display', messageToDisplay)

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
