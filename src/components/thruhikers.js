import React from 'react';
import Header from './header';
import './thruhikers.css';

export default class ThruHikers extends React.Component {
	render() {
		return (
			<div className="thruhikers">
				<Header/>
				<div className="leaderboard">
					<div className="leaderboardheader">
						<div className="userheader">Username</div>
						<div className="scoreheader">Top Score</div>
					</div>
					<div className="topusersandscores">
						<div className="topuser">PlaceHolder</div>
						<div className="topscore">100000</div>
					</div>
				</div>
			</div>
			)
	}
}