import { DOCX_STATUS, DOCX_ERROR } from '../actions/types';

const initialState = {
    status: '',
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DOCX_STATUS:
            return {...state, status: action.payload };
        case DOCX_ERROR:
            return {...state, message: action.payload };
        default:
            return state;
    }   
};