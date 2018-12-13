import React from 'react';
import {shallow, mount} from 'enzyme';

import Signin from '../auth/signin';

describe('<Signin />', () => {
    it ('Renders without crashing', () => {
        shallow(<Signin />);
    });
});