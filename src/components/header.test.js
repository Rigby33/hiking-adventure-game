import React from 'react';
import {Header} from './header';
import {shallow} from 'enzyme';
import store, {history} from '../store';

describe('<Header/>', () => {
	it('Should render without crashing', () => {
		shallow(<Header store={store} currentUser='null'/>);
	})
})