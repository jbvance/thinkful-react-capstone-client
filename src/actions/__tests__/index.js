import moxios from 'moxios';
import { AUTH_USER, AUTH_ERROR, DOCX_STATUS, DOCX_ERROR, INITIAL_DPOA } from '../types';
import { signup, signin, signout, setAuthError, makeDoc, getInitialDpoaData} from '../index';
import { API_BASE_URL } from '../../config';
import { parseJwt } from '../../components/utils';

describe('setAuthError', () => {
    it ('should return the action', () => {
        const err = 'TEST ERROR';
        const action = setAuthError(err);
        expect(action.type).toEqual(AUTH_ERROR);
    })
});

describe('signout', () => {
    it ('should return the action', () => {
        const action = signout();
        expect(action.type).toEqual(AUTH_USER);
        expect(action.payload).toEqual({ authenticated: '', email: '' });
    })
});

describe('AUTH async actions', () => {
    beforeEach(() => {        
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it  ('should dispatch AUTH_USER action with correct login info', () => {

        const dispatch = jest.fn();
        const callback = jest.fn();

        moxios.wait(async () => {
            const request = moxios.requests.mostRecent();
            await request.respondWith({
              status: 200,
              response: { authToken: 'JWT_TOKEN' }
            });
          });       
           
        return signin({ email: 'test@test.com', password: 'GOOD_PASSWORD'}, callback)(dispatch).then(() => {
            expect(dispatch).toHaveBeenNthCalledWith(1, { type: AUTH_ERROR, payload: ''});
            expect(dispatch).toHaveBeenLastCalledWith({ type: AUTH_USER, payload: {authenticated: 'JWT_TOKEN', email: 'test@test.com'}}); 
            expect(callback).toHaveBeenCalled();       
        });
        
    });

    it  ('should dispatch AUTH_ERROR action with INCORRECT login info', () => {

        const dispatch = jest.fn();
        const callback = jest.fn();

        moxios.wait(async () => {
            const request = moxios.requests.mostRecent();
            await request.respondWith({
              status: 401,
              response: { }
            });
          });       
           
        return signin({ email: 'test@test.com', password: 'WRONG_PASSWORD'}, callback)(dispatch).then(() => {
            expect(dispatch).toHaveBeenNthCalledWith(1, { type: AUTH_ERROR, payload: ''});
            expect(dispatch).toHaveBeenLastCalledWith({ type: AUTH_ERROR, payload: 'Incorrect email or password'});  
            expect(callback).not.toHaveBeenCalled();      
        });        
    });   

});

describe('DOCX async action', () => {
    beforeEach(() => {        
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it  ('should dispatch DOCX_STATUS after successfully creating document', () => {

        const dispatch = jest.fn();
        const callback = jest.fn();

        moxios.wait(async () => {
            const request = moxios.requests.mostRecent();
            await request.respondWith({
              status: 200,
              response: { message: 'Document successfuly created', filename: 'TEST_FILENAME' }
            });
          });       

        
        const getState = () => {
            return { auth: 'JWT_TOKEN'}
        }  
        return makeDoc({ values: {} }, callback)(dispatch, getState).then(() => {
            expect(dispatch).toHaveBeenNthCalledWith(1, { type: DOCX_STATUS, payload: ''});
            expect(dispatch).toHaveBeenNthCalledWith(2, { type: DOCX_ERROR, payload: ''});
            expect(dispatch).toHaveBeenLastCalledWith({ 
                type: DOCX_STATUS, 
                payload: { message: 'Document successfuly created', filename: 'TEST_FILENAME'} 
            }); 
            expect(callback).toHaveBeenCalled();       
        });
        
    });   

    it  ('should dispatch DOCX_ERROR after unsuccessfully attempting to create document', () => {

        const dispatch = jest.fn();
        const callback = jest.fn();

        moxios.wait(async () => {
            const request = moxios.requests.mostRecent();
            await request.respondWith({
              status: 500            
            });
          });       
        
        const getState = () => {
            return { auth: 'JWT_TOKEN'}
        }  
        return makeDoc({ values: {} }, callback)(dispatch, getState).then(() => {
            expect(dispatch).toHaveBeenNthCalledWith(1, { type: DOCX_STATUS, payload: ''});
            expect(dispatch).toHaveBeenNthCalledWith(2, { type: DOCX_ERROR, payload: ''});
            expect(dispatch).toHaveBeenLastCalledWith({ 
                type: DOCX_ERROR, 
                payload: 'Unable to create document.'
            }); 
            expect(callback).toHaveBeenCalled();       
        });
        
    }); 

});

describe('GetInitialDPOA async actions', () => {
    //JWT Token  used to send for authentication
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiamFzb25AZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiIiwibGFzdE5hbWUiOiIiLCJpZCI6IjVjMTJjODAwYmZjMzZiYTAxMGU1YjQyZiJ9LCJpYXQiOjE1NDUzMzA5OTEsImV4cCI6MTU0NTkzNTc5MSwic3ViIjoiamFzb25AZ21haWwuY29tIn0.iYPEMIEkJzpqTAcOFHugR2Ztaxt5xIKj1EFTDFxYuS0'

    beforeEach(() => {        
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it  ('should dispatch INITIAL_DPOA after successfully retrieving data for user', () => {

        const dispatch = jest.fn();
        const callback = jest.fn();

        moxios.wait(async () => {
            const request = moxios.requests.mostRecent();
            await request.respondWith({
                status: 200,
                response: { dpoa: { name: 'sample dpoa data' } }
            });
        });       

        
        const getState = () => {
            return { auth: { authenticated: token }};
        };
        
        return getInitialDpoaData()(dispatch, getState).then(() => {
            expect(dispatch).toHaveBeenCalledWith( { type: INITIAL_DPOA, payload: { dpoa: {name: 'sample dpoa data'} }});               
        });
    });     
});



