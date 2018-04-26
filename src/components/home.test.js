import React from 'react';
import Home from './home';
import {shallow} from 'enzyme';
import store, {history} from '../store';


describe('<Home/>', () => {
	it('Should render without crashing', () => {
		shallow(<Home store={store}/>);
	})
})