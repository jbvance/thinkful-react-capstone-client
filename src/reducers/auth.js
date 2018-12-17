import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const initialState = {
    authenticated: '',
    errorMessage: '',
    email: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {...state, authenticated: action.payload.authenticated, email: action.payload.email, errorMessage: '' };
        case AUTH_ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }   
};