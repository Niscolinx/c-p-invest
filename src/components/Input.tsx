import React from 'react'

const input = (props: any) => {
    console.log('the inputs', props)

    return (
        <>
            <div className='form'>
                {props.label && (
                    <label className='form__label' htmlFor={props.id}>
                        {props.label}
                    </label>
                )}
                {props.control === 'input' && (
                    <input
                        className={[
                            'form__input',
                            !props.valid ? 'invalid' : 'valid',
                            props.touched ? 'touched' : 'untouched',
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
            </div>
        </>
    )
}

export default input
