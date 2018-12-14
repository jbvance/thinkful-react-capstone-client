import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/index';
import AuthForm from './auth-form';

export class Signup extends React.Component {
    redirect() {
        this.props.history.push('/profile');
    }

    render() {        
        return (
            <AuthForm onSubmit={this.props.signup} title="Sign Up" redirect={() => this.redirect()}/>
        )
    }
}

export default connect(
    null,
    { signup }
)(Signup);