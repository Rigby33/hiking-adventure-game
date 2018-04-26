import React from 'react';
import Hiker from './hiker';
import {shallow} from 'enzyme';
import store, {history} from '../store';

describe('<Hiker/>', () => {
	it('Should render without crashing', () => {
		shallow(<Hiker store={store}/>)
	})
})