import React from 'react';
import CurrentScore from './currentscore';
import HighScore from './highscore';
import './score.css';

export default function Score() {
	return (
			<div className="score">
				<CurrentScore/>
				<HighScore/>
			</div>
		);
}