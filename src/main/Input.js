import React from 'react'
import { Link } from 'react-router-dom'

const input = (props) => {
    // <Link to='/' className='form__link'>Terms and Conditions</Link>

    console.log('props', props.touched)
    const formLink = (
        <>
            <p className='form__linkText'>
                I agree with the{' '}
                <Link to='/' className='form__link'>
                    Terms and Conditions
                </Link>
            </p>
        </>
    )

    return (
        <>
            <div className='form'>
                {props.label && (
                    <label className='form__label' htmlFor={props.id}>
                        {props.label !== 'checkbox' ? props.label : null}
                    </label>
                )}
                {props.control === 'input' && (
                    <input
                        className={[
                            'form__input',
                            !props.valid && props.touched ? 'invalid' : 'valid',
                          
                        ].join(' ')}
                        type={props.type}
                        id={props.id}
                        required={props.required}
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={(e) =>
                            props.onChange(
                                props.id,
                                e.target.value,
                                e.target.files
                            )
                        }
                        onBlur={props.onBlur}
                    />
                )}
                {props.control === 'textarea' && (
                    <textarea
                        className={[
                            'form__textarea',
                            !props.valid ? 'invalid' : 'valid',
                            props.touched ? 'touched' : 'untouched',
                        ].join(' ')}
                        id={props.id}
                        rows={props.rows}
                        required={props.required}
                        value={props.value}
                        onChange={(e) =>
                            props.onChange(props.id, e.target.value)
                        }
                        onBlur={props.onBlur}
                    />
                )}
            
                {props.label && props.control === 'checkbox' && (
                    <label className='form__checkboxLabel' htmlFor={props.id}>
                        <input
                            className={'form__checkbox'}
                            id={props.id}
                            type={props.type}
                            onChange={(e) => {
                                props.onChange(props.id, e.target.checked)
                            }}
                        />
                        {props.label === 'checkbox' ? formLink : null}
                    </label>
                )}
            </div>
        </>
    )
}

export default input
