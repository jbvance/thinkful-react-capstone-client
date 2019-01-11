import React from 'react';
import {shallow } from 'enzyme';

import { DpoaProfile } from '../dpoa/dpoa-profile';

const handleSubmit = jest.fn();
const onSubmit = jest.fn();

describe('<DpoaProfile />', () => {
    it ('Renders without crashing', () => {
        shallow(<DpoaProfile handleSubmit={handleSubmit} onSubmit={onSubmit} />);
    });
});