import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
      <div>      
        <div className="hero">
            <img className="responsive-image" src="/images/parents-child-banner.jpg" alt="parent child banner" />
            <div className="card hero-text-bottom-left">
                <h1>EstateDox</h1>
                <h4>Estate planning documents made easy</h4>
            </div>
        </div>
        <div className="container">
           <h2>Prepare a Durable Power of Attorney*</h2>
           <p>A durable power of attorney allows you to name someone you trust to manage your finances for when you’re unable to do so yourself.
              Make sure your family will be taken care of if something happens to you by deciding now who will important financial 
              decisions if you can't.
           </p>          
            <Link className="btn btn-login" to="/signin">Click here to sign in</Link>
            <p className="disclaimer">
                *DISCLAIMER: This website is for demonstration purposes and should not be relied on for producing binding legal documents.
                Nothing on this website is a substitute for the advice of a licensed attorney.                          
            </p>       
        </div>
               
      </div>
       
        );
}