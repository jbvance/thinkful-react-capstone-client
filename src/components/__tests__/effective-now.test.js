import React from 'react';
import {shallow} from 'enzyme';
import { EffectiveNow } from '../../components/dpoa/effective-now'


describe('EffectiveNow', () => {
    it('should render without crashing', () => {
        shallow(<EffectiveNow />);
    });

    it('should show previous and submit buttons', () => {
        const wrapper = shallow(<EffectiveNow />);
        expect(wrapper.find('.previous').length).toEqual(1);
        expect(wrapper.find('.submit').length).toEqual(1);
    })

    it('should call handleSubmit function passed as prop', () => {
        const onSubmit = jest.fn();
        const wrapper = shallow(<EffectiveNow handleSubmit={onSubmit}/>);
        wrapper.find('form').simulate('submit');
        expect(onSubmit).toHaveBeenCalled();
    });

    it('should call previousPage function passed as prop', () => {
        const previousPage = jest.fn();
        const wrapper = shallow(<EffectiveNow previousPage={previousPage}/>);
        wrapper.find('.previous').simulate('click');
        expect(previousPage).toHaveBeenCalled();
    });

})
