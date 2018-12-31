import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { renderField } from '../utils';

const DpoaProfile = props => {
  const { handleSubmit } = props
  return (
    <div className="card">
      <div className="card-heading">
        <h3>Step 1: Enter you contact information</h3>
        <p>This information will be used to identify you as the principal (the person creating the power of attorney).</p>
      </div>
      <form className="card" onSubmit={handleSubmit}>
        <Field
          name="fullName"
          type="text"
          component={renderField}
          label="Full Name"
          placeholder="Full legal name, including middle name or initial (if any)"
        />      
        <Field
          name="address"
          type="text"
          component={renderField}
          label="Address"
          placeholder="Full address (including city, state, zip)"
        />
        <div className="wizard-btn-row">
          <button className="next btn btn-submit btn-wizard" type="submit">
            Next
          </button>       
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(DpoaProfile);