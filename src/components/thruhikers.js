import React from 'react';
import Header from './header';
import './thruhikers.css';
import {connect} from 'react-redux';
import {thruHikerData} from '../actions/thruhiker';

export class ThruHikers extends React.Component {
	componentDidMount() {
		this.props.dispatch(thruHikerData());
	}
	render() {
		console.log(this.props.users);
		const thruhikers = this.props.users.map((user, index) => {
			return (
				<div className="topusersandscores" key={index}>
					<div className="rank">{index+1}</div>
					<div className="mobileuserheader">Trail Name</div>
					<div className="topuser">{user.username}</div>
					<div className="mobiletopscoreheader">Top Score</div>
					<div className="topscore">{user.highscore}</div>
				</div>
			);
		})
		return (
			<div className="thruhikers">
				<Header/>
				<div className="leaderboard">
					<div className="leaderboardheader">
						<div className="rank"></div>
						<div className="userheader">Trail Name</div>
						<div className="scoreheader">Top Score</div>
					</div>
					{thruhikers}
				</div>
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		users: state.thruHikerReducer.users || []
	}
}

export default connect(mapStateToProps)(ThruHikers)