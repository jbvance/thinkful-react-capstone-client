import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DpoaProfile from './dpoa-profile';
import DpoaAgents from './dpoa-agents';
//import WizardFormThirdPage from './WizardFormThirdPage'

class DpoaWizard extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
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
        {/*}
        {page === 3 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}*/}
      </div>
    )
  }
}

DpoaWizard.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default DpoaWizard