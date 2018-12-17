import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const burgerToggle = () => {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
        linksEl.style.display = 'none';
    } else {
        linksEl.style.display = 'block';
    }
}

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
    authenticated: state.auth.authenticated
});
	

export default connect(mapStateToProps)(NavBar);