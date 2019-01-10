import React from 'react';
import {shallow} from 'enzyme';
import { DpoaAgents } from '../../components/dpoa/dpoa-agents';

describe('DpoaAgents', () => {

    const previousPage = jest.fn();
    const onSubmit = jest.fn();
    const handleSubmit = jest.fn();

    it('should render without crashing', () => {
        shallow(<DpoaAgents previousPage={previousPage} onSubmit={onSubmit} handleSubmit={handleSubmit} submitting={false} />);
    });

    it('should show previous and next buttons', () => {
        const wrapper = shallow(<DpoaAgents previousPage={previousPage} onSubmit={onSubmit} handleSubmit={handleSubmit} submitting={false} />);
        expect(wrapper.find('.previous').length).toEqual(1);
        expect(wrapper.find('.next').length).toEqual(1);
    })

    it('should call handleSubmit function passed as prop', () => {
        const onSubmit = jest.fn();
        const wrapper = shallow(<DpoaAgents previousPage={previousPage} onSubmit={onSubmit} handleSubmit={handleSubmit} submitting={false} />);
        wrapper.find('form').simulate('submit');
        expect(handleSubmit).toHaveBeenCalled();
    });

    it('should call previousPage function passed as prop', () => {
        const previousPage = jest.fn();
        const wrapper = shallow(<DpoaAgents previousPage={previousPage} onSubmit={onSubmit} handleSubmit={handleSubmit} submitting={false} />);
        wrapper.find('.previous').simulate('click');
        expect(previousPage).toHaveBeenCalled();
    });

})