import React from 'react';
import Grid from './grid';
import Score from './score';
import './game.css';
import BearAttack from './bearattack';
import Header from './header';
import MediaQuery from 'react-responsive';
import MobileBear from './mobilequestions';
import GoToThruHikers from './gotothruhikers';

export default function Game(props) {
	return (
			<div className="game">
				<Header/>
				<MediaQuery query="(min-device-width: 1367px)">
					<BearAttack/>
					<Grid/>
				</MediaQuery>
				<MediaQuery query="(max-device-width: 1366px)">
				<MobileBear/>
				</MediaQuery>
				<GoToThruHikers/>
				<Score/>
			</div>
		);
}