import React from 'react';
import PropTypes from 'prop-types';
import { Field,  reduxForm } from 'redux-form';
import validate from './validate';
import { renderSelect } from '../utils';

export const EffectiveNow = props => {
    const { handleSubmit, submitting } = props
    return ( 
      <div className="card"> 
        <div className="card-heading">
          <h3>Step 3: When should this document become effective?</h3>
          <p>
            If you select "Effective only upon my disability", your agent(s) will
            not be able to act on your behalf until your doctor has determined that you are
            unable to manage your own affairs.
          </p>
          <p>
            If you select "Effective Immediately", your agent will be able to act on your
            behalf as soon as you sign the document, and the document will remain in effect during
            any subsequent disability.
          </p>
        </div>
        <form onSubmit={handleSubmit}>           
          <div>
            <Field name="effectiveNow" component={renderSelect}>  
              <option></option> 
              <option value="false">Effective only upon my disability</option>           
              <option value="true">Effective immediately</option>                      
            </Field>
          </div>        
        <div className="wizard-btn-row">
          <button onClick={props.previousPage} className="btn btn-wizard previous">Previous</button>
          <button type="submit" disabled={submitting} className="btn btn-wizard submit">Submit</button>      
        </div>
      </form>
    </div>   
    )
  }

  EffectiveNow.propTypes = {
    previousPage: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };
  
  export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(EffectiveNow);