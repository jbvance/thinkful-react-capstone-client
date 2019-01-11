import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/index';
import AuthForm from './auth-form';

const redirect = (props) => {   
    props.history.push('/start');
}

export const Signup = (props) => {        
    return (
        <AuthForm onSubmit={props.signup} title="Sign Up" buttonText="Create account" redirect={() => redirect(props)}/>
    )
}

export default connect(
    null,
    { signup }
)(Signup);