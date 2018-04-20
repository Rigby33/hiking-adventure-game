import React from 'react';
import Grid from './grid';
import Score from './score';
import './game.css';
import BearAttack from './bearattack';
import Header from './header';
import SaveScore from './savescore';

export default function Game(props) {
	return (
			<div className="game">
			<Header/>
				<SaveScore/>
				<BearAttack/>
				<Grid/>
				<Score/>
			</div>
		);
}