import React from 'react';
import {shallow} from 'enzyme';
import { EffectiveNow } from '../../components/dpoa/effective-now'


describe('EffectiveNow', () => {
    const previousPage = jest.fn();
    const onSubmit = jest.fn();
    const handleSubmit = jest.fn();

    it('should render without crashing', () => {       
        shallow(<EffectiveNow previousPage={previousPage} onSubmit={onSubmit} handleSubmit={handleSubmit} submitting={false}/>);
    });

    it('should show previous and submit buttons', () => {
        const wrapper = shallow(<EffectiveNow previousPage={previousPage} onSubmit={onSubmit} handleSubmit={handleSubmit} submitting={false} />);
        expect(wrapper.find('.previous').length).toEqual(1);
        expect(wrapper.find('.submit').length).toEqual(1);
    })

    it('should call handleSubmit function passed as prop', () => {
        const onSubmit = jest.fn();
        const wrapper = shallow(<EffectiveNow handleSubmit={onSubmit} onSubmit={onSubmit} submitting={false} previousPage={previousPage} />);
        wrapper.find('form').simulate('submit');
        expect(onSubmit).toHaveBeenCalled();
    });

    it('should call previousPage function passed as prop', () => {
        const previousPage = jest.fn();
        const wrapper = shallow(<EffectiveNow previousPage={previousPage} onSubmit={onSubmit} handleSubmit={handleSubmit} submitting={false} />);
        wrapper.find('.previous').simulate('click');
        expect(previousPage).toHaveBeenCalled();
    });

})
