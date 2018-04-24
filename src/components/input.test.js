import React from 'react';
import Input from './input';
import {shallow} from 'enzyme';

describe('<Input/>', () => {
	it('Should render without crashing', () => {
		shallow(<Input/>);
	})
})