import React from 'react';
import Grid from './grid';
import {shallow} from 'enzyme';
import store, {history} from '../store';

describe('<Grid/>', () => {
	it('Should render without crashing', () => {
		shallow(<Grid store={store}/>);
	})
})