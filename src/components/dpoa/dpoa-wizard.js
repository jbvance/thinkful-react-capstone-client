import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import DpoaProfile from './dpoa-profile';
import DpoaAgents from './dpoa-agents';
import EffectiveNow from './effective-now';
import { makeDoc, getInitialDpoaData } from '../../actions/index';

const DpoaWizard = props => { 
    
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);  

  const nextPage = () => {
    setPage(prevState => prevState + 1);    
  }

  const previousPage = () => {
    setPage(prevState => prevState - 1);    
  }

  useEffect(() => {
    const getInitData = async () => {
      try {
        setLoading(true);
        //Preload the form if there is any data for the user
        await props.getInitialDpoaData();   
      } 
      catch(err) {        
        console.error('ERROR', err.message);
      }
      finally {
        setLoading(false);
      };
    }

    // Call async function above
    getInitData();
  }, []);

const sendDoc = (values) => {   
  setLoading(true);  
  props.makeDoc(values, () => {    
    //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    setLoading(false);
    props.history.push('/results');
  });   
};
             
    if (loading) {
      return <div className="loader"></div>
    } else
    return (
      <div>        
        {page === 1 && <DpoaProfile onSubmit={nextPage} />}
        {page === 2 && (
          <DpoaAgents
            previousPage={previousPage}
            onSubmit={nextPage}
          />
        )}
        
        {page === 3 && (
          <EffectiveNow
            previousPage={previousPage}
            onSubmit={sendDoc}
          />
        )}
                   
      </div>
     
    )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  initialValues: state.docx.initialDpoaData
});

const ReduxFormDpoaWizard = reduxForm({
  form: 'wizard',     
  enableReinitialize: true
})(DpoaWizard)

ReduxFormDpoaWizard.propTypes = {
  getInitialDpoaData: PropTypes.func.isRequired,
  makeDoc: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { makeDoc, getInitialDpoaData })(ReduxFormDpoaWizard);
