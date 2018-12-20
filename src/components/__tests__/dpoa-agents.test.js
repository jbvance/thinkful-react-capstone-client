import React from 'react';
import {shallow} from 'enzyme';
import { DpoaAgents } from '../../components/dpoa/dpoa-agents';

describe('DpoaAgents', () => {
    it('should render without crashing', () => {
        shallow(<DpoaAgents />);
    });

    it('should show previous and next buttons', () => {
        const wrapper = shallow(<DpoaAgents />);
        expect(wrapper.find('.previous').length).toEqual(1);
        expect(wrapper.find('.next').length).toEqual(1);
    })

    it('should call handleSubmit function passed as prop', () => {
        const onSubmit = jest.fn();
        const wrapper = shallow(<DpoaAgents handleSubmit={onSubmit}/>);
        wrapper.find('form').simulate('submit');
        expect(onSubmit).toHaveBeenCalled();
    });

    it('should call previousPage function passed as prop', () => {
        const previousPage = jest.fn();
        const wrapper = shallow(<DpoaAgents previousPage={previousPage}/>);
        wrapper.find('.previous').simulate('click');
        expect(previousPage).toHaveBeenCalled();
    });

})