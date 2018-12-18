import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const renderNavLinks = props => {
    return (
        <ul className="main-nav">
          {props.authenticated && <Link to="/signout" className="nav-links">Sign Out</Link>}
          {props.authenticated && <li><Link to="/start" className="nav-links">New Document</Link></li>}
          {props.authenticated && <li className="email-label">Logged in as: {props.email}</li>}
          {!props.authenticated && <Link to="/signup">Signup</Link>}
          {!props.authenticated && <Link to="/signin">Sign In</Link>}
      </ul>
    );
}

export const NavBar = props => (	
    <header className="header">
		<h2 className="logo">{<Link to="/">EstateDox</Link>}</h2>
      {renderNavLinks(props)}
	</header> 
)

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,
    email: state.auth.email
});
	

export default connect(mapStateToProps)(NavBar);