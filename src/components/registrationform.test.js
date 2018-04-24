import React from 'react';
import {RegistrationForm} from './registrationform';
import {shallow} from 'enzyme';

describe('<RegistrationForm/>', () => {
	it('Should render without crashing', () => {
		shallow(<RegistrationForm/>);
	})
})