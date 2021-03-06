import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/welcome';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Signin from './components/auth/signin';
import DpoaWizard from './components/dpoa/dpoa-wizard';
import RequireAuth from './components/requireAuth';
import Results from './components/results';
import { parseJwt } from './components/utils';
import { refreshAuthToken } from './actions/index';

import * as serviceWorker from './serviceWorker';

import './reset.css';
import './index.css';
import './grid.css';

console.log("ENVIRONMENT", process.env.NODE_ENV);

 const authToken = localStorage.getItem('authToken');
 const email = authToken && parseJwt(authToken).user ? parseJwt(authToken).user.email : '';

// required for redux devtools in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {
    // initial state
    auth: { authenticated: authToken, email }
}, composeEnhancers(
    applyMiddleware(reduxThunk)
  ));

if (store.getState().auth.authenticated) {
    // refresh token in case it's old so it doesn't expire during app use    
    store.dispatch(refreshAuthToken());
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" exact component={Signup} />               
                <Route path="/signout" exact component={Signout} />
                <Route path="/signin" exact component={Signin} /> 
                <Route path="/start" exact component={RequireAuth(DpoaWizard)} />   
                <Route path="/results" exact component={RequireAuth(Results)} />                     
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
