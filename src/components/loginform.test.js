import React from 'react';
import {LoginForm} from './loginform';
import {shallow} from 'enzyme';

describe('<LoginForm/>', () => {
	it('Should render without crashing', () => {
		shallow(<LoginForm/>)
	})
})