import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/index';
import AuthForm from './auth-form';

export class Signin extends React.Component {
    redirect() {
        this.props.history.push('/profile');
    }

    render() {       
        return (
            <AuthForm onSubmit={this.props.signin} title="Sign In" buttonText="Login" redirect={() => this.redirect()}/>
        )
    }
}

export default connect(
    null,
    { signin }
)(Signin);