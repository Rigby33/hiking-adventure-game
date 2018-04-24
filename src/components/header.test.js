import React from 'react';
import {Header} from './header';
import {shallow} from 'enzyme';

describe('<Header/>', () => {
	it('Should render without crashing', () => {
		shallow(<Header/>);
	})
})