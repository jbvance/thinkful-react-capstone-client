import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from './validate';
import  { renderField }  from '../utils';


const renderAgents = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <div>
      <button type="button" className="btn btn-wizard btn-wizard--add-agent" onClick={() => fields.push({})}>
        Add Agent
      </button>
      </div>
      <div>
        {submitFailed && error && <span class="alert alert-danger">{error}</span>}
      </div>
     
    </li>
    {fields.map((agent, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Agent"
          onClick={() => fields.remove(index)}
        />
        <h4>Agent No. {index + 1}</h4>
        <Field
          name={`${agent}.firstName`}
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name={`${agent}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
        />       
      </li>
    ))}
  </ul>
)

const DpoaAgents = props => {
  const { handleSubmit, submitting } = props
  return (     
    <form onSubmit={handleSubmit}>     
    <FieldArray name="agents" component={renderAgents} />
    <div className="wizard-btn-row">
      <button onClick={props.previousPage} className="btn btn-wizard previous">Previous</button>
      <button type="submit" disabled={submitting} className="btn btn-wizard">Next</button>      
    </div>
  </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(DpoaAgents);