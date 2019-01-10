import React from 'react';
import {shallow} from 'enzyme';
import { Results } from '../results';

let wrapper;

describe('<Results />', () => {
    it ('Renders without crashing', () => {
        shallow(<Results />);
    });

    it ('renders message on success', () => {
        const message = 'Document created successfully!'
        wrapper = shallow(<Results message={message}/>);
        expect(wrapper.containsMatchingElement(
            <h3>Document created successfully!</h3>
        )).toBeTruthy();
    })

    it('renders error message when error occurs', () => {
        const errorMessage = 'An error occurred';
        wrapper = shallow(<Results errorMessage={errorMessage}/>);
        expect(wrapper.containsMatchingElement(
            <h3 className="alert-danger alert-danger-box">An error occurred</h3> 
        )).toBeTruthy();
    })
});