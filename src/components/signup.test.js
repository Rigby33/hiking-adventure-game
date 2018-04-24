import React from 'react';
import {RegistrationPage} from './signup';
import {shallow} from 'enzyme';

describe('<RegistrationPage/>', () => {
	it('Should render without crashing', () => {
		shallow(<RegistrationPage/>);
	})
})