import React from 'react';
import {ThruHikers} from './thruhikers';
import {shallow} from 'enzyme';
import store, {history} from '../store';
import {thruHikerData} from '../actions/thruhiker';

// describe('<ThruHikers/>', () => {
// 	it('Should render without crashing', () => {
// 		shallow(<ThruHikers/>);
// 	})
// })

const mockThruHikerData = {
    type: 'THRU_HIKER'
};
jest.mock('../actions/thruhiker', () => Object.assign({},
    require.requireActual('../actions/thruhiker'),
    {
        fetchBoard: jest.fn().mockImplementation(() => {
            return mockThruHikerData;
        })
    }
));

describe('<ThruHikers/>', () => {
	it('should render without crashing', () => {
		const dispatch = jest.fn();
		const users = [
		{
			username: 'example1',
			highscore: 100
		},
		{
			username: 'example2',
			highscore: 100
		},
		];
		shallow(<ThruHikers dispatch={dispatch} users={users} store={store}/>);
	})
});