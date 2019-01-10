import React from 'react';
//import Header from './header';
import NavBar from '../components/navbar/navbar';


export default ({ children }) => {
  return (
    <div>
      <header role="banner">
        <NavBar />
      </header>      
      <main role="main">
        {children}
      </main>      
    </div>
  );
}
