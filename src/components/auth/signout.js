import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class Signout extends Component {
    componentDidMount() {
        this.props.signout();
    }

    render() {
        return <div className="header-center"><h2>You have logged out successfully. Click the 'Sign In' link above to login again.</h2></div>
    }
}

export default connect(null, actions)(Signout);