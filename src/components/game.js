import React from 'react';
import Grid from './grid';
import Score from './score';
import './game.css';
import BearAttack from './bearattack';
import Header from './header';
import MediaQuery from 'react-responsive';
import MobileBear from './mobilequestions';

export default function Game(props) {
	return (
			<div className="game">
				<Header/>
				<MediaQuery query="(min-device-width: 1224px)">
					<BearAttack/>
					<Grid/>
				</MediaQuery>
				<MediaQuery query="(max-device-width: 1223px)">
				<MobileBear/>
				</MediaQuery>
				<Score/>
			</div>
		);
}