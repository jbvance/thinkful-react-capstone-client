import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import DpoaProfile from './dpoa-profile';
import DpoaAgents from './dpoa-agents';
import EffectiveNow from './effective-now';
import { makeDoc, getInitialDpoaData } from '../../actions/index';

export class DpoaWizard extends Component { 
    
  state = {
    page: 1,
    initVal: {fullName: 'MIKEY'}
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  componentDidMount() {
    //Preload the form if there is any data for the user
    this.props.getInitialDpoaData();
  }

sendDoc = (values) => {   
  this.props.makeDoc(values, () => {    
    //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    this.props.history.push('/results');
  });   
};

  render() {       
    const onSubmit = this.sendDoc;   
    const { page } = this.state
    return (
      <div>
        {page === 1 && <DpoaProfile onSubmit={this.nextPage} />}
        {page === 2 && (
          <DpoaAgents
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        
        {page === 3 && (
          <EffectiveNow
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
                   
      </div>
     
    )
  }
}

const getData = (state) => {
  const { fullName, address, agents, effectiveNow } = state.docx.initialDpoaData;
  return {
    fullName,
    address,
    agents,
    effectiveNow
  }  
}


const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  initialValues: getData(state)
});

DpoaWizard = reduxForm({
  form: 'wizard',     
  enableReinitialize: true
})(DpoaWizard)

export default connect(mapStateToProps, { makeDoc, getInitialDpoaData })(DpoaWizard);
