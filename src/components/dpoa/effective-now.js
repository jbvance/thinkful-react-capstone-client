import React from 'react';
import { Field,  reduxForm } from 'redux-form';
import validate from './validate';

const EffectiveNow = props => {
    const { handleSubmit, submitting } = props
    return (     
      <form className="card" onSubmit={handleSubmit}>     
      <div>
        <label>When should this document become effective?</label>
        <div>
          <Field name="effectiveNow" component="select">   
            <option value="false">Effective only upon my disability</option>           
            <option value="true">Effective immediately</option>                      
          </Field>
        </div>
      </div>
      <div className="wizard-btn-row">
        <button onClick={props.previousPage} className="btn btn-wizard previous">Previous</button>
        <button type="submit" disabled={submitting} className="btn btn-wizard submit">Submit</button>      
      </div>
    </form>
    )
  }
  
  export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(EffectiveNow);