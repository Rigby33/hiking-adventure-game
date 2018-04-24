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