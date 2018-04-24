import React from 'react';
import Hiker from './hiker';
import {shallow} from 'enzyme';

describe('<Hiker/>', () => {
	it('Should render without crashing', () => {
		shallow(<Hiker/>)
	})
})