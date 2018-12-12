import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <span className="navbar-toggle">
                    <i className="fas fa-bars"></i>
                </span>
                <Link to="/" className="logo">LegalDox</Link>
                <ul className="main-nav">           
                    <li>
                        <Link to="/signup" className="nav-links">Signup</Link>
                    </li>
                    <li>
                        <Link to="/signin" className="nav-links">Sign In</Link>
                    </li>            
                    <li><Link to="/signout" className="nav-links">Sign Out</Link>              
                    </li>
                    <li>
                        <span className="nav-links">
                            Add Category
                        </span>
                    </li>
                </ul>        
            </nav>
        );
    }
}