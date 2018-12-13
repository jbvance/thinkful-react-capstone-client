import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Profile extends Component {
    render() {
        return (
            <div>This is the profile page</div>
        );
    }
}

export default requireAuth(Profile);