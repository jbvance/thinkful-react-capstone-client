const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'First name is required'
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required'
    }
    if (!values.address) {
      errors.address = 'Address is required'
    }
    if (!values.agents || !values.agents.length) {
      errors.agents = { _error: 'At least one agent must be entered' }
    } else {
      const agentsArrayErrors = []
      values.agents.forEach((agent, agentIndex) => {
        const agentErrors = {}
        if (!agent || !agent.firstName) {
          agentErrors.firstName = 'First name is required'
          agentsArrayErrors[agentIndex] = agentErrors
        }
        if (!agent || !agent.lastName) {
          agentErrors.lastName = 'Last name is equired'
          agentsArrayErrors[agentIndex] = agentErrors
        }        
      })
      if (agentsArrayErrors.length) {
        errors.agents = agentsArrayErrors
      }
    }
    // if (!values.email) {
    //   errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address'
    // }
   
    return errors
  }
  
  export default validate;