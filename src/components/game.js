import React from 'react';
import Grid from './grid';
import Score from './score';
import './game.css';

export default function Game(props) {
	return (
			<div className="game">
				<Score/>
				<Grid/>
			</div>
		);
}