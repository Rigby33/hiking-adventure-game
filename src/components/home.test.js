import React from 'react';
import Home from './home';
import {shallow} from 'enzyme';

describe('<Home/>', () => {
	it('Should render without crashing', () => {
		shallow(<Home/>);
	})
})