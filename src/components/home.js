import React from 'react';

export default class Home extends React.Component {
	goToGame(event) {
		event.preventDefault();
		this.props.history.push('/game');
	}
	render () {
		return (
			<div className="home">
				<h1>Welcome to Hiking Adventure</h1>
				<p>This desktop game can be easily played with just the arrow keys on your keyboard and some knowledge of backpacking and long backpacking trails.</p>
				<button onClick={e => this.goToGame(e)}>Start game</button>
				<button>Sign up</button>
				<button>Log in</button>
			</div>
			);
	}
}