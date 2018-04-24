import React from 'react';
import Score from './score';
import {shallow} from 'enzyme';

describe('<Score/>', () => {
	it('Should render without crashing', () => {
		shallow(<Score/>)
	})
})