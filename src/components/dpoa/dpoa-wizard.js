import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import DpoaProfile from './dpoa-profile';
import DpoaAgents from './dpoa-agents';
import EffectiveNow from './effective-now';
import { API_BASE_URL } from '../../config';

const token = localStorage.getItem('authToken');
axios.defaults.headers.post['authorization'] = `Bearer ${token}`;

export class DpoaWizard extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1,     
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

makeDoc(values) { 
  let responseStatus = '';  
  axios.post(`${API_BASE_URL}/docx/makedoc`, {
      body: values     
  })
      .then(function (response) {
        console.log('RESPONSE', response);
          console.log(response.data.message);
          responseStatus = response.data.message;
      })
      .catch(function (error) {
          console.error('ERROR', error);
          responseStatus = error.message;
      });
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

  render() {
    //const { onSubmit } = this.props;
    const onSubmit = this.makeDoc;
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

// DpoaWizard.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default DpoaWizard