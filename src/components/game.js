import React from 'react';
import Grid from './grid';
import Score from './score';
import './game.css';
import BearAttack from './bearattack';
import Header from './header';

export default function Game(props) {
	return (
			<div className="game">
			<Header/>
				<BearAttack/>
				<Grid/>
				<Score/>
			</div>
		);
}