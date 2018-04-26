import React from 'react';
import HighScore from './highscore';
import {shallow} from 'enzyme';
import store, {history} from '../store';

describe('<HighScore/>', () => {
	it('Should render without crashing', () => {
		shallow(<HighScore store={store}/>)
	})
})