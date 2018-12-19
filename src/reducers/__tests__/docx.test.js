import docxReducer from '../docx';
import { DOCX_STATUS, DOCX_ERROR, INITIAL_DPOA } from '../../actions/types';

const initialState = {
    message: '',
    errorMessage: '',
    filename: '',
    initialDpoaData: {}
};

describe ('Docx (Dpoa) Reducer', () => {
    it ('handles action of type DOCX_STATUS', () => {
        const action = {
            type: DOCX_STATUS,
            payload: {
                message: 'Status Message',
                filename: 'filename.docx'
            }
        }

        const newState = docxReducer(undefined, action);
        expect(newState).toEqual({
          ...initialState,
          message: action.payload.message,
          filename: action.payload.filename,
        })        
    });

    it ('handles action of type DOCX_ERROR', () => {
        const action = {
            type: DOCX_ERROR,
            payload: 'DOCX ERROR'
        }

        const newState = docxReducer(undefined, action);
        expect(newState).toEqual({
           ...initialState,
            errorMessage: 'DOCX ERROR',
        })        
    });

    it ('handles action of type INITIAL_DPOA', () => {
        const action = {
            type: INITIAL_DPOA,
            payload: { firstName: 'John', lastName: 'Doe' }
        }

        const newState = docxReducer(undefined, action);
        expect(newState).toEqual({
           ...initialState,
            initialDpoaData: { firstName: 'John', lastName: 'Doe' }
        })        
    });

   
});