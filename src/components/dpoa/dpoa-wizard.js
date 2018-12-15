import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types'
import DpoaProfile from './dpoa-profile';
import DpoaAgents from './dpoa-agents';
import EffectiveNow from './effective-now';
import { makeDoc } from '../../actions/index';
import { API_BASE_URL } from '../../config';

const token = localStorage.getItem('authToken');
axios.defaults.headers.post['authorization'] = `Bearer ${token}`;

export class DpoaWizard extends Component {
    
  state = {
    page: 1
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

sendDoc = (values) => { 
  this.props.makeDoc(values, () => {
    //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    this.props.history.push('/');
  });
 
  
}

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


export default connect(null, { makeDoc })(DpoaWizard);