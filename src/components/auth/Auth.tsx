import React from 'react';

const auth = (props:any) => <section className={props.login ? 'auth-form auth-form__login': 'auth-form'}>{props.children}</section>;

export default auth;
