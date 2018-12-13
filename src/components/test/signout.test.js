import React from 'react';
import {shallow, mount} from 'enzyme';

import Signout from '../auth/signout';

describe('<Signout />', () => {
    it ('Renders without crashing', () => {
        shallow(<Signout />);
    });
});