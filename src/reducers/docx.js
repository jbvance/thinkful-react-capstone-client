import { DOCX_STATUS, DOCX_ERROR, INITIAL_DPOA } from '../actions/types';

const initialState = {
    message: '',
    errorMessage: '',
    filename: '',
    initialDpoaData: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DOCX_STATUS:
            return {...state, message: action.payload.message, filename: action.payload.filename  };
        case DOCX_ERROR:
            return {...state, errorMessage: action.payload };
        case INITIAL_DPOA:
            return {...state, initialDpoaData: action.payload };
        default: {
            return state;
        }
    }
}