import React from 'react';
import {BearAttack} from './bearattack';
import { answerBearQuestion } from '../actions/bearattack';
import Enzyme, { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import store, {history} from '../store';
import 'jest-localstorage-mock';

// Enzyme.configure({ adapter: new Adapter() });

// function setup() {
// 	const props = {
// 		store
// 	};

// 	const enzymeWrapper = mount(<BearAttack {...props} />);

// 	return {
// 		props,
// 		enzymeWrapper
// 	}
// }

// const mockStore = configureStore();

// describe('<BearAttack/>', () => {
// 	it('Renders without crashing', () => {
// 		const { enzymeWrapper } = setup();
// 		expect(enzymeWrapper.find('div').hasClass('bearattack')).toBe(true)
// 	})
// });

// it('Should fire the onAdd callback when the form is submitted', () => {
//     const callback = jest.fn();
//     const wrapper = mount(<AddForm onAdd={callback} />);
//     const value = 'Foobar';
//     wrapper.instance().setEditing(true);
//     wrapper.update();
//     wrapper.find('input[type="text"]').instance().value = value;
//     wrapper.simulate('submit');
//     expect(callback).toHaveBeenCalledWith(value);
// });

describe('<BearAttack/>', () => {
	it('Renders without crashing', () => {
		shallow(<BearAttack store={store} activeQuestion={store.getState().bearReducer.activeQuestion}/>)
	})
})