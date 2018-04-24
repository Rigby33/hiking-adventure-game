import React from 'react';
import {LogIn} from './login';
import {shallow} from 'enzyme';

describe('<LogIn/>', () => {
	it('Should render without crashing', () => {
		shallow(<LogIn/>)
	})
})