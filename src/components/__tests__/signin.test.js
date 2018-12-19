import React from 'react';
import { shallow, mount } from 'enzyme';
import  { Signin }  from '../auth/signin';
import { AuthForm } from '../auth/auth-form';


describe('<Signin />', () => {        

    it ('renders without crashing', () => {
        const wrapper = shallow(<Signin />); 
        console.log(wrapper.html());      
    });
});