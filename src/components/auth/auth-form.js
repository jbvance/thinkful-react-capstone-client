import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setAuthError } from '../../actions/index';
import { renderField } from '../utils';

export class AuthForm extends Component {
    
    componentDidMount() {
        this.props.setAuthError('');
    } 

    onSubmit = (formProps) => {        
        this.props.onSubmit(formProps, () => {                          
            this.props.redirect();                       
        });        
    };         
                                        
    render() {

        // handleSubmit is provided to props by redux form
        const { handleSubmit } = this.props;                 
        return (                      
            <div>
                <h1 className="title-header">{this.props.title}</h1>                  
                {this.props.errorMessage && <div className="alert alert-danger alert-danger-box alert-center">{this.props.errorMessage}</div>}
                <form className="card" onSubmit={handleSubmit(this.onSubmit)}>                
                    <Field 
                        name="email"
                        id="email"
                        label="Email"
                        type="text"
                        component={renderField}
                        validate={this.email}
                        autoComplete="none"
                    />                                                       
                        <Field 
                            name="password"
                            id="password"
                            label="Password"
                            type="password"
                            component={renderField}
                            autoComplete="none"
                        />                                                    
                    <div className="row">
                        <div className="col-100">
                            <button className="btn btn-submit">{this.props.buttonText}</button>
                        </div>                            
                    </div>                                        
                </form>
            </div>
        );
    }
}

const validate = values => {       
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Password is Required'
    } else if (values.password.length < 10) {
        errors.password = 'Password must be at least 10 characters'
    }
    return errors;
}

    

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage,    
});



export default compose (
    connect(mapStateToProps, { setAuthError }),
    reduxForm({ 
        form: 'authForm',
        validate,        
     })
)(AuthForm);
