import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Header from './header';
import './signup.css';
import RegistrationForm from './registrationform';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/game" />;
    }
    return (
        <div className="signup">
	        <Header/>
            <RegistrationForm />
        </div>
    );
}

const mapStateToProps = state => {
	return {
		loggedIn: state.authReducer.currentUser !== null
	}
};

export default connect(mapStateToProps)(RegistrationPage);


// import React from 'react';
// import './signup.css';
// import Header from './header';

// export default function SignUp() {
// 	return (
// 		<div className="signup">
// 			<Header/>
// 			<form>
// 				<h2>Sign up to save your <span>high score</span> and get added to the <span>thru hiker</span> board</h2>
// 				<input type="text" placeholder="trail name"/>
// 				<input type="password" placeholder="password"/>
// 				<input type="password" placeholder="confirm password"/>
// 				<button type="submit">Sign Up</button>
// 			</form>
// 		</div>
// 		);
// }