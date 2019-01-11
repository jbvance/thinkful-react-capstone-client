import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/index';
import AuthForm from './auth-form';

    const redirect = (props) => {        
        props.history.push('/start');
    }

   export const Signin = (props) => {       
        return (
            <AuthForm onSubmit={props.signin} title="Sign In" buttonText="Submit" redirect={() => redirect(props)}/>
        )
    }

export default connect(
    null,
    { signin }
)(Signin);