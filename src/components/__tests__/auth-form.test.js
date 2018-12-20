import React from 'react';
import {shallow} from 'enzyme';
import { AuthForm } from '../auth/auth-form';

let wrapper;

// beforeEach(() => {
   
// })

it ('renders without crashing', () => {
    const handleSubmit = jest.fn();
    const setAuthError = jest.fn();
    wrapper = shallow(<AuthForm handleSubmit={handleSubmit} setAuthError={setAuthError} />)
    expect(wrapper.find('.btn-submit').length).toEqual(1);
})

it ('renders with the correct button text', () => {
    const handleSubmit = jest.fn();
    const setAuthError = jest.fn();
    wrapper = shallow(<AuthForm handleSubmit={handleSubmit} setAuthError={setAuthError} buttonText={'Sign In'} />)    
    expect(wrapper.find('.btn-submit').text()).toEqual('Sign In');
})

it ('calls the onSubmit prop', () => {
    const handleSubmit = jest.fn();
    const setAuthError = jest.fn();
    wrapper = shallow(<AuthForm handleSubmit={handleSubmit} setAuthError={setAuthError} buttonText={'Sign In'} />)    
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalled();
});




