import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { renderField } from '../utils';

const DpoaProfile = props => {
  const { handleSubmit } = props
  return (
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
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(DpoaProfile);