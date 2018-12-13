import React, { Component } from 'react';
import requireAuth from './requireAuth';

export class Profile extends Component {
    render() {
        return (
            <div>
                <form>
                    <ul className="flex-outer">
                        <li>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name here" />
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default requireAuth(Profile);