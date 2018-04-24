import React from 'react';
import {App} from './app';
import {shallow} from 'enzyme';
import Game from './game';
import Home from './home';
import SignUp from './signup';
import LogIn from './login';
import ThruHikers from './thruhikers';
import {refreshAuthToken} from '../actions/auth';

describe('<App/>', () => {
	it('Renders without crashing', () => {
		shallow(<App/>);
	});
});