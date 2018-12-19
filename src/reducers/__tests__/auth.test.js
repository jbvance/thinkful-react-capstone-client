import authReducer from '../auth';
import { AUTH_USER, AUTH_ERROR } from '../../actions/types';

describe ('Auth Reducer', () => {
    it ('handles action of type AUTH_USER', () => {
        const action = {
            type: AUTH_USER,
            payload: {
                authenticated: 'JSON_WEB_TOKEN_AUTH',
                email: 'user@example.com'
            }
        }

        const newState = authReducer({}, action);
        expect(newState).toEqual({
            authenticated: action.payload.authenticated,
            email: action.payload.email,
            errorMessage: ''
        })        
    });

    it ('handles action of type AUTH_ERROR', () => {
        const action = {
            type: AUTH_ERROR,
            payload: 'AUTH ERROR'
        }

        const newState = authReducer(undefined, action);
        expect(newState).toEqual({
            authenticated: '',
            email: '',
            errorMessage: 'AUTH ERROR'
        }) 
    });
   
});