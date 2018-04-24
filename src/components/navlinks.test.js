import React from 'react';
import {shallow} from 'enzyme';
import NavLink from './navlinks';

describe('<NavLink/>', () => {
	it('Should render without crashing', () => {
		shallow(<NavLink/>);
	})
})