import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DpoaProfile from './dpoa-profile';
import DpoaAgents from './dpoa-agents';
import EffectiveNow from './effective-now';

class DpoaWizard extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1,
      finalResult: {}
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  setFinalResult(result) {
    this.setState({ finalResult: result });
  }
  
sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  
showResults = async (values) => {
  await this.sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  this.setFinalResult({
    status: 'success',
    text: 'Document successfully processed'
  })
  this.props.history.push('/');
};

  render() {
    //const { onSubmit } = this.props;
    const onSubmit = this.showResults;
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
        
        {this.state.finalResult && 
          <div>
            <h2>{this.state.finalResult.text}</h2>
          </div>}      
      </div>
     
    )
  }
}

// DpoaWizard.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default DpoaWizard