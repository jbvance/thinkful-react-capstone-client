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
import Profile from './components/profile';
import Signout from './components/auth/signout';
import Signin from './components/auth/signin';

import * as serviceWorker from './serviceWorker';

import './index.css';

console.log("ENVIRONMENT", process.env.NODE_ENV);

// required for redux devtools in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {
    // initial state
    auth: { authenticated: localStorage.getItem('authToken') }
}, composeEnhancers(
    applyMiddleware(reduxThunk)
  ));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/signout" exact component={Signout} />
                <Route path="/signin" exact component={Signin} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
