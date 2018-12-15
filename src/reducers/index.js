import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import docx from './docx';

export default combineReducers({
    auth,
    docx,
    form: formReducer
});