import React from 'react';
import {shallow, mount} from 'enzyme';

import { NavBar } from '../navbar/navbar';

describe('<NavBar />', () => {
    it ('Renders without crashing', () => {
        shallow(<NavBar />);
    });
});