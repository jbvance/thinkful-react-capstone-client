import React from 'react';
//import Header from './header';
import NavBar from '../components/navbar/navbar';


export default ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        {children}
      </div>      
    </div>
  );
}
