import React from 'react';
import Grid from './grid';
import Score from './score';
import './game.css';
import BearAttack from './bearattack';
import Footer from './footer';

export default function Game(props) {
	return (
			<div className="game">
				<BearAttack/>
				<Score/>
				<Grid/>
				<Footer/>
			</div>
		);
}