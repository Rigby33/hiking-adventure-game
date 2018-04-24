import React from 'react';
import CurrentScore from './currentscore';
import {shallow} from 'enzyme';
import store, {history} from '../store';

describe('<CurrentScore/>', () => {
	it('Renders without crashing', () => {
		shallow(<CurrentScore store={store}/>);
	})
})