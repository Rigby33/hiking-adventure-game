import React from 'react';
import {ThruHikers} from './thruhikers';
import {shallow} from 'enzyme';

describe('<ThruHikers/>', () => {
	it('Should render without crashing', () => {
		shallow(<ThruHikers/>);
	})
})