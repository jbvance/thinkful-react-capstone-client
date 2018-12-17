import { DOCX_STATUS, DOCX_ERROR, INITIAL_DPOA } from '../actions/types';

const initialState = {
    status: '',
    errorMessage: '',
    initialDpoaData: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DOCX_STATUS:
            return {...state, status: action.payload };
        case DOCX_ERROR:
            return {...state, errormessage: action.payload };
        case INITIAL_DPOA:
            return {...state, initialDpoaData: action.payload };
        default: {
            return state;
        }
    }
}