import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const Signout = props => {
    props.signout();
    return <div className="header-center"><h2>You have logged out successfully. Click the 'Sign In' link above to login again.</h2></div>
}

export default connect(null, actions)(Signout);