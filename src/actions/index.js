import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';
import { API_BASE_URL } from '../config';

console.log("API", API_BASE_URL);

export const signup = (formProps, callback) => async dispatch => {
    const { email, password } = formProps;
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, {
            email, 
            password
        });         
        dispatch({ type: AUTH_USER, payload: response.data.authToken });
        localStorage.setItem('authToken', response.data.authToken);
        callback();
    } catch(err) {       
       if (err.response.data) {                   
         dispatch({ type: AUTH_ERROR, payload: err.response.data.message})
       }  else {
        dispatch({ type: AUTH_ERROR, payload: 'Unable to create account - Please try again later'})
       }   
    }
   
};

export const signin = (formProps, callback) => async dispatch => {
    const { email, password } = formProps;
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            email, 
            password
        });         
        dispatch({ type: AUTH_USER, payload: response.data.authToken });
        localStorage.setItem('authToken', response.data.authToken);
        callback();
    } catch(err) {
       console.log("ERROR", err.response);
       if (err.response.status === 401) {                   
         dispatch({ type: AUTH_ERROR, payload: 'Incorrect email or password'})
       }  else {
        dispatch({ type: AUTH_ERROR, payload: 'Unable to login - Please try again later'})
       }   
    }
   
};

export const signout = () => {
    localStorage.removeItem('authToken');
    return {
        type: AUTH_USER,
        payload: ''
    }
};

export const setAuthError = (value) => ({
   type: AUTH_ERROR,
   payload: value 
});
 