import React from 'react';
import CurrentScore from './currentscore';
import HighScore from './highscore';
import './score.css';
import SaveScore from './savescore';

export default function Score() {
	return (
			<div className="score">
				<CurrentScore/>
				<SaveScore/>
				<HighScore/>
			</div>
		);
}