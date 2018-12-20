import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, DOCX_STATUS, DOCX_ERROR, INITIAL_DPOA } from './types';
import { API_BASE_URL } from '../config';
import { parseJwt } from '../components/utils';

export const signup = (formProps, callback) => async dispatch => {
    const { email, password } = formProps;
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, {
            email, 
            password
        });                 
        dispatch({ type: AUTH_USER, payload: { authenticated: response.data.authToken, email } });
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
        dispatch({ type: AUTH_ERROR, payload: ''})
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            email, 
            password
        });               
        dispatch({ type: AUTH_USER, payload: {authenticated: response.data.authToken, email} });
        localStorage.setItem('authToken', response.data.authToken);        
        // Go ahead and get any existing dpoa data for this user
        
        callback();
    } catch(err) {       
        if (!err.response) {
            // No response returned from server
            dispatch({ type: AUTH_ERROR, payload: 'Unable to reach server to login. Please try again later.'})
        } else if (err.response.status === 401) {                   
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
        payload: { authenticated: '', email: '' }
    };
};

export const setAuthError = (value) => ({
   type: AUTH_ERROR,
   payload: value 
});

export const makeDoc = (values, callback) => async (dispatch, getState) => {  
    try {   
        // clear status and error messsage for docx creation
        dispatch({ type: DOCX_STATUS, payload: ''});
        dispatch({ type: DOCX_ERROR, payload: ''});

        const token = getState().auth.authenticated;
        axios.defaults.headers.post['authorization'] = `Bearer ${token}`            
        const response = await axios.post(`${API_BASE_URL}/dpoa`, { ...values });        
        dispatch({ type: DOCX_STATUS, payload: { message: response.data.message, filename: response.data.filename} });     
        callback();    
    }    
    catch (error) {        
        dispatch({ type: DOCX_ERROR, payload: error.message}) 
    }                      
}

export const getInitialDpoaData =  () => async (dispatch, getState) => {   
    try {     
      let dpoa = null;
      const token = getState().auth.authenticated;           
      const userId = parseJwt(token).user.id;
      axios.defaults.headers.get['authorization'] = `Bearer ${token}` 
      const dpoaData = await axios.get(`${API_BASE_URL}/dpoa/${userId}`);      
      dpoa = dpoaData.data;      
      //effectiveNow comes in as boolean; convert it to a string for the html select element
      if (dpoa && dpoa.hasOwnProperty('effectiveNow')) dpoa = {...dpoa, effectiveNow: dpoa.effectiveNow.toString() };     
      dispatch({ type: INITIAL_DPOA, payload: dpoa }); 
    }
    catch(err) {
        console.log('ERROR: ', err);
        throw (err);
    }  
}
