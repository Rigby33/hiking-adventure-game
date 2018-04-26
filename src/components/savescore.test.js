import React from 'react';
import SaveScore from './savescore';
import {shallow} from 'enzyme';
import store, {history} from '../store';


describe('<SaveScore/>', () => {
	it('Should render without crashing', () => {
		shallow(<SaveScore store={store}/>);
	})
})