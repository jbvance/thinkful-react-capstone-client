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
       //console.log("ERROR", err.response);
       if (err.response.data) {                   
         dispatch({ type: AUTH_ERROR, payload: err.response.data.message})
       }  else {
        dispatch({ type: AUTH_ERROR, payload: 'Internal Server Error'})
       }   
    }
     
   
};