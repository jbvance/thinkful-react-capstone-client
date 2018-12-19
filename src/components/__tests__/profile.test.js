import React from 'react';
import {shallow, mount} from 'enzyme';

import { Profile } from '../profile';

describe('<Profile />', () => {
    it ('Renders without crashing', () => {
        shallow(<Profile />);
    });
});