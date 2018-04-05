import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="buttons">
					<button>Sign up</button>
					<button>Log in</button>
				</div>
			</footer>
			)
	}
}