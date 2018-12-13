import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setAuthError } from '../../actions/index';

export class AuthForm extends Component {
    
    componentDidMount() {
        this.props.setAuthError('');
    } 

    onSubmit = (formProps) => {        
        this.props.onSubmit(formProps, () => {                          
            this.props.redirect();                       
        });
    };     

    renderField = ({   
        id,     
        input,
        label,
        type,
        meta: { touched, error, warning }
      }) => {                   
          return (           
            <li>
                <label htmlFor={id}>{label}</label>
                <input {...input } placeholder={label} type={type} />  
                {touched &&
                    ((error && <span>{error}</span>) ||
                      (warning && <span>{warning}</span>))}            
            </li>  
                                                               
        )};
                  
                        

    render() {

        // handleSubmit is provided to props by redux form
        const { handleSubmit } = this.props;           
        return (          
            <div>                
                {this.props.errorMessage && <div className="alert alert-danger">{this.props.errorMessage}</div>}
                <form onSubmit={handleSubmit(this.onSubmit)}>
                <ul className="flex-outer">
                    <Field 
                        name="email"
                        id="email"
                        label="Email"
                        type="text"
                        component={this.renderField}
                        validate={this.email}
                        autoComplete="none"
                    />                                                       
                        <Field 
                            name="password"
                            id="password"
                            label="Password"
                            type="password"
                            component={this.renderField}
                            autoComplete="none"
                        />                                                    
                    <li>
                        <button className="btn">Sign up</button>
                    </li>
                </ul>             
                
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
    }
    //console.log('ERRORS', errors);
    return errors;
}

    

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage
});



export default compose (
    connect(mapStateToProps, { setAuthError }),
    reduxForm({ 
        form: 'signup',
        validate  
     })
)(AuthForm);
