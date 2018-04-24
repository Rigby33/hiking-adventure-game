import React from 'react';
import SaveScore from './savescore';
import {shallow} from 'enzyme';

describe('<SaveScore/>', () => {
	it('Should render without crashing', () => {
		shallow(<SaveScore/>);
	})
})