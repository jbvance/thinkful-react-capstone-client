import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const renderLinks = (props) => {
    if (props.authenticated) {
        return (
            <div>
                <div>
                    <li className="nav-item"><Link to="/signout" className="nav-links">Sign Out</Link></li>
                </div>
                <div>
                    <li className="nav-item"><Link to="/start" className="nav-links">Start</Link></li>
                </div>
                <div>
                <li className="nav-item">Logged in as: {props.email}</li>
            </div>
            </div>
           
        );
    } else {
        return (
            <div>
                <li className="nav-item">
                    <Link to="/signup" className="nav-links">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signin" className="nav-links">Sign In</Link>
                </li>    
            </div>
        );
    }
}

const NavBar = props => (	
    <nav className="navbar">
        <div>LOGO HERE</div>
            <ul className="nav-links">
                {renderLinks(props)}               
            </ul>
  </nav>
)

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,
    email: state.auth.email
});
	

export default connect(mapStateToProps)(NavBar);