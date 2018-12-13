import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class Signup extends Component {

    componentDidMount() {
        this.props.setAuthError('');
    }

    onSubmit = (formProps) => {        
        this.props.signup(formProps, () => {
            //redirect user after authenticating
            this.props.history.push('/profile');
        });
    };

    render() {

        // handleSubmit is provided to props by redux form
        const { handleSubmit } = this.props;       
        return (          
            <div>
                {this.props.errorMessage && <div className="alert alert-danger">{this.props.errorMessage}</div>}
                <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <Field 
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <Field 
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>                
                <button>Sign up</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage
});

export default compose (
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
)(Signup);
