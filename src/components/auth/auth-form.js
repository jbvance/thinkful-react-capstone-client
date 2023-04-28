import React, { useEffect } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setAuthError } from '../../actions/index';
import { renderField } from '../utils';

export const AuthForm = (props) => {
  const onSubmit = (formProps) => {
    props.onSubmit(formProps, () => {
      props.redirect();
    });
  };

  // handleSubmit is provided to props by redux form
  const { handleSubmit } = props;
  return (
    <div>
      {props.errorMessage && (
        <div className="alert alert-danger alert-danger-box alert-center">
          {props.errorMessage}
        </div>
      )}
      <form className="card card-signin" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title-header">{props.title}</h1>
        <Field
          name="email"
          id="email"
          label="Email"
          type="text"
          component={renderField}
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
            <button className="btn btn-submit btn-login">
              {props.buttonText}
            </button>
          </div>
        </div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <p>To login as a demo user, use the following login information: </p>
          <p>email: demo@estatedox.com</p>
          <p>password: estatedox2019</p>
        </div>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password is Required';
  } else if (values.password.length < 10) {
    errors.password = 'Password must be at least 10 characters';
  }
  return errors;
};

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});

export default compose(
  connect(mapStateToProps, { setAuthError }),
  reduxForm({
    form: 'authForm',
    validate,
  })
)(AuthForm);
