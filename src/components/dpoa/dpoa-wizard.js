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
    loading: false,
    error: ''
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  componentDidMount = async () => {  
    try {
      this.setState({ loading: true });
      //Preload the form if there is any data for the user
      await this.props.getInitialDpoaData();   
    } 
    catch(err) {
      console.log('ERROR', err.message);
    }
   finally {
    this.setState({loading: false });
   }
    
  }

sendDoc = (values) => {   
  this.setState({ loading: true });  
  this.props.makeDoc(values, () => {    
    //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    this.setState({ loading: false });
    this.props.history.push('/results');
  });   
};

  render() {       
    const onSubmit = this.sendDoc;   
    const { page } = this.state
    if (this.state.loading) {
      return <div className="loader"></div>
    } else
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

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  initialValues: state.docx.initialDpoaData
});

DpoaWizard = reduxForm({
  form: 'wizard',     
  enableReinitialize: true
})(DpoaWizard)

export default connect(mapStateToProps, { makeDoc, getInitialDpoaData })(DpoaWizard);
