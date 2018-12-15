import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Header extends Component {

    renderLinks() {
        if (this.props.authenticated) {
            return (
                <div>
                    <li><Link to="/signout" className="nav-links">Sign Out</Link></li>
                    <li><Link to="/start" className="nav-links">Start</Link></li>
                </div>
               
            );
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup" className="nav-links">Signup</Link>
                    </li>
                    <li>
                        <Link to="/signin" className="nav-links">Sign In</Link>
                    </li>    
                </div>
            );
        }
    }

    render() {
        return (
            <nav className="navbar">
                <span className="navbar-toggle">
                    <i className="fas fa-bars"></i>
                </span>
                <Link to="/" className="logo">LegalDox</Link>
                <ul className="main-nav">                              
                    {this.renderLinks()}                           
                </ul>        
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);