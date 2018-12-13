import React from 'react';
import {shallow, mount} from 'enzyme';

import Signup from '../auth/signup';

describe('<Signup />', () => {
    it ('Renders without crashing', () => {
        shallow(<Signup />);
    });
});