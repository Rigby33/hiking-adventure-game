import React from 'react';
import HighScore from './highscore';
import {shallow} from 'enzyme';

describe('<HighScore/>', () => {
	it('Should render without crashing', () => {
		shallow(<HighScore/>)
	})
})